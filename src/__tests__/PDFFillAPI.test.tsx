import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PDFFillAPI from '../pages/PDFFillAPI';
import '@testing-library/jest-dom';

describe('PDFFillAPI Component', () => {
    test('renders initial step correctly', () => {
        render(
            <MemoryRouter>
                <PDFFillAPI />
            </MemoryRouter>
        );

        expect(screen.getAllByText(/Fill PDF via API/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/Upload PDF/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/Create API endpoint/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/Your Uploaded PDF will show up here/i)[0]).toBeInTheDocument();
    });

    test('navigates to next step on Next button click', () => {
        render(
            <MemoryRouter>
                <PDFFillAPI />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/Next/i));
        expect(screen.getByText(/NEXT STEP: create API endpoints/i)).toBeInTheDocument();
    });

    test('navigates to previous step on Back button click', () => {
        render(
            <MemoryRouter>
                <PDFFillAPI />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/Next/i));
        fireEvent.click(screen.getByText(/Back/i));
        expect(screen.getAllByText(/Upload PDF/i)[0]).toBeInTheDocument();
    });

    test('navigates to home on Back button click from first step', () => {
        render(
            <MemoryRouter>
                <PDFFillAPI />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/Back/i));
        expect(screen.getByText(/Fill PDF via API/i)).toBeInTheDocument();
    });

    test('navigates to home on Next button click from last step', () => {
        render(
            <MemoryRouter>
                <PDFFillAPI />
            </MemoryRouter>
        );

        fireEvent.click(screen.getAllByText(/Next/i)[0]);
        fireEvent.click(screen.getAllByText(/Next/i)[1]);
        expect(screen.getByText(/Fill PDF via API/i)).toBeInTheDocument();
    });
});
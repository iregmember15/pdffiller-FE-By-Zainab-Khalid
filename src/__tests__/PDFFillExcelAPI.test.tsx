import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PDFFillExcelAPI from '../pages/PDFFillExcelAPI';
import '@testing-library/jest-dom';

describe('PDFFillExcelAPI', () => {
    test('renders initial step correctly', () => {
        render(
            <MemoryRouter>
                <PDFFillExcelAPI />
            </MemoryRouter>
        );

        expect(screen.getByText('Create document template')).toBeInTheDocument();
        expect(screen.getAllByText('Upload PDF')[0]).toBeInTheDocument();
    });

    test('navigates to next step on Next button click', () => {
        render(
            <MemoryRouter>
                <PDFFillExcelAPI />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Next'));

        expect(screen.getByText((content) => content.includes('NEXT STEP: upload CSV / MS EXCEL / OPEN OFFICE CALC'))).toBeInTheDocument();
    });

    test('navigates to previous step on Back button click', () => {
        render(
            <MemoryRouter>
                <PDFFillExcelAPI />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Next'));
        fireEvent.click(screen.getByText('Back'));

        expect(screen.getByText('Create document template')).toBeInTheDocument();
    });

    test('opens and closes dropdown menu', () => {
        render(
            <MemoryRouter>
                <PDFFillExcelAPI />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Template'));
        expect(screen.getByText('My Templates')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Template'));
        expect(screen.queryByText('My Templates')).not.toBeInTheDocument();
    });

});
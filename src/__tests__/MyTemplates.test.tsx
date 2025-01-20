import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyTemplates from '../pages/MyTemplates';
import '@testing-library/jest-dom';

describe('MyTemplates Component', () => {
    test('renders without crashing', () => {
        const { getByText } = render(<MyTemplates />);
        expect(getByText('My Templates')).toBeInTheDocument();
    });

    test('renders all templates', () => {
        const { getByText } = render(<MyTemplates />);
        expect(getByText('Accounts Plan Worksheet')).toBeInTheDocument();
        expect(getByText('Register A New Company')).toBeInTheDocument();
        expect(getByText('Corporate Transparency Act')).toBeInTheDocument();
        expect(getByText('Conflict Of Interest Waiver Form')).toBeInTheDocument();
        expect(getByText('Disclosure Of Tax Information')).toBeInTheDocument();
        expect(getByText('Funeral Arrangements')).toBeInTheDocument();
    });

    test('toggles dropdown menu', () => {
        const { getByTestId, getByText } = render(<MyTemplates />);
        const dotsButton = getByTestId('MoreOptions-1');
        fireEvent.click(dotsButton);
        expect(getByText('View')).toBeInTheDocument();
        expect(getByText('Edit')).toBeInTheDocument();
        expect(getByText('Duplicate')).toBeInTheDocument();
        expect(getByText('Add To My Library')).toBeInTheDocument();
        expect(getByText('Delete')).toBeInTheDocument();
    });

    test('closes dropdown menu on second click', () => {
        const { getByTestId, queryByText } = render(<MyTemplates />);
        const dotsButton = getByTestId('MoreOptions-1');
        fireEvent.click(dotsButton);
        fireEvent.click(dotsButton);
        expect(queryByText('View')).not.toBeInTheDocument();
    });

    test('Add New button is present', () => {
        const { getByText } = render(<MyTemplates />);
        expect(getByText('Add New')).toBeInTheDocument();
    });
});
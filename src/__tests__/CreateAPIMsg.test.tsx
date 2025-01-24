import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateAPIMsg from '../components/CreateAPIMsg';
import '@testing-library/jest-dom';

describe('CreateAPIMsg', () => {
    const mockSetCurrentStep = jest.fn();

    beforeEach(() => {
        mockSetCurrentStep.mockClear();
    });

    it('renders the component correctly', () => {
        const { getByText } = render(
            <Router>
                <CreateAPIMsg setCurrentStep={mockSetCurrentStep} />
            </Router>
        );

        expect(getByText('Use our app to create api')).toBeInTheDocument();
        expect(getByText('https://sheetify.clicflo.com')).toBeInTheDocument();
    });

    it('has the correct link', () => {
        const { getByRole } = render(
            <Router>
                <CreateAPIMsg setCurrentStep={mockSetCurrentStep} />
            </Router>
        );

        const linkElement = getByRole('link', { name: 'https://sheetify.clicflo.com' });
        expect(linkElement).toHaveAttribute('href', 'https://sheetify.clicflo.com');
    });
});
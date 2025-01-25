import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateAPIMsg from '../components/CreateAPIMsg';
import '@testing-library/jest-dom';

describe('CreateAPIMsg', () => {
    const mocksetIsCreateAPI = jest.fn();

    beforeEach(() => {
        mocksetIsCreateAPI.mockClear();
    });

    it('renders the component correctly', () => {
        const { getByText } = render(
            <Router>
                <CreateAPIMsg setIsCreateAPI={mocksetIsCreateAPI} />
            </Router>
        );

        expect(getByText('Use our app to create api')).toBeInTheDocument();
        expect(getByText('https://sheetify.clicflo.com')).toBeInTheDocument();
    });

    it('has the correct link', () => {
        const { getByRole } = render(
            <Router>
                <CreateAPIMsg setIsCreateAPI={mocksetIsCreateAPI} />
            </Router>
        );

        const linkElement = getByRole('link', { name: 'https://sheetify.clicflo.com' });
        expect(linkElement).toHaveAttribute('href', 'https://sheetify.clicflo.com');
    });
});
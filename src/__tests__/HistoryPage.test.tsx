import React from 'react';
import { render } from '@testing-library/react';
import HistoryPage from '../pages/HistoryPage';
import '@testing-library/jest-dom'; 

describe('HistoryPage', () => {
    it('renders without crashing', () => {
        const { container } = render(<HistoryPage />);
        expect(container).toBeInTheDocument();
    });

    it('renders the correct text in the main section', () => {
        const { getByText } = render(<HistoryPage />);
        expect(getByText('After You fill Pdf your history will maintain here')).toBeInTheDocument();
    });
});
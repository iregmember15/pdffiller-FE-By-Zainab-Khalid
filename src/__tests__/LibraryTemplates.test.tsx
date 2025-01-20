import React from 'react';
import { render, screen } from '@testing-library/react';
import LibraryTemplates from '../pages/LibraryTemplates';
import '@testing-library/jest-dom'; 

describe('LibraryTemplates', () => {

    test('renders main section', () => {
        render(<LibraryTemplates />);
        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
    });

    test('render title', () => {
        render(<LibraryTemplates />);
        const templateTitle = screen.getByText('Use Template Which You Want');
        expect(templateTitle).toBeInTheDocument();
    });

    test('renders "Use Template" buttons', () => {
        render(<LibraryTemplates />);
        const useTemplateButtons = screen.getAllByText('Use Template');
        expect(useTemplateButtons).toHaveLength(3);
    });

    test('renders images', () => {
        render(<LibraryTemplates />);
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(3);
    });
});
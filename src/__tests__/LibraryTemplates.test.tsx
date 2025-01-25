import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LibraryTemplates from '../pages/LibraryTemplates';
import pdfFile from '../assets/filled_form.pdf';

jest.mock('react-pdf-js', () => ({
    __esModule: true,
    default: ({ file }: { file: string }) => <div data-testid="pdf-viewer">PDF Viewer for {file}</div>,
}));

describe('LibraryTemplates Component', () => {
    test('renders without errors', () => {
        render(<LibraryTemplates />);

        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
    });

    test('renders all templates', () => {
        render(<LibraryTemplates />);

        const templates = screen.getAllByTestId('pdf-viewer');
        expect(templates).toHaveLength(3);
    });

    test('renders each template with a PDF viewer and button', () => {
        render(<LibraryTemplates />);

        const pdfViewers = screen.getAllByTestId('pdf-viewer');
        const buttons = screen.getAllByRole('button', { name: /Use Template/i });

        expect(pdfViewers).toHaveLength(3);
        expect(buttons).toHaveLength(3);
    });

    test('opens the correct PDF in a new tab when clicking "Use Template"', () => {
        window.open = jest.fn(); 

        render(<LibraryTemplates />);

        const buttons = screen.getAllByRole('button', { name: /Use Template/i });
        fireEvent.click(buttons[0]);

        expect(window.open).toHaveBeenCalledWith(pdfFile, '_blank');
    });

});

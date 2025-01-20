import '@testing-library/jest-dom'; 
import { render } from '@testing-library/react';
import RichTextEditor from '../components/EmailContent';

describe('RichTextEditor', () => {
    test('renders without crashing', () => {
        const { getByTestId } = render(<RichTextEditor />);
        expect(getByTestId('rich-text-editor')).toBeInTheDocument();
    });


    test('has the correct toolbar options', () => {
        const { container } = render(<RichTextEditor />);
        const toolbar = container.querySelector('.ql-toolbar');
        expect(toolbar).toBeInTheDocument();
        expect(toolbar?.querySelector('.ql-bold')).toBeInTheDocument();
        expect(toolbar?.querySelector('.ql-italic')).toBeInTheDocument();
        expect(toolbar?.querySelector('.ql-underline')).toBeInTheDocument();
        expect(toolbar?.querySelector('.ql-strike')).toBeInTheDocument();
        expect(toolbar?.querySelector('.ql-link')).toBeInTheDocument();
        expect(toolbar?.querySelector('.ql-image')).toBeInTheDocument();
    });
});
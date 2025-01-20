import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/HomePage';

jest.mock('../components/Home/Navbar', () => () => <div data-testid="navbar">Mock Navbar</div>);
jest.mock('../components/Home/PDFTools', () => () => <div data-testid="pdftools">Mock PDFTools</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Mock Footer</div>);

describe('HomePage', () => {
  test('renders HomePage with all child components', () => {
    render(<HomePage />);
    
    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument();

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();

    const pdftools = screen.getByTestId('pdftools');
    expect(pdftools).toBeInTheDocument();

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();

    const bgDiv = screen.getByTestId('home-page').querySelector('.bottom-container');
    expect(bgDiv).toHaveClass('bg-[#182B57] h-10 bottom-container');
  });
});

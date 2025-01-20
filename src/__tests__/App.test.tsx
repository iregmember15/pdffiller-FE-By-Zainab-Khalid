import '@testing-library/jest-dom'; 
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

describe("renders the app component", () => {
  test("app component renders", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
  });
});

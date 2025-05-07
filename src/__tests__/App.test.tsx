import '@testing-library/jest-dom'; 
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';


jest.mock('react-pdf-js', () => ({
  __esModule: true,
  default: ({ file }: { file: string }) => <div data-testid="pdf-viewer">PDF Viewer for {file}</div>,
}));

describe("renders the app component", () => {
  // test("app component renders", () => {
  //   render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   const appElement = screen.getByTestId("app");
  //   expect(appElement).toBeInTheDocument();
  // });
  test('app component renders', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  
    const appElement = await screen.findByTestId("app");
    expect(appElement).toBeInTheDocument();
  });
});

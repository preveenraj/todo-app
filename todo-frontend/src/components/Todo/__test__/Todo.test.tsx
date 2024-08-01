import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from '../index';
import { ThemeProvider } from 'styled-components';


const theme = {
    colors: {
      background: "#5A639C",
      primary: "#ef7360",
      textPrimary: "#538392",
      textSecondary: "#240750",
    },
  };

  
const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

test('renders Heading in Todo component', () => {
    renderWithTheme(<Todo/>);
    const headingElement = screen.getByText("My Tasks");
    expect(headingElement).toBeInTheDocument();
});
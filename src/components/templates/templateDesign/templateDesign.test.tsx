

import { render } from '@testing-library/react';
import TemplateLayout from '.';
import { BrowserRouter } from 'react-router-dom';

describe('TemplateLayout', () => {
  it('should render Header and children component', () => {
    
    const headerText = 'Header';
    const childrenText = 'Children';

    
    const { getByText } = render(
      <BrowserRouter>
        <TemplateLayout
          header={<h1>{headerText}</h1>}
          children={<p>{childrenText}</p>}
        />
      </BrowserRouter>
    );

    
    expect(getByText(headerText)).toBeInTheDocument();
    expect(getByText(childrenText)).toBeInTheDocument();
  });
});
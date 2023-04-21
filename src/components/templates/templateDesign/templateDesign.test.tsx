import { render } from '@testing-library/react';
import TemplateLayout from './index';

describe('TemplateLayout', () => {
  test('renders header and children', () => {
    const headerText = 'Header';
    const childrenText = 'Children';

    const { getByText } = render(
      <TemplateLayout
        header={<h1>{headerText}</h1>}
        children={<p>{childrenText}</p>}
      />
    );

    const headerElement = getByText(headerText);
    const childrenElement = getByText(childrenText);

    expect(headerElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
    });
});
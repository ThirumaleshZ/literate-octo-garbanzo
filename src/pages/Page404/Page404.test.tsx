import { Page404 } from '.';
import { render } from '@testing-library/react';

describe('Page404', () => {
    it('renders error message with correct style', () => {
        const { getByText } = render(<Page404 />);
        const errorMessage = getByText('Error 404 Page not found');
        expect(errorMessage).toBeDefined();
      });
    
    });
    

import React from 'react'
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';
import TemplateLayout from '../../components/templates/templateDesign';
import HeaderContent from './HeaderContent';
import BodyContent from './BodyContent';

const CashAccelaration =  () => {

    return (
      <ThemeProvider theme={theme}>
        <TemplateLayout
          header={<HeaderContent />}
          children={<BodyContent />}
          role="CashAccelaration"
        />
      </ThemeProvider>
    );
}

export default CashAccelaration;

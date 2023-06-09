import './font.css'
import { BrowserRouter } from "react-router-dom";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <BrowserRouter initialEntries={['/']}>
      <Story />
    </BrowserRouter>
  ),
];
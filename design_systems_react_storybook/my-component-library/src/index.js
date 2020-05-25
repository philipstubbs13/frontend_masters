import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, { SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
  <div>
    <PrimaryButton modifiers={["small", "error"]}>Hello World</PrimaryButton>
    <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Goodbye World</SecondaryButton>
    <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>Hey World</TertiaryButton>
    <GlobalStyle />
  </div>
)


ReactDOM.render(<App />, document.querySelector("#root"));
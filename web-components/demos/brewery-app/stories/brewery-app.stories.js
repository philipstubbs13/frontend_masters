import { html } from 'lit';
import '../src/brewery-app.js';

export default {
  title: 'BreweryApp',
  component: 'brewery-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <brewery-app
      style="--brewery-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </brewery-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

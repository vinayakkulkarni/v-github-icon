import { App as Application } from 'vue';
import VGithubIcon from './components/VGithubIcon.vue';

let installed = false;

const install = (app: Application) => {
  if (!installed) {
    app.component('VGithubIcon', VGithubIcon);
    installed = true;
  }
};

export default install;

import { App as Application, Plugin } from 'vue';
import VGithubIcon from './components/VGithubIcon.vue';
import { setVueInstance } from './utils/config';

let installed = false;

const install: Exclude<Plugin['install'], undefined> = (app: Application) => {
  if (!installed) {
    setVueInstance(app);
    app.component('VGithubIcon', VGithubIcon);
    installed = true;
  }
};

export default install;

import VueCompositionApi from '@vue/composition-api';
import { VueConstructor } from 'vue';
import VGithubIcon from './components/VGithubIcon.vue';

let installed = false;

const install = {
  install(Vue: VueConstructor): void {
    if (!installed) {
      Vue.use(VueCompositionApi);
      Vue.component('VGithubIcon', VGithubIcon);
      installed = true;
    }
  },
};

export default install;

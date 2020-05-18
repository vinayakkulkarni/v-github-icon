import VGithubIcon from './index';

export default { title: 'GitHub Icon' };

export const withUrlProp = () => ({
  components: { VGithubIcon },
  template: '<v-github-icon url="https://vinayakkulkarni.dev" />',
});

export const withTopLeftPosition = () => ({
  components: { VGithubIcon },
  template:
    '<v-github-icon url="https://vinayakkulkarni.dev" position="top-left" />',
});

export const withBgColorProp = () => ({
  components: { VGithubIcon },
  template:
    '<v-github-icon url="https://vinayakkulkarni.dev" bg-color="red" />',
});

export const withFillColorProp = () => ({
  components: { VGithubIcon },
  template:
    '<v-github-icon url="https://vinayakkulkarni.dev" fill-color="red" />',
});

export const withBgAndFillColorProp = () => ({
  components: { VGithubIcon },
  template:
    '<v-github-icon url="https://vinayakkulkarni.dev" bg-color="rgba(10, 150, 200)" fill-color="rgba(255, 150, 20)" />',
});

# [v-github-icon](https://vinayakkulkarni.github.io/v-github-icon/) :octocat:

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-github-icon/ci?logo=github-actions)](https://github.com/vinayakkulkarni/v-github-icon/actions/workflows/ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-github-icon/codeql?logo=github-actions)](https://github.com/vinayakkulkarni/v-github-icon/actions/workflows/codeql.yml)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-github-icon/Ship%20js%20trigger?label=⛴%20Ship.js%20trigger)](https://github.com/vinayakkulkarni/v-github-icon/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/v-github-icon?sort=semver&logo=github)](https://github.com/vinayakkulkarni/v-github-icon/releases)
[![npm](https://img.shields.io/npm/v/v-github-icon?logo=npm)](https://www.npmjs.com/package/v-github-icon)
[![npm](https://img.shields.io/npm/dm/v-github-icon?logo=npm)](http://npm-stat.com/charts.html?package=v-github-icon)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/v-github-icon/latest)](https://bundlephobia.com/package/v-github-icon@latest)
[![npm type definitions](https://img.shields.io/npm/types/v-github-icon?logo=TypeScript)](https://github.com/vinayakkulkarni/v-github-icon/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/11604/branches/426884/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=11604&bid=426884)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/v-github-icon)](https://snyk.io/test/github/vinayakkulkarni/v-github-icon)
[![Codebeat](https://codebeat.co/badges/055e70c6-1d9c-4d11-9059-2b6960b84731)](https://codebeat.co/projects/github-com-vinayakkulkarni-v-github-icon-master)
[![Netlify](https://img.shields.io/netlify/341e9f45-256e-4ad0-9f7f-b948b60f4e99?logo=netlify)](https://app.netlify.com/sites/v-github-icon/deploys)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/v-github-icon)](https://github.com/vinayakkulkarni/v-github-icon/graphs/contributors)

[![built using janak](https://img.shields.io/badge/built%20using-janak-brightgreen)](https://github.com/vinayakkulkarni/janak)
[![eslint](https://img.shields.io/npm/dependency-version/v-github-icon/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/v-github-icon/dev/prettier?logo=prettier)](https://prettier.io/)
[![vue](https://img.shields.io/npm/dependency-version/v-github-icon/dev/vue?logo=vue.js)](https://vuejs.org/)
[![vite](https://img.shields.io/npm/dependency-version/v-github-icon/dev/vite?logo=vite)](https://vitejs.dev/)
[![typescript](https://img.shields.io/npm/dependency-version/v-github-icon/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

⚠️ Docs are for Vue 3, for Vue 2 docs, check [this tree](https://github.com/vinayakkulkarni/v-github-icon/tree/v2.6.1#readme)

## Features

- GitHub corners made easy!
- Built from scratch usign Vue 3
- For Vue 3.x version – `npm i v-github-icon`
- For Vue 2.x version – `npm i v-github-icon@1 && npm i -D @vue/composition-api`

## Table of Contents

- [v-github-icon :octocat:](#v-github-icon-octocat)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Requirements](#requirements)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
  - [Usage](#usage)
    - [Nuxt](#nuxt)
    - [HTML](#html)
    - [JS](#js)
    - [HTML](#html-1)
    - [JS](#js-1)
  - [API](#api)
    - [Props](#props)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Author](#author)

## Demo

[![Edit v-github-icon](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/v-github-icon?file=src/App.vue)

## Requirements

- [Vue](https://vuejs.org/) `^3.x`

### Installation

```sh
npm install --save v-github-icon
```

CDN: [UNPKG](https://unpkg.com/v-github-icon/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-github-icon/dist/)

### Build Setup

```bash
# install dependencies
$ npm install

# package the library
$ npm run build
```

## Usage

Register the component globally:

```js
// main.ts
import { VGithubIcon } from 'v-github-icon';
import { createApp } from 'vue';

const app = createApp({});
app.component('VGithubIcon', VGithubIcon);
```

Or use locally

```javascript
import { VGithubIcon } from 'v-github-icon';
```

### Nuxt

For Nuxt 3, create a file in `plugins/v-image.ts`

```js
import { VImage } from 'v-image';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VImage', VImage);
```

then import the file in `nuxt.config.{j|t}s`:

```js
export default {
  // ...
  plugins: [
    // ...
    { src: '~/plugins/v-image', mode: 'client' },
    // ...
  ],
  // ...
};
```

<details>
<summary>
<em>Example 1 (<a href="examples/src/App.vue">refer App.vue</a>)</em>
</summary>

### HTML

```html
<v-github-icon
  :position="position"
  :url="url"
  :bg-color="bgColor"
  :fill-color="fillColor"
/>
```

### JS

```javascript
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { VGithubIcon } from 'v-github-icon';

  export default defineComponent({
    components: {
      VGithubIcon,
    },
    setup() {
      const state = ref({
        position: 'top-left',
        url: 'https://github.com/vinayakkulkarni/v-github-icon',
        bgColor: '#FFF',
        fillColor: '#111',
      });

      return {
        state,
      };
    },
  });
</script>
```

</details>

<details>
<summary>
<em>Example 2 (minimal)</em>
</summary>

### HTML

```html
<v-github-icon url="https://github.com/vinayakkulkarni/v-github-icon" />
```

### JS

```javascript
<script lang="ts">
  import { defineComponent } from 'vue';
  import { VGithubIcon } from 'v-github-icon';

  export default defineComponent({
    name: 'App',
    components: {
      VGithubIcon,
    },
  });
</script>
```

</details>

## API

### Props

| Name         | Type   | Required? | Description                                         |
| ------------ | ------ | --------- | --------------------------------------------------- |
| `url`        | String | Yes       | The URL link to GitHub project repository           |
| `position`   | String | No        | Position of the icon, `'top-left'` or `'top-right'` |
| `bg-color`   | String | No        | Color of the octocat                                |
| `fill-color` | String | No        | Color excluding the octocat                         |

## Built with

- [TypeScript](https://www.typescriptlang.org/).
- [Vue 2](https://v3.vuejs.org)

## Contributing

1. Fork it ( [https://github.com/vinayakkulkarni/v-github-icon/fork](https://github.com/vinayakkulkarni/v-github-icon/fork) )
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/v-github-icon/compare)

_Note_:

1. Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_

## Author

**v-github-icon** &copy; [Vinayak](https://vinayakkulkarni.dev), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-github-icon/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)

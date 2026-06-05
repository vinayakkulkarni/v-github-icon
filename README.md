# [v-github-icon](https://vinayakkulkarni.github.io/v-github-icon/) :octocat:

<!-- Badges -->

[![Pipeline](https://img.shields.io/github/actions/workflow/status/vinayakkulkarni/v-github-icon/pipeline.yml?branch=main&logo=github-actions&label=pipeline)](https://github.com/vinayakkulkarni/v-github-icon/actions/workflows/pipeline.yml)
[![Doctor](https://img.shields.io/badge/doctor-audited-2ea043?logo=vuedotjs&label=doctor)](https://github.com/geoql/doctor)
[![GitHub release](https://img.shields.io/github/v/release/vinayakkulkarni/v-github-icon?sort=semver&logo=github&label=release)](https://github.com/vinayakkulkarni/v-github-icon/releases)
[![npm](https://img.shields.io/npm/v/v-github-icon?logo=npm&label=npm)](https://www.npmjs.com/package/v-github-icon)
[![JSR](https://img.shields.io/jsr/v/@vinayakkulkarni/v-github-icon?logo=jsr&label=jsr)](https://jsr.io/@vinayakkulkarni/v-github-icon)
[![npm downloads](https://img.shields.io/npm/dm/v-github-icon?logo=npm&label=downloads)](http://npm-stat.com/charts.html?package=v-github-icon)
[![bundle size](https://img.shields.io/bundlephobia/minzip/v-github-icon?label=size)](https://bundlephobia.com/package/v-github-icon@latest)
[![types](https://img.shields.io/npm/types/v-github-icon?logo=typescript&label=types)](https://github.com/vinayakkulkarni/v-github-icon/blob/main/package.json)
[![License](https://img.shields.io/github/license/vinayakkulkarni/v-github-icon?logo=github&label=license)](./LICENSE)

[![vite-plus](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-github-icon/dev/vite-plus?logo=vite&label=vite-plus)](https://github.com/voidzero-dev/vite-plus)
[![typescript](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-github-icon/dev/typescript?logo=TypeScript&label=typescript)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/github/package-json/packageManager/vinayakkulkarni/v-github-icon?label=pnpm&logo=pnpm)](https://pnpm.io/)
[![node](https://img.shields.io/node/v/v-github-icon?logo=node.js&label=node)](https://nodejs.org/)

<!-- End Badges -->

⚠️ Docs are for Vue 3, for Vue 2 docs, check [this tree](https://github.com/vinayakkulkarni/v-github-icon/tree/v2.6.1#readme)

## Features

- GitHub corners made easy!
- Built from scratch usign Vue 3
- For Vue 3.x version – `pnpm add v-github-icon`
- For Vue 2.x version – `pnpm add v-github-icon@1 && pnpm add -D @vue/composition-api`

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
pnpm add v-github-icon
```

CDN: [UNPKG](https://unpkg.com/v-github-icon/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-github-icon/dist/)

### Build Setup

```bash
# install dependencies
$ pnpm install

# package the library
$ pnpm run build
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

For Nuxt 3, create a file in `plugins/v-github-icon.ts`

```js
import { VGithubIcon } from 'v-github-icon';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VGithubIcon', VGithubIcon);
```

then import the file in `nuxt.config.{j|t}s`:

```js
export default {
  // ...
  plugins: [
    // ...
    { src: '~/plugins/v-github-icon', mode: 'client' },
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

# v-github-icon :octocat:

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-github-icon/ci?logo=github-actions)](https://github.com/vinayakkulkarni/v-github-icon/actions/workflows/ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-github-icon/Ship%20js%20trigger?label=⛴%20Ship.js%20trigger)](https://github.com/vinayakkulkarni/v-github-icon/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/v-github-icon?sort=semver&logo=github)](https://github.com/vinayakkulkarni/v-github-icon/releases)
[![npm](https://img.shields.io/npm/v/v-github-icon?logo=npm)](https://www.npmjs.com/package/v-github-icon)
[![npm](https://img.shields.io/npm/dm/v-github-icon?logo=npm)](http://npm-stat.com/charts.html?package=v-github-icon)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/v-github-icon/latest)](https://bundlephobia.com/package/v-github-icon@latest)
[![npm type definitions](https://img.shields.io/npm/types/v-github-icon)](https://github.com/vinayakkulkarni/v-github-icon/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/18487/branches/453975/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=18487&bid=453975)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/v-github-icon)](https://snyk.io/test/github/vinayakkulkarni/v-github-icon)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/vinayakkulkarni/v-github-icon.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/vinayakkulkarni/v-github-icon/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/vinayakkulkarni/v-github-icon.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/vinayakkulkarni/v-github-icon/context:javascript)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/v-github-icon)](https://github.com/vinayakkulkarni/v-github-icon/graphs/contributors)

[![built using janak](https://img.shields.io/badge/built%20using-janak-brightgreen)](https://github.com/vinayakkulkarni/janak)
[![eslint](https://img.shields.io/npm/dependency-version/v-github-icon/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/v-github-icon/dev/prettier?logo=prettier)](https://prettier.io/)
[![rollup](https://img.shields.io/npm/dependency-version/v-github-icon/dev/rollup?logo=rollup.js)](https://rollupjs.org/guide/en/)
[![vue](https://img.shields.io/npm/dependency-version/v-github-icon/dev/vue?logo=vue.js)](https://vuejs.org/)
[![typescript](https://img.shields.io/npm/dependency-version/v-github-icon/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

## Features

* GitHub corners made easy!
* Built from scratch usign Vue 2 & Composition API with TypeScript
* For Vue 2.x version – `npm i v-github-icon@latest`
* For Vue 3.x version – `npm i v-github-icon@next`


## Table of Contents

- [v-github-icon :octocat:](#v-github-icon-octocat)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Requirements](#requirements)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
  - [Usage](#usage)
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

[![Edit v-github-icon demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v-github-icon-demo-tdnng?fontsize=14&hidenavigation=1&theme=dark)

## Requirements

* [vue](https://vuejs.org/) `^2.x`
* [@vue/composition-api](https://v3.vuejs.org/guide/composition-api-introduction.html) `^1.x`

### Installation

```sh
npm install --save v-github-icon
npm install --save-dev @vue/composition-api
```

CDN: [UNPKG](https://unpkg.com/v-github-icon/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-github-icon/dist/) (available as `window.VOffline`)

### Build Setup

``` bash
# install dependencies
$ npm ci

# package the library
$ npm run build
```


## Usage

Register the component globally:

```javascript
Vue.component('VGithubIcon', require('v-github-icon'));
```

Or use locally

```javascript
import VGithubIcon from 'v-github-icon';
```

<details>
<summary>
<em>Example 1 (<a href="examples/App.vue">refer App.vue</a>)</em>
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
import { VGithubIcon } from 'v-github-icon';

Vue.component('example-component', {
  components: {
    VGithubIcon,
  },
  data: () => ({
    position: 'top-left',
    url: 'https://github.com/vinayakkulkarni/v-pip',
    bgColor: '#FFF',
    fillColor: '#111',
  }),
});
```
</details>

<details>
<summary>
<em>Example 2 (minimal)</em>
</summary>

### HTML
```html
  <v-github-icon url="https://github.com/vinayakkulkarni/v-pip" />
```
### JS
```javascript
import { VGithubIcon } from 'v-github-icon';

Vue.component('example-component', {
  components: {
    VGithubIcon,
  },
});
```

</details>

## API
### Props

| Name            | Type   | Required? | Description                                                 |
| --------------  | ------ | --------- | ----------------------------------------------------------- |
| `url`     | String | Yes        | The URL link to GitHub project repository    |
| `position` | String | No        | Position of the icon, `'top-left'` or `'top-right'` |
| `bg-color` | String | No        | Color of the octocat |
| `fill-color` | String | No        | Color excluding the octocat |

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

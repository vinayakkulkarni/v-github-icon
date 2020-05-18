# V-Github-Icon :octocat:

<p align="center">
<a href="http://npmjs.org/package/v-github-icon"><img src="https://img.shields.io/npm/v/v-github-icon.svg" alt="npm version"></a> <a href="https://github.com/vinayakkulkarni/v-github-icon/releases"><img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/vinayakkulkarni/v-github-icon?include_prereleases"></a> <a href="https://bundlephobia.com/result?p=v-github-icon"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/v-github-icon"></a> <a href="http://npm-stat.com/charts.html?package=v-github-icon"><img src="https://img.shields.io/npm/dm/v-github-icon.svg" alt="npm downloads"></a> <a href="https://github.com/vinayakkulkarni/v-github-icon/actions?query=workflow%3A%22Ship+js+trigger%22"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/vinayakkulkarni/v-github-icon/Ship js trigger"></a> <a href="https://david-dm.org/vinayakkulkarni/v-github-icon?type=dev" title="devDependencies status"><img src="https://david-dm.org/vinayakkulkarni/v-github-icon/dev-status.svg"/></a>
</p>

---

* GitHub corners made easy!

* This is [on GitHub](https://github.com/vinayakkulkarni/v-github-icon) so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

* Demo here -> [💯 Codesandbox Link](http://bit.ly/v-github-icon)

## Requirements

* [Vue.js](https://vuejs.org/) 2.x & [Composition API](https://composition-api.vuejs.org/)

## Installation

```bash
npm i v-github-icon # yarn add v-github-icon
```

CDN: [UNPKG](https://unpkg.com/v-github-icon/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-github-icon/dist/) (available as `window.VGithubIcon`)

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
import VGithubIcon from 'v-github-icon';

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
import VGithubIcon from 'v-github-icon';

Vue.component('example-component', {
  components: {
    VGithubIcon,
  },
});
```

</details>

### Props

| Name            | Type   | Required? | Description                                                 |
| --------------  | ------ | --------- | ----------------------------------------------------------- |
| `url`     | String | Yes        | The URL link to GitHub project repository    |
| `position` | String | No        | Position of the icon, `'top-left'` or `'top-right'` |
| `bg-color` | String | No        | Color of the octocat |
| `fill-color` | String | No        | Color excluding the octocat |

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**v-github-icon** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-github-icon/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@_vinayak_k](https://twitter.com/_vinayak_k)

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vite-plus/test';
import { createApp } from 'vue';
import install, { VGithubIcon } from '../src/index';

const url = 'https://github.com/vinayakkulkarni/v-github-icon';

describe('VGithubIcon', () => {
  it('renders an accessible link to the repo', () => {
    const wrapper = mount(VGithubIcon, { props: { url } });
    const link = wrapper.get('a.github-corner');
    expect(link.attributes('href')).toBe(url);
    expect(link.attributes('aria-label')).toBe('View source on GitHub');
    expect(link.attributes('target')).toBe('_blank');
    expect(link.attributes('rel')).toBe('noopener noreferrer');
  });

  it('renders the top-right corner by default', () => {
    const wrapper = mount(VGithubIcon, { props: { url } });
    const svgs = wrapper.findAll('svg');
    expect(svgs).toHaveLength(1);
    const style = svgs[0]?.attributes('style') ?? '';
    expect(style).toContain('right: 0');
    expect(style).not.toContain('scale(-1, 1)');
  });

  it('mirrors the corner for top-left', () => {
    const wrapper = mount(VGithubIcon, {
      props: { url, position: 'top-left' },
    });
    const style = wrapper.get('svg').attributes('style') ?? '';
    expect(style).toContain('left: 0');
    expect(style).toContain('scale(-1, 1)');
  });

  it('applies the colour props', () => {
    const wrapper = mount(VGithubIcon, {
      props: { url, bgColor: '#ffffff', fillColor: '#e8590c' },
    });
    const svg = wrapper.get('svg').element;
    expect(svg.style.fill).toBe('#e8590c');
    expect(svg.style.color).toBe('#ffffff');
  });

  it('renders nothing for an unknown position', () => {
    const wrapper = mount(VGithubIcon, {
      props: { url, position: 'bottom-left' },
    });
    expect(wrapper.findAll('svg')).toHaveLength(0);
  });
});

describe('install', () => {
  it('registers the component globally once', () => {
    const app = createApp({});
    install(app);
    install(app);
    expect(app.component('VGithubIcon')).toBe(VGithubIcon);
  });
});

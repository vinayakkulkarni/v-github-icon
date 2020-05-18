import { mount, createLocalVue } from '@vue/test-utils';
import test from 'ava';
import VGithubIcon from '@/src/VGithubIcon.vue';

let wrapper;
const localVue = createLocalVue();

test('is a Vue instance', (t) => {
  wrapper = mount(VGithubIcon, {
    localVue,
    propsData: {
      url: 'https://vinayakkulkarni.dev',
    },
  });
  t.is(wrapper.vm._isVue, true);
});

test('has correct URL prop', (t) => {
  wrapper = mount(VGithubIcon, {
    localVue,
    propsData: {
      url: 'https://vinayakkulkarni.dev',
    },
  });
  t.is(wrapper.props('url'), 'https://vinayakkulkarni.dev');
});

test('has correct bgColor & URL prop', (t) => {
  wrapper = mount(VGithubIcon, {
    localVue,
    propsData: {
      url: 'https://vinayakkulkarni.dev',
      bgColor: '#FFF',
    },
  });
  t.is(wrapper.props('bgColor'), '#FFF');
  t.not(wrapper.props('bgColor'), '#000');
});

test('has correct fillColor & URL prop', (t) => {
  wrapper = mount(VGithubIcon, {
    localVue,
    propsData: {
      url: 'https://vinayakkulkarni.dev',
      fillColor: '#000',
    },
  });
  t.is(wrapper.props('fillColor'), '#000');
  t.not(wrapper.props('fillColor'), '#FFF');
});

test('renders correct snapshot for top-right position', (t) => {
  wrapper = mount(VGithubIcon, {
    localVue,
    propsData: {
      url: 'https://vinayakkulkarni.dev',
    },
  });
  t.snapshot(wrapper.vm.$el.outerHTML, 'Top-Right');
});

test('renders correct snapshot for top-left position', (t) => {
  wrapper = mount(VGithubIcon, {
    localVue,
    propsData: {
      url: 'https://vinayakkulkarni.dev',
      position: 'top-left',
    },
  });
  t.snapshot(wrapper.vm.$el.outerHTML, 'Top-Left');
});

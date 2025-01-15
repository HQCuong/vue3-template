import { mount } from '@vue/test-utils';
import {
  describe,
  it,
  expect,
} from 'vitest';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders the correct message', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });

    expect(wrapper.find('h1').text()).toBe('Hello Vitest');
  });

  it('increments count when button is clicked', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Click Test' } });

    expect(wrapper.find('p').text()).toBe('Clicked 0 times');

    await wrapper.find('button').trigger('click');

    expect(wrapper.find('p').text()).toBe('Clicked 1 times');
  });
});

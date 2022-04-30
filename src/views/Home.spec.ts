import { createTestingPinia } from '@pinia/testing';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Home from './Home.vue';

describe('Home.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    const mounOptions = {
      global: {
        plugins: [createTestingPinia()],
      },
    };
    wrapper = shallowMount(Home, mounOptions);
  });

  it('should the Home View', () => {
    // Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});

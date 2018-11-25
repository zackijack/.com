import { shallowMount } from '@vue/test-utils';
import Title from '@/components/Title.vue';

describe('Title.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'zackijack';
    const wrapper = shallowMount(Title, {
      propsData: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });
});

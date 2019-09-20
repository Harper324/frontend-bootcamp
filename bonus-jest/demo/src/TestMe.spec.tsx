import React from 'react';
import { mount } from 'enzyme';
import { TestMe } from './TestMe';

describe('TestMe Component', () => {
  it('should have a non-clickable component when the original InnerMe is clicked', () => {
    const wrapper = mount(<TestMe name="world" />);
    wrapper.find('#innerMe').simulate('click');
    expect(wrapper.find('#innerMe').text()).toBe('Clicked');
  });

  it('should have a clickable compoment when the original InnerMe is not clicked', () => {
    const wrapper = mount(<TestMe name="world" />);
    expect(wrapper.find('#innerMe').text()).toBe('Hello world, Click Me')
  })
});

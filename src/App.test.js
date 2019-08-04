import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('UI elements', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('should render a logo', () => {
    expect(wrapper.find('.App-logo').length).toEqual(1);
  });

  it('should render a link', () => {
    expect(wrapper.find('.App-link').length).toEqual(1);
  })
});

import React from 'react';
import Home from './home';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const simulateChangeonInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector)
  input.simulate('change', {
    target: {value: newValue}
  })
  return wrapper.find(inputSelector)
}

describe('Home', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home/>)
  });

  it('renders title of application', () => {
    expect(wrapper.find("h1").text()).toContain("Search Weather")
  });

  it('renders an empty text field with a user prompt', () => {
  expect(wrapper.find('#text-input').at(0).props().placeholder).toEqual('City name...')
  });

  it('renders a button with text "Search"', () => {
  expect(wrapper.find("#search").text()).toBe("Search")
  })

  it('saves the input state', () => {
  const updateInput = simulateChangeonInput(wrapper, '#text-input', 'London')
  expect(updateInput.name()).toBe("input")
  })
});

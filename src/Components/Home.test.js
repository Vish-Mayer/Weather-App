import React from 'react';
import Home from './home';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Home', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home/>)
  });

  it('renders title of application', () => {
    expect(wrapper.find("h1").text()).toContain("Search Weather")
  });
});

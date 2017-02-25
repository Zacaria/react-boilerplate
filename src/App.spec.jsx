import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import App from './App';
const expect = chai.expect;

describe('<App />', () => {
  it('should render correctly', () => {
    console.log('coucou');
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).to.be.eql(1);
  });
});

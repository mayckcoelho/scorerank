import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

describe('App should render correctly', () => {
  it('match snapshot', () => {
    const app = renderer
      .create(<App />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });
})
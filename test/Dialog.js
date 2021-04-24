import React from 'react';
import { render } from 'enzyme';
import Dialog from '../src/Dialog';

describe('test', () => {
  it('test render', () => {
    let Wrapper = render(<Dialog>case one</Dialog>);
    expect(true).toBeTruthy();
  });
});

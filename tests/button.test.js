import React, { Component } from 'react';
import { render, mount } from 'enzyme';
import UiButton from '../src/components/index'

describe('Button', () => {
  it('按钮测试', () => {
    const wrapper = render(
      <UiButton>测试</UiButton>
    );
    expect(wrapper).toMatchSnapshot();
  })
})
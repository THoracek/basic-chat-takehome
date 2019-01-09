import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import {shallow} from "enzyme/build";
import UserNameCard from "./UserNameCard";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chat />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Chat component renders user input on start', () => {
  const component = shallow(
      <Chat />
  );

  it('renders UserName Input', () => {
    expect(component.find(UserNameCard).length).toBe(1);
    component.setState({ username: 'Thomas' });
    //Hides after username is set
    expect(component.find(UserNameCard).length).toBe(0);
  });
});
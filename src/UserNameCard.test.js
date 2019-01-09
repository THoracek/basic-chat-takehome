import React from 'react';
import { shallow } from 'enzyme'

import UserNameCard from './UserNameCard';

describe('UserName Card', () => {
    const component = shallow(
        <UserNameCard/>
    );

    it('renders input', () => {
        expect(component.exists('input')).toBe(true);
    });

    it('renders button', () => {
        expect(component.exists('button')).toBe(true);
    });

    it('calls handleUserNameChange with a new value', () => {
        const newValue = 'newvalue';
        component.instance().handleUserNameChange = jest.fn();
        component.instance().forceUpdate();

        const evt = { target: { value: newValue } };
        component.find('input').simulate('change', evt);

        expect(component.instance().handleUserNameChange).toBeCalledTimes(1);
        expect(component.instance().handleUserNameChange).toBeCalledWith( {"target": {"value": newValue }});
    });

    it('calls updateUserName on submit', () => {
        component.instance().updateUserName = jest.fn();
        component.instance().forceUpdate();

        component.find('form').simulate('submit', {});

        expect(component.instance().updateUserName).toBeCalledTimes(1);
        expect(component.instance().updateUserName).toBeCalledWith({});
    });
});
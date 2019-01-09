import React from 'react';
import { shallow } from 'enzyme'

import Messages from './Messages';

describe('Messages component with own message ', () => {
    const component = shallow(
        <Messages
            username="Thomas"
            messages={[{
                message: "test",
                username: "Thomas",
                uuid: "4beb9e28-76ff-4a1e-9242-2b6389550f6d",
            }]}/>
    );

    it('renders list', () => {
        expect(component.exists('ul')).toBe(true);
    });

    it("renders message on right side", () => {
        expect(component.exists('p.bg-primary.text-white.text-right.d-block.rounded.p-2.m-0')).toBe(true);
    });

    it("doesn't render username", () => {
        expect(component.exists('p.d-none')).toBe(true);
    });
});

describe('Messages component with another users message ', () => {
    const component = shallow(
        <Messages
            username="Thomas"
            messages={[{
                message: "test",
                username: "Jared",
                uuid: "4beb9e28-76ff-4a1e-9242-2b6389550f6d",
            }]}/>
    );

    it('renders list', () => {
        expect(component.exists('ul')).toBe(true);
    });

    it("renders message on left side", () => {
        expect(component.exists('p.bg-light.text-left.text-black.d-block.rounded.p-2.m-0')).toBe(true);
    });

    it("does render username", () => {
        expect(component.exists('p.text-black.text-left.m-0.p-0')).toBe(true);
    });
});

import React from 'react';
import {mount, ReactWrapper} from "enzyme";
import MemberUpdate from "./MemberUpdate";

describe('MemberList test', () => {
    let subject: ReactWrapper;

    let clickSpy: jest.Mock;

    beforeEach(() => {
        clickSpy = jest.fn();
        subject = mount(<MemberUpdate callBack={() => {}}/>)
    })

    test('should display an update button', () => {
        expect(subject.find('.updateBtn')).toBeTruthy();
    })

    test('should display a form to update a field of a member', () => {
        expect(subject.find('.updateForm')).toBeTruthy();
    })
})
import React from 'react';
import {mount, ReactWrapper} from "enzyme";
import MemberInput from "./MemberInput";

describe('MemberList test', () => {
    let subject: ReactWrapper;

    let clickSpy: jest.Mock;

    beforeEach(() => {
        clickSpy = jest.fn();
        subject = mount(<MemberInput callBack={() => {}}/>)
    })

    test("Renders", () => {
        expect(subject.exists()).toBeTruthy();
    })

    test('should display a form with member fields', () => {
        expect(subject.find('.addMemberForm')).toBeTruthy();
    })

    test('should display a button', () => {
        expect(subject.find('.addBtn')).toBeTruthy();
    })
})
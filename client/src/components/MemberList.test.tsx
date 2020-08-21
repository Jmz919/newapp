import React from 'react';
import {mount, ReactWrapper} from "enzyme";
import MemberList from "./MemberContainer";

describe('MemberList test', () => {
    let subject: ReactWrapper;

    let clickSpy: jest.Mock;

    beforeEach(() => {
        clickSpy = jest.fn();
        subject = mount(<MemberList />)
    })

    test("Renders", () => {
        expect(subject.exists()).toBeTruthy();
    })

    test("Should have a header", () => {
        expect(subject.find(".listHeader")).toBeTruthy();
    })

    test("Should have a button", () => {
        // subject.find('fetchBtn').simulate('click');
        expect(subject.find(".memberRow")).toBeTruthy();
    })
})
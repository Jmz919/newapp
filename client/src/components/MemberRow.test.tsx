import React from 'react';
import {mount, ReactWrapper} from "enzyme";
import MemberRow from "./MemberRow";

describe('MemberRow test', () => {
    let subject: ReactWrapper;

    beforeEach(() => {
        subject = mount(<MemberRow rowName={"ABRAMS, JOESPH L."} rowGrade={"CPT"}/>)
    })

    test("Renders", () => {
        expect(subject.exists()).toBeTruthy();
    })

    test("Renders a single row of data", () => {
        expect(subject.find(".memberRowData").text()).toBe("ABRAMS, JOESPH L.")
    })
})
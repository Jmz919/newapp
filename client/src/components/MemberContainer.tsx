import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../App.css';
import {Collapse, createStyles, Paper, Theme, Zoom} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ApplicationState} from "../store";
import {getMembers} from "../store/member/thunks";
import MemberList from "./MemberList";
import MemberInput from "./MemberInput";
import MemberDelete from "./MemberDelete";
import MemberUpdate from "./MemberUpdate";
import SearchMember from "./SearchMember";
import SearchMenu from "./SearchMenus";
import MemberListMenu, {MEMBER_MENU_LIST_ACTIONS} from "./menu/MemberListMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            background: '#00308F'
        },
        h1: {
            color: '#d2af39',
            textAlign: 'center',
            width: '100%',
        },
        memberListBackground: {
            width: 371,
        }

    }),
);

const MemberContainer: React.FC = () => {
    const [showMemberList, updateShowMemberList] = useState(false);
    const [addMember, updateAddMember] = useState(false);
    const [deleteMember, updateDeleteMember] = useState(false);
    const [updateMember, updateUpdateMember] = useState(false);

    const classes = useStyles();
    const members = useSelector(({member}: ApplicationState) => member.data);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMembers());
        return function cleanup() {
        }
    }, [dispatch])

    const childComponentCallBack = (type: string) => {
        switch (type) {
            case MEMBER_MENU_LIST_ACTIONS.SHOW_MEMBER_LIST:
                updateShowMemberList(prev => !prev);
                break;
            case MEMBER_MENU_LIST_ACTIONS.ADD_MEMBER:
                updateAddMember(prev => !prev);
                break;
            case MEMBER_MENU_LIST_ACTIONS.DELETE_MEMBER:
                updateDeleteMember(prev => !prev);
                break;
            case MEMBER_MENU_LIST_ACTIONS.UPDATE_MEMBER:
                updateUpdateMember(prev => !prev);
                break;
        }
    }

    const getGrades = () => {
        let grades: string[] = members.map((member) => member.grade);
        grades = Array.from(new Set(grades));
        return grades;
    }

    return (
        <div className={classes.root}>
            <SearchMember members={members}/>
            <SearchMenu grades={getGrades()}/>
            <h1 className={classes.h1}>Air Force Members</h1>
            <MemberListMenu handleMenuSelect={childComponentCallBack}/>
            {showMemberList ? <Zoom in={showMemberList}>
                <Paper className={classes.memberListBackground}>
                    <MemberList members={members} callBack={childComponentCallBack}/>
                </Paper>
            </Zoom> : null}
            {addMember ? <MemberInput callBack={childComponentCallBack}/> : null}
            {deleteMember ? <MemberDelete callBack={childComponentCallBack}/> : null}
            {updateMember ? <MemberUpdate callBack={childComponentCallBack}/> : null}
        </div>
    )
}

export default MemberContainer;
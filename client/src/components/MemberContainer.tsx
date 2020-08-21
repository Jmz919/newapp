import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../App.css';
import {Button, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ApplicationState} from "../store";
import {getMembers} from "../store/member/thunks";
import MemberList from "./MemberList";
import MemberInput from "./MemberInput";
import MemberDelete from "./MemberDelete";
import MemberUpdate from "./MemberUpdate";
import SearchMember from "./SearchMember";
import CustomizedMenus from "./SearchMenus";
import SearchMenu from "./SearchMenus";

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

    useEffect( () => {
        dispatch(getMembers());
    }, [dispatch])

    function handleClickShow() {
        updateShowMemberList(prev => !prev);
    }

    function handleClickAdd() {
        updateAddMember(prev => !prev);
    }

    function handleClickDelete() {
        updateDeleteMember(prev => !prev);
    }

    function handleClickUpdate() {
        updateUpdateMember(prev => !prev);
    }

    const getGrades = () => {
        let grades: string[] = members.map((member) => member.grade);
        grades = Array.from(new Set(grades));
        return grades;
    }

    return (
        <div className={classes.root}>
            <SearchMember members={members} />
            <SearchMenu grades={getGrades()}/>
            <h1 className={classes.h1}>Air Force Members</h1>
            {!showMemberList ? <Button onClick={handleClickShow}>Show Members</Button> : null}
            {showMemberList ? <MemberList members={members} callBack={handleClickShow}/> : null}
            {!addMember ? <Button onClick={handleClickAdd}>Add Members</Button> : null}
            {addMember ? <MemberInput callBack={handleClickAdd}/> : null}
            {!deleteMember ? <Button onClick={handleClickDelete}>Delete Members</Button> : null}
            {deleteMember ? <MemberDelete callBack={handleClickDelete}/> : null}
            {!updateMember ? <Button onClick={handleClickUpdate}>Update Members</Button> : null}
            {updateMember ? <MemberUpdate callBack={handleClickUpdate}/> : null}
        </div>
    )
}

export default MemberContainer;
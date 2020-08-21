import React from 'react';
import '../App.css';
import {Button, createStyles, Theme} from "@material-ui/core";
import MemberRow from "./MemberRow";
import {makeStyles} from "@material-ui/core/styles";
import MemberModel from "../store/member/model/MemberModel";
import CloseIcon from "@material-ui/icons/Close";
import {MEMBER_MENU_LIST_ACTIONS} from "./menu/MemberListMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        memberList: {
            color: '#d2af39'
        }
    }),
);


interface Props {
    members: MemberModel[],
    callBack: (type: string) => void;
}

const MemberList: React.FC<Props> = (props) => {
    const classes = useStyles();


    function handleClick() {
        props.callBack(MEMBER_MENU_LIST_ACTIONS.SHOW_MEMBER_LIST)
    }

    return (
        <div className={classes.memberList}>
            <Button onClick={handleClick}>
                <CloseIcon />
            </Button>

            {props.members ? props.members.map((m: any) =>
            <ul className={"memberRow"} key={m.id}>
                <MemberRow rowName={m.name} rowGrade={m.grade}/>
            </ul>) : ""}
        </div>
    )
}

export default MemberList;

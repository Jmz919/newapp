import React from 'react';
import '../App.css';
import {Button, createStyles, Theme} from "@material-ui/core";
import MemberRow from "./MemberRow";
import {makeStyles} from "@material-ui/core/styles";
import MemberModel from "../store/member/model/MemberModel";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        memberList: {
            color: '#d2af39'
        }
    }),
);


interface Props {
    members: MemberModel[],
    callBack: () => void;
}

const MemberList: React.FC<Props> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.memberList}>
            <Button onClick={props.callBack}>
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
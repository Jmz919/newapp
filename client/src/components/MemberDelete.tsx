import React from 'react';
import {useState} from 'react';
import '../App.css';
import {TextField, createStyles, Theme, Button} from "@material-ui/core";
import {callApi} from "../utils/api";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import SaveMemberModel from "../store/member/model/SaveMemberModel";
import CloseIcon from "@material-ui/icons/Close";
import {MEMBER_MENU_LIST_ACTIONS} from "./menu/MemberListMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dataInputField: {
            margin: 10,
            background: '#d2af39',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        dateField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
            margin: 10,
            background: '#d2af39',
        },
    }),
);

interface Props {
    callBack: (type: string) => void;
}

const MemberDelete: React.FC<Props> = (props) => {
    const [name, updateName] = useState()
    const [grade, updateGrade] = useState()

    const classes = useStyles();

    const handleChange = (e: any, field: string) => {
        e.persist();
        switch (field) {
            case 'name':
                updateName(e.target.value);
                break;
            case 'grade':
                updateGrade(e.target.value);
                break;
            default:
                break;
        }
    }

    const deleteClick = () => {
        let delMember: SaveMemberModel = new SaveMemberModel(name, grade, '', '', '', '',
            new Date(), '', '', new Date(), new Date, new Date(), new Date(), new Date());

        const res = callApi('POST', 'api/members/delete', delMember);
        console.log(res);
    }

    function handleClick() {
        props.callBack(MEMBER_MENU_LIST_ACTIONS.DELETE_MEMBER)
    }

    return (
        <div>
            <Button onClick={handleClick}>
                <CloseIcon />
            </Button>
            <form className={classNames('.deleteMemberForm', classes.container)} noValidate autoComplete="off">
                <button className={'deleteBtn'} onClick={deleteClick} name={"Submit"}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="Name" variant="outlined"
                           onChange={event => handleChange(event, 'name')}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="Grade" variant="outlined"
                           onChange={event => handleChange(event, 'grade')}/>
            </form>
        </div>
    )
}

export default MemberDelete;
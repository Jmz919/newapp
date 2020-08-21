import React from 'react';
import {useState} from 'react';
import '../App.css';
import {TextField, createStyles, Theme, Button} from "@material-ui/core";
import {callApi} from "../utils/api";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import SaveMemberModel from "../store/member/model/SaveMemberModel";
import CloseIcon from "@material-ui/icons/Close";

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
    callBack: () => void;
}

const MemberUpdate: React.FC<Props> = (props) => {
    const [name, updateName] = useState()
    const [grade, updateGrade] = useState()
    const [pas, updatePas] = useState()
    const [dafsc, updateDafsc] = useState()
    const [office, updateOffice] = useState()
    const [title, updateTitle] = useState()
    const [startDate, updateStartDate] = useState()
    const [phone, updatePhone] = useState()
    const [supervisor, updateSupervisor] = useState()
    const [supvBeginDate, updateSupvBeginDate] = useState()
    const [dateArrived, updateDateArrived] = useState()
    const [rnltd, updateRnltd] = useState()
    const [dor, updateDor] = useState()

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
            case 'pas':
                updatePas(e.target.value);
                break;
            case 'dafsc':
                updateDafsc(e.target.value);
                break;
            case 'office':
                updateOffice(e.target.value);
                break;
            case 'title':
                updateTitle(e.target.value);
                break;
            case 'startDate':
                updateStartDate(e.target.value);
                break;
            case 'phone':
                updatePhone(e.target.value);
                break;
            case 'supervisor':
                updateSupervisor(e.target.value);
                break;
            case 'supvBeginDate':
                updateSupvBeginDate(e.target.value);
                break;
            case 'dateArrived':
                updateDateArrived(e.target.value);
                break;
            case 'rnltd':
                updateRnltd(e.target.value);
                break;
            case'dor':
                updateDor(e.target.value);
                break;
            default:
                break;
        }
    }

    const updateClick = () => {
        let updatedMember: SaveMemberModel = new SaveMemberModel(name, grade, pas, dafsc, office, title,
            startDate, phone, supervisor, supvBeginDate, dateArrived, rnltd, dor, new Date());

        const res = callApi('POST', 'api/members/update', updatedMember);
        console.log(res);
    }

    return (
        <div>
            <Button onClick={props.callBack}>
                <CloseIcon />
            </Button>
            <form className={classNames('.updateMemberForm', classes.container)} noValidate autoComplete="off">
                <button className={'updateBtn'} onClick={updateClick}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="Name" variant="outlined"
                           onChange={event => handleChange(event, 'name')}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="Grade" variant="outlined"
                           onChange={event => handleChange(event, 'grade')}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="PAS" variant="outlined"
                           onChange={event => handleChange(event, 'pas')}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="DAFSC" variant="outlined"
                           onChange={event => handleChange(event, 'dafsc')}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="Office" variant="outlined"
                           onChange={event => handleChange(event, 'office')}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="Duty Title" variant="outlined"
                           onChange={event => handleChange(event, 'title')}/>
                <TextField className={classes.dateField} id="date" type={"date"} label="Duty Start Date" variant="outlined"
                           InputLabelProps={{shrink: true}} onChange={event => handleChange(event, 'startDate')}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="Duty Phone" variant="outlined"
                           onChange={event => handleChange(event, 'phone')}/>
                <TextField className={classes.dataInputField} id="outlined-basic" label="Supervisor" variant="outlined"
                           onChange={event => handleChange(event, 'supervisor')}/>
                <TextField className={classes.dateField} id="date" type={"date"} label="Supervisor Begin Date"
                           variant="outlined" InputLabelProps={{shrink: true}}
                           onChange={event => handleChange(event, 'supvBeginDate')}/>
                <TextField className={classes.dateField} id="date" type={"date"} label="Date Arrived at Station"
                           variant="outlined" InputLabelProps={{shrink: true}}
                           onChange={event => handleChange(event, 'dateArrived')}/>
                <TextField className={classes.dateField} id="date" type={"date"} label="Rnltd" variant="outlined"
                           InputLabelProps={{shrink: true}} onChange={event => handleChange(event, 'rnltd')}/>
                <TextField className={classes.dateField} id="date" type={"date"} label="Dor" variant="outlined"
                           InputLabelProps={{shrink: true}} onChange={event => handleChange(event, 'dor')}/>
            </form>
        </div>
    )
}

export default MemberUpdate;
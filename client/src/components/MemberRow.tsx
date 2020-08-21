import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rowData: {
            listStyleType: 'none',
            color: '#d2af39',
            width: '500px'
        }
    }),
);


interface Props {
    rowName: string;
    rowGrade: string;
}

const MemberRow: React.FC<Props> = props => {
    const classes = useStyles();

    return (
        <li className={classes.rowData}>
            {props.rowGrade} {props.rowName}
        </li>
    )
};


export default MemberRow;
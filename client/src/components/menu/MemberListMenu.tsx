import * as React from 'react';
import classNames from "classnames";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

interface Props {
    handleMenuSelect: (type: string) => void;
    className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        }
    }),
);

const MEMBER_MENU_LIST_ITEMS = {
    SHOW_MEMBER_LIST: 'MEMBER_LIST/SHOW_MEMBER_LIST',
    ADD_MEMBER: 'MEMBER_LIST/ADD_MEMBER',
    DELETE_MEMBER: 'MEMBER_LIST/DELETE_MEMBER',
    UPDATE_MEMBER: 'MEMBER_LIST/UPDATE_MEMBER'

}

const MemberListMenu: React.FC<Props> = props => {
    const classes = useStyles();

   function handleClickShow() {
       props.handleMenuSelect(MEMBER_MENU_LIST_ITEMS.SHOW_MEMBER_LIST)
   }

    function handleClickAdd() {
        props.handleMenuSelect(MEMBER_MENU_LIST_ITEMS.ADD_MEMBER);
    }

    function handleClickDelete() {
        props.handleMenuSelect(MEMBER_MENU_LIST_ITEMS.DELETE_MEMBER);
    }

    function handleClickUpdate() {
        props.handleMenuSelect(MEMBER_MENU_LIST_ITEMS.UPDATE_MEMBER);
    }

    return (
        <div className={classNames(props.className, classes.root)}>
            <Button onClick={handleClickShow}>Show Members</Button>
            <Button onClick={handleClickAdd}>Add Members</Button>
            <Button onClick={handleClickDelete}>Delete Members</Button>
            <Button onClick={handleClickUpdate}>Update Members</Button>
        </div>
    );
};

export default MemberListMenu;

export {
    MEMBER_MENU_LIST_ITEMS as MEMBER_MENU_LIST_ACTIONS
}
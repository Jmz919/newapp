import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MemberModel from "../store/member/model/MemberModel";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchRoot: {
            flexGrow: 1,
            color: '#d2af39'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        li: {
            listStyleType: 'none',
            color: '#d2af39',
            width: '1000px'
        }
    }),
);

interface Props {
    members: MemberModel[],
}

const SearchMember: React.FC<Props> = (props) => {
    const [search, updateSearch] = useState();
    const [selectedMembers, updateSelMemebers] = useState([]);
    const classes = useStyles();

    const handleChange = (e: any) => {
        updateSearch(e.target.value);
        console.log(search);
    }

    const keyPressed = (e: any) => {
        if (e.key === 'Enter') {
            updateSelMemebers(selectedMembers => []);

            for (let i = 0; i < props.members.length; i++) {
                if (props.members[i].name === search) {
                    const member: any = props.members[i];
                    updateSelMemebers(selectedMembers => selectedMembers.concat(member));
                }

                if (props.members[i].grade === search) {
                    const member: any = props.members[i];
                    updateSelMemebers(selectedMembers => selectedMembers.concat(member));
                }
            }
        }
    }

    return (
        <div className={classes.searchRoot}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleChange}
                            onKeyPress={keyPressed}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            {(selectedMembers.length > 0) ? selectedMembers.map((m: any) =>
                <ul key={m.id}>
                    <li className={classes.li}> {m.grade} {m.name} {m.officeSymbol} </li>
                </ul>) : ""}
        </div>
    )
}

export default SearchMember;
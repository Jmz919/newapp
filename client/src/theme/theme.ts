import crayonBox from "./crayonBox";
import createPalette from "@material-ui/core/styles/createPalette";
import {createMuiTheme} from "@material-ui/core";

const theme = {
    color: {
        text: crayonBox.white,
        background: crayonBox.black,
    }
};

export const muiPalette = createPalette({
    type: "dark",
    primary: {
        main: theme.color.text,
    },
});

export const muiTheme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                minWidth: 32
            }
        }
    },

    palette: muiPalette,
})

export default theme;
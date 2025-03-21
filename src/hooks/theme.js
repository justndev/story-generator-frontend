import {createTheme, alpha, getContrastRatio} from '@mui/material/styles';
import {deepOrange, deepPurple, purple} from "@mui/material/colors";

const violetBase = '#090a0a';
const violetMain = alpha(violetBase, 0.9);

const blueGreenBase = '#32edb5'
const blueGreenMain = alpha(blueGreenBase, 0.9);


// @ts-ignore
const theme = createTheme({
    palette: {
        primary: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.95),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
            secondary: purple,
        },
        greeny: {
            main: blueGreenMain,
            light: alpha(blueGreenBase, 0.5),
            dark: alpha(blueGreenBase, 0.95),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
            secondary: purple,
        }
    },
});


export default theme;

import {createMuiTheme} from '@material-ui/core/styles';

const hrblue = "#0090D9";
const musicred = "#FA2E45";

const theme = createMuiTheme({
    palette: {
        common: {
            hrblue: `${hrblue}`,
            musicred: `${musicred}`
        },
        primary: {
            main: `${hrblue}`
        },
        secondary: {
            main: `${musicred}`
        }
    },
})

export default theme;
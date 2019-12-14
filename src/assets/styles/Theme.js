import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary:{
      main: '#fafafa',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  containerButton: {
    margin: 10
  },
  submit: {
    margin: "10px",
    width: "150px",
    height: "50px"
  },
  buttonContainer: {
    flexDirection: "row"
  }
}));

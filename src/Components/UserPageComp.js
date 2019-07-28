import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import LinearListComp from './LinearList/LinearListComp'
import SquareGrid from './SquareGrid'
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:20,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
  account: {
    width:150,
    height:150,
  },
  info: {
    textAlign:"left",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function UserPageComp() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid 
          container 
          spacing={3}
          direction="row"
          justify="center"
          alignItems="flex-start" 
          className={classes.grid}>
          <Grid item xs={2}>
            <AccountCircle className={classes.account}/>
          </Grid>
          <Grid item xs={6}>
            <Grid 
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={3}
              className={classes.gridinfo}>
                <Grid item xs={12} className={classes.info}>
                  User
                </Grid>
                <Grid item xs={12} className={classes.info}>
                  Username <br />
                  Description HERE
                </Grid>
                <Grid item xs={12} className={classes.info}>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                  Setting
                </Button>
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={open}
                  onClose={handleClose}
                  >
                  <div style={modalStyle} className={classes.paper}>
                  <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    >
                      <Grid item xs={12}>
                        <Grid item xs={12}>   
                          <form noValidate autoComplete="off">
                            <Grid 
                                container
                                direction="column"
                                justify="center"
                                alignItems="stretch"
                            >
                                {/* Username */}
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Username"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                />   
                                {/* Bio */}
                                <TextField
                                  required
                                  id="outlined-required"
                                  label="Bio"
                                  className={classes.textField}
                                  margin="normal"
                                  variant="outlined"
                                />
                                <Grid item xs={12}>
                                  <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                  >          
                                    <Button variant="contained" color="primary" component={Link} to="/home">
                                      Change Password
                                    </Button>
                                  </Grid>
                                </Grid>
                                <Grid 
                                  container 
                                  spacing={1}
                                  direction="row"
                                  justify="flex-end"
                                  alignItems="flex-end"
                                  >
                                  <Grid item xs ={3}>
                                      <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
                                  </Grid>
                                  <Grid item xs ={3}>
                                      <Button variant="contained" color="primary">Save</Button>
                                  </Grid>
                                </Grid> 
                              </Grid>
                            </form>
                          </Grid> 
                        </Grid> 
                    </Grid>
                  </div>
              </Modal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              Be A Podcaster
            </Button>
          </Grid>
        </Grid>
        <LinearListComp type="LinearListUITypeReguler" title="Subscription" />
        <LinearListComp type="LinearListUITypeReguler" title="Recently Played" />
        <SquareGrid title="PlayList" length="2"/>
      </Container>
    </div>
  );
}

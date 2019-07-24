import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import { Link} from 'react-router-dom';
import logo from './podcast.jpg';

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow:1,
        marginBottom : theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    login:{
        margin: theme.spacing(2),
    },
    createAnAccount:{
        marginTop : theme.spacing(15),
    },
}));

export default function TextFields() {
  const classes = useStyles();

  return (
    <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        className={classes.root}
        >
        <Grid item xs={3}>
            <Container fixed height={800}>
                <Grid item xs={12} className={classes.container}>
                    <Grid items x={12}>
                        <img src={logo} height={150} width={150} alt="logo"/>
                    </Grid>
                    <Grid item xs={12}>
                        
                        <form className={classes.container} noValidate autoComplete="off">
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
                                {/* Password */}
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            {/* Forget Password */}
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="flex-end"
                                    alignItems="flex-end"
                                >           
                                    <Link
                                        component="button"
                                        variant="body2"
                                        >
                                        Forget Password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        
                    </Grid>
                    {/* Login */}
                    <Grid item xs={12} className={classes.login}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >          
                            <Button variant="contained" color="primary" component={Link} to="/home">
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Create An Account */}
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="column"
                        justify="flex-end"
                        alignItems="center"
                        className={classes.createAnAccount}
                    >          
                        <Link
                            component="button"
                            variant="body2"
                            to="/register"
                            >
                            Create An Account
                        </Link>
                    </Grid>
                </Grid> 
            </Container>  
        </Grid> 
    </Grid>
  );
}

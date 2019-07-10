import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    container: {
        flexGrow:1,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    login:{
        margin: theme.spacing(2),
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
            <Grid item xs={12} className={classes.container}>
                <Grid item xs={12}>
                    
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid 
                            container
                            direction="column"
                            justify="center"
                            alignItems="stretch"
                        >
                            <TextField
                                required
                                id="standard-required"
                                label="Username"
                                defaultValue="Username"
                                className={classes.textField}
                                margin="normal"
                            />   
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                                container
                                direction="column"
                                justify="flex-end"
                                alignItems="flex-end"
                            >           
                                Forget Password ?
                            </Grid>
                        </Grid>

                    </form>
                    
                </Grid>
                <Grid item xs={12} className={classes.login}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >          
                    <Button variant="contained" color="primary">
                        Log In
                    </Button>
                </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="center"
                >          
                    Create An Acount
                </Grid>
            </Grid>
        </Grid>   
    </Grid> 
  );
}

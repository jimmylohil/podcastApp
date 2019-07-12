import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button, Container, Link } from '@material-ui/core';
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
    register:{
        margin: theme.spacing(2),
    },
    login:{
        marginTop : theme.spacing(5),
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
                                {/* Email */}
                                <TextField
                                    required
                                    id="outlined-email-input"
                                    label="Email"
                                    className={classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
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
                                {/* Confirm Password */}
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Confirm Password"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                /> 
                            </Grid>
                        </form>
                        
                    </Grid>
                    {/* Register */}
                    <Grid item xs={12} className={classes.register}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >          
                            <Button variant="contained" color="primary">
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Login */}
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="column"
                        justify="flex-end"
                        alignItems="center"
                        className={classes.login}
                    >          
                        <Link
                            component="button"
                            variant="body2"
                            >
                            Already a Member? Login
                        </Link>
                    </Grid>
                </Grid> 
            </Container>  
        </Grid> 
    </Grid>
  );
}

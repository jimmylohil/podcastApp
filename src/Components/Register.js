import React from 'react';
import {Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import bgImg from '../images/bg.jpg';
import {Link as RouterLink, withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';





const useStyles = theme =>({
  '@global':{
    body : {
      
      background: 'linear-gradient(326deg, #050115 0%, #100a26 47%, #3c0b65 95%)',
      
    },
  },
  paper : {
    width :theme.spacing(45),
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor : theme.palette.common.white,
    padding : theme.spacing(5),
    
    
    
    // position : 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translateX(-50%) translateY(-50%)',
  
},
form : {
  width : '100%',
  marginTop : theme.spacing(1),
},


submit : {
  margin : theme.spacing(2,0,2),
  background: 'linear-gradient(326deg, #050115 0%, #100a26 47%, #3c0b65 95%)',

},

// textfield : {
//   color : theme.palette.common.white,

//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'grey',
//     },
//     '&:hover fieldset': {
//       borderColor: 'black',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'purple',
//     },
//   },
// }
link : {
  textDecoration : 'none',
},

});


class Register extends Component{
  

  render(){
    
    const {classes} = this.props;
        return (
          <Grid container component="main" maxWidth="lg" spacing={0} direction="row"
          alignItems="center" justify="center" style={{minHeight: '100vh'}}>
            

            <div className={classes.paper}>
              <Typography component="h1" variant="h5">Register</Typography>

              <form className={classes.form} noValidate 
              onSubmit={this.onSubmit}>
                <TextField 
                  variant="outlined"
                  type="text"
                  label="Username"
                  id="username"
                  margin="normal"
                  required
                  fullWidth 
                  />

                <TextField 
                  variant="outlined"
                  type="email"
                  label="Email"
                  id="email"
                  margin="normal"
                  required
                  fullWidth 
                  
                  />
                 

                <TextField 
                  variant="outlined"
                  type="password"
                  label="Password"
                  id="password"
                  margin="normal"
                  required
                  fullWidth 
                  
                  />
                  

                {/* <TextField 
                  variant="outlined"
                  type="password"
                  label="Confirm Password"
                  id="confirmPassword"
                  margin="normal"
                  required
                  fullWidth 
                  className={classnames("", {
                    invalid:errors.confirmPassword
                  })}
                  onChange = {this.onChange}
                  value = {this.state.confirmPassword}
                  error = {errors.confirmPassword}/>
                  <span className="red-text">{errors.confirmPassword}</span> */}

                  <Button className={classes.submit}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth>Register</Button>
              </form>
              
              <RouterLink to ="/login" className={classes.link}>
                <Link variant="body2" >
                  Already have an account? Login
                </Link>
              </RouterLink>
                  
            </div>

          </Grid>
        );
  }
      
}

Register.propTypes = {
  classes : PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Register);
import React from 'react';
import {Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import { isTSEnumMember } from '@babel/types';

import {Link } from 'react-router-dom';

import auth from './auth';




const useStyles = theme =>({
'@global':{
    body : {
        background : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
},
root :{
    backgroundColor : theme.palette.common.white,
    padding : theme.spacing(5),
    textAlign : 'center',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
},

searchbox: {
    marginTop : theme.spacing(3),
    backgroundColor : '#764ba2',
    width : '100%',
    
},
input : {
    width : '90%',
    marginLeft : theme.spacing(2),
    color :'white',
},

iconButton : {
    color : 'white',
    
},

card : {
    margin : theme.spacing(3),
    background : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color : 'white',
    width : '28%'
},

submit : {
    width : '50%',
},
media : {
    height : '100px',
},

chiplist : {
    marginTop : '20px',
    paddingTop : '10px',
    paddingBottom : '10px',
    paddingLeft : '5px',
    paddingRight : '5px',
    textAlign : 'left',
},

});



class CategoryWelcomePage extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
             category: []
        }
    }
    

    componentDidMount(){
        
        axios.get("http://localhost:8000/api/category/list?token=".concat(sessionStorage.getItem("JWT")))
        .then(
        (response) => {
                console.log("Get Category successful")
                console.log(response)
                this.setState (
                    {category:response.data.categories}
                )
                console.log (auth.isLogin());
                console.log("category : "+ this.state.category)

        }
        )
        .catch(function(error)
        {
        console.log(error);
        });
        
    }


    render(){
        const {classes} = this.props;
        const {category} = this.state;
            return (
                <Container component="main" spacing={0} justify="center" style={{minHeight: '100vh', width : '80%'}}> 
            
                    <div className={classes.root}>
                        <Typography component="h1" variant="h2">
                            What are you interested in ? 
                        </Typography>
                        <Typography component="h2" variant="h3">
                            

                            Haiii ! {this.props.location.state.username}
                            
                        </Typography>
        
                        <Paper className={classes.searchbox}>
                            <InputBase
                            className={classes.input}
                            placeholder="Search Categories"
                            />
                            <IconButton className={classes.iconButton} aria-label="Search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
        
                        <Chip
                        label="Deletable Chip"
                        onDelete="{handleDelete}"
                        className={classes.chiplist}
                        />
                        {
                            category.map (item =>
                            <h1>{item}</h1>
                            )
                            
                        }

                        <Link to="/home">
                        <Button className={classes.submit}
                          type="submit"
                          variant="contained"
                          color="primary">Continue</Button>
                        </Link>

                        <Button className={classes.submit}
                          onClick={this.onLogoutClick}
                          variant="contained"
                          color="primary">Logout</Button>
                    </div>
    
                  </Container>
                    
            )
    }         
    
}

CategoryWelcomePage.propTypes = {
    classes : PropTypes.object.isRequired,
    
}



export default withStyles(useStyles)(CategoryWelcomePage);
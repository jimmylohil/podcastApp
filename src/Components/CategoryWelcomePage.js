import React from 'react';
import {Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import img from '../images/bg.jpg';
import education from '../images/education.jpg';
import music from '../images/music.jpg';
import PropTypes from 'prop-types';
import Login from './LoginComp';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


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
    width : '80%',
    
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

paperlist : {
    marginTop : '20px',
    width : '93%',
    paddingTop : '10px',
    paddingBottom : '10px',
    paddingLeft : '5px',
    paddingRight : '5px',
    textAlign : 'left',
},
chip : {
    margin : 5,
}
});


class CategoryWelcomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            category : [],
            preferred : []
        };
        this.onChange = this.onChange.bind(this);
    };

    onChange = e =>{
        const preferred = this.state.preferred
        let index
  
        //check if the check box is checked or unchecked
        if(e.target.checked){

            preferred.push(e.target.value)
        }
        else{
            index = preferred.indexOf(e.target.value)
            preferred.splice(index,1)
        }

        this.setState({preferred: preferred})
        
        console.log (this.state.preferred);
    };

    componentDidMount(){
        axios.get('http://localhost:8000/api/category/list?token='.concat(sessionStorage.getItem("JWT")))
        .then(
            (response) => {
                console.log("Get category successful")
                console.log(response)
                this.setState(
                    {category:response.data.categories}
                )

            }
        )

        .catch(function(error){
            console.log(error);
        })
        
    };

    render(){
        const {category} = this.state;
        const {classes} = this.props;
        const {preferred} = this.state;
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
                        <div className={classes.paperlist}>
    
                            {preferred.map(item =>{
                                return(
                                    <Chip
                                        label={item}
                                        className={classes.chip}
                                        />
                                    
                                )
                            })}

                        </div>   
                        <Grid container maxWidth="lg"> 

                            {
                                category.map((item, i) =>
                                    {   
                                        //console.log(item)
                                        return(
                                            <Card className={classes.card}>
                                                <CardMedia
                                                className={classes.media}
                                                image={education}
                                                title={item}
                                                key={i}
                                                />

                                                <CardContent className={classes.content}>
                                                    <Typography component="h2" variant="h5">{item}
                                                        <Checkbox
                                                        key={i}
                                                        name={item}
                                                        value={item}
                                                        label={item}
                                                        onClick={this.onChange} />
                                                    </Typography>
                                                </CardContent>
                                                
                                            </Card>
                                            
                                        );
                                        
                                    })
                            }
                        
                            {/* <Card className={classes.card}>
                                <CardMedia
                                className={classes.media}
                                image={education}
                                title="Education"/>

                                <CardContent className={classes.content}>
                                    <Typography component="h2" variant="h5">Education
                                        <Checkbox 
                                        value="checked" />
                                    </Typography>
                                </CardContent>
                            </Card>
        
        
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.media}
                                image={music}
                                title="Music"
                                />

                                <CardContent>
                                    <Typography component="h2" variant="h5">Music
                                        <Checkbox 
                                        value="checked" />
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.media}
                                image={music}
                                title="Music"
                                />

                                <CardContent>
                                    <Typography component="h2" variant="h5">Music
                                        <Checkbox 
                                        value="checked" />
                                    </Typography>
                                </CardContent>
                            </Card>
                            
                
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.media}
                                image={music}
                                title="Music"
                                />

                                <CardContent>
                                    <Typography component="h2" variant="h5">Technology
                                        <Checkbox 
                                        value="checked" />
                                    </Typography>
                                </CardContent>
                            </Card>
                            
        
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.media}
                                image={music}
                                title="Music"
                                />

                                <CardContent>
                                    <Typography component="h2" variant="h5">Humour
                                        <Checkbox 
                                        value="checked" />
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.media}
                                image={music}
                                title="Music"
                                />

                                <CardContent>
                                    <Typography component="h2" variant="h5">Business
                                        <Checkbox 
                                        value="checked" />
                                    </Typography>
                                </CardContent>
                            </Card> */}
                          
                        </Grid>
        
                        <Button className={classes.submit}
                          type="submit"
                          variant="contained"
                          color="primary">Continue</Button>

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



export default withRouter(withStyles(useStyles)(CategoryWelcomePage));
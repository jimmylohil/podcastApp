import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Button, Container, Grid } from '@material-ui/core';
import ToolTip from '@material-ui/core/ToolTip';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItemText from '@material-ui/core/ListItemText';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StarIcon from '@material-ui/icons/Star';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from 'react-router-dom';
import logo from './podlogo.png';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginTop:12,
    height:70,
    width:250,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const [data,setData] = React.useState(props.data);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorCategoryEl, setAnchorCategoryEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClickCategory(event) {
    setAnchorCategoryEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleCloseCategory() {
    setAnchorCategoryEl(null);
  }

  function tester(){
    setData({ 
      logo : require( "../images/podlogo_text_dark.png" )

    })
  }
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Container fixed> 
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}>
              <Grid item xs={3}>
                <Grid 
                  container
                  direction="row"
                  justify="left"
                  alignItems="center"
                  >
                  
                  <Link to ="/home">
                    <img alt="logo" src={data.logo}className={classes.logo}/>
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid item xs={12}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon/>
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'Search' }}
                    />
                  </div>
                </Grid>
                <Grid 
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}>
                    <Grid item xs={4}>
                    <Button
                        aria-controls="customized-category"
                        aria-haspopup="true"
                        variant="text"
                        color="inherit"
                        onClick={handleClickCategory}
                      >
                        Category
                        <ArrowDropDownIcon />
                      </Button>
                        <StyledMenu
                        id="customized-category"
                        anchorEl={anchorCategoryEl}
                        keepMounted
                        open={Boolean(anchorCategoryEl)}
                        onClose={handleCloseCategory}
                      >
                        <Box width={200}>
                          <StyledMenuItem>
                            <ListItemText primary="Category A" />
                          </StyledMenuItem>
                          <StyledMenuItem>
                            <ListItemText primary="Category B" />
                          </StyledMenuItem>
                          <StyledMenuItem>
                            <ListItemText primary="Category C" />
                          </StyledMenuItem>
                        </Box>
                      </StyledMenu>
                    </Grid>
                    <Grid item xs={4}>
                    <Button
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="text"
                        color="inherit"
                        onClick={tester}
                      >
                        <SubscriptionsIcon />
                        Subscription
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                          aria-controls="customized-menu"
                          aria-haspopup="true"
                          variant="text"
                          color="inherit"
                        >
                        <StarIcon />
                        Trending
                      </Button>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid 
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    >
                  <div className={classes.sectionDesktop}>
                  <ToolTip title="Notification">
                    <IconButton aria-label="Show 17 new notifications" color="inherit">
                      <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                  </ToolTip>
                  <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="text"
                    color="inherit"
                    onClick={handleClick}
                  >
                  <AccountCircle />
                    Username
                  <ArrowDropDownIcon />
                  </Button>
                    <StyledMenu
                      id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <Box width={200}>
                        <StyledMenuItem>
                          <ListItemText primary="Profile" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                          <ListItemText primary="Setting" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                          <ListItemText primary="Log Out" />
                        </StyledMenuItem>
                      </Box>
                    </StyledMenu>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
  </div>
  );
}

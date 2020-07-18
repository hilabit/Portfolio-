
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';


import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import avatar from "../avatar.png"

const useStyles = makeStyles(theme=> ({
    menuSliderContainer: {
        width:250,
        background:"#012523",
        height:"100%"
    },
    avatar: {
        display:"block",
        margin:"0rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13),
        border: "5px solid #cca4fd",

    },
    listItem: {
        color:"#018c77",

    }
}));

const menuItems = [
    {
        listIcon:<Home/>,
        listText:"Home",
        listPath:"/"
    },
    {
        listIcon:<AssignmentInd/>,
        listText:"Resumé",
        listPath:"/resume"
    },
    {
        listIcon:<Apps/>,
        listText:"Portfolio",
        listPath:"/portfolio"
    },
    {
        listIcon:<ContactMail/>,
        listText:"Contact",
        listPath:"/contact"
    }


]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]:open });
    };


    const classes = useStyles()

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div"
            onClick={toggleSlider(slider, false)}

        >
            <Avatar className={classes.avatar} src={avatar} alt="Profile pic" />
            <Divider/>
            <List>
            {menuItems.map((lsItem, key)=> (


                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
))}
            </List>
        </Box>
    )
    return (
        <>

        <Box component="nav">
            <AppBar position = "static" style ={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <MenuIcon style ={{color: "#02eef4"}} />
                    </IconButton>
                    <Typography variant="h5" style={{color:"#00d98a"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider
                    anchor="right"
                    open={state.right}
                    onClose={toggleSlider("right",false)}

                    >
                        {sideList("right")}
                        <Footer />
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar;



// questions:
// 1. What does onClose do? Why does it close the modal even outside of what I defined as the onClick that opens it?
// 2. How do I make the icon on the tab bar, my icon and not react's?
//3. In Header.js he adds the Avatar component in a Grid component. Where is this "Grid" coming from?
// Isn't this a css attribute? Did it come from import {makeStyles} from '@material-ui/core/styles';?

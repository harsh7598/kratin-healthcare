import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  menuLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialMediaLink: {
    marginRight: theme.spacing(2),
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  const goToHome = () => {
    window.location.href = "http://localhost:3000";
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logo} onClick={goToHome}>
            <Typography variant="h6" className={classes.title}>
              <span>K</span>ratin
              <span>W</span>ell
              <span>N</span>exus
            </Typography>
          </div>
          <div className={classes.menuLink}>
            <Button color="inherit" startIcon={<HomeIcon />} onClick={goToHome}>
              Home
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
          </div>
          <div className={classes.socialMedia}>
            <IconButton
              className={classes.socialMediaLink}
              color="inherit"
              href="https://www.linkedin.com/in/harsh-tiwari-4859771ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </IconButton>
            <IconButton
              className={classes.socialMediaLink}
              color="inherit"
              href="https://github.com/harsh7598"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </IconButton>
            <IconButton
              className={classes.socialMediaLink}
              color="inherit"
              href="https://www.instagram.com/heyitsharsh___/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
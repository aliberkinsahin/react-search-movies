import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import useStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ScrollTop from "./ScrollTop/ScrollTop"
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "./SwipeableDrawer/SwipeableDrawer";
import { Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


function Appbar(props) {
  const classes = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = (status) => {
    setDrawerIsOpen(status);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar id="back-to-top-anchor">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Search Movies Project
          </Typography>
          {/* <Tooltip title="Coming Soon">
            <Button color="inherit" >
              Login
            </Button>
          </Tooltip> */}
        </Toolbar>
        <Drawer
          drawerIsOpen={drawerIsOpen}
          onClose={() => toggleDrawer(false)}
        />
        <ScrollTop {...props}>
          <Fab color="secondary" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </AppBar>
    </div>
  );
}

export default withRouter(Appbar);

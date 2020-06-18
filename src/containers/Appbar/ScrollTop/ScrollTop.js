import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import useStyles from "./styles";
import { useScrollTrigger, Zoom } from "@material-ui/core";

export default function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });
  const scrollTriggerExternal = useSelector((state) => {
    return state.categories.scrollToTop;
  });

  const dispatch = useDispatch();
  const resetScrollTrigger = useCallback(
    () => dispatch(actions.resetScrollToTop()),
    [dispatch]
  );

  const handleScroll = () => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  if (scrollTriggerExternal) {
    handleScroll();
    resetScrollTrigger()
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleScroll} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

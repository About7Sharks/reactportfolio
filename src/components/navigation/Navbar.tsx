import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { motion, useAnimation, useViewportScroll } from "framer-motion";

interface Props { }

const useStyles = makeStyles({
  navbar: {
    zIndex: 100,
    listStyle: "none",
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    right: "0px",
    top: "0px",
    width: "100vw",
    position: "fixed",
  },
  navItem: {
    margin: "25px",
    transition: ".3s",
    color: "white",
    "&:hover": {
      color: "#eef46e",
      // background: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      transition: ".3s",
    },
  },
});

export const Navbar = (props: Props) => {
  const classes = useStyles();
  const controls = useAnimation();
  let [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useViewportScroll();

  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        setScrollY(latest);
      }),
    [scrollYProgress]
  );

  controls.start({
    opacity: 1,
    scale: 1,
  });
  const navItems = ["Home", "Journal", "Projects", "About", "Contact"].map(
    (item) => {
      if (item === "Contact") {
        return (
          <Link
            to="#"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
            className={classes.navItem}
          >
            <span> {item}</span>
          </Link>
        );
      }
      return (
        <Link to={"/" + item} className={classes.navItem}>
          <span> {item}</span>
        </Link>
      );
    }
  );
  return (
    <motion.nav
      initial={{
        scale: 0,
        opacity: 0,
      }}
      style={{ backgroundColor: `rgba(0,0,0,${scrollY * 10})` }}
      transition={{ duration: 1, delay: 2 }}
      animate={controls}
      className={classes.navbar}
    >
      {navItems}
    </motion.nav>
  );
};

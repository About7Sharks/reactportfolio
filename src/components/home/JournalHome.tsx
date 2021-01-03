import React, { useRef, useEffect } from "react";
import { useOnScreen } from "../util/useOnScreen";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useHistory } from "react-router-dom";

export const JournalHome = () => {
  const controls = useAnimation();
  const journalRef = useRef(null);
  const onScreen = useOnScreen(journalRef, "-100px");
  const history = useHistory();

  useEffect(() => {
    if (onScreen) {
      controls.start({
        opacity: 1,
        scale: 1,
      });
    }
  }, [onScreen]);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 1 }}
      animate={controls}
      ref={journalRef}
      className="homePosts"
    >
      <h1>
        Journal Posts
        {/* {onScreen ? "dafdfadf" : "zzzzzzzzzzz"} */}
      </h1>
      <div
        onClick={() => {
          //   history.push("/journal/" + site.title.replace(/ /g, ""), site);
        }}
        className="div2"
      >
        <img src={"/assets/situp.png"}></img>
        <p></p>
        <Link to={"fda"}>Read &#8594;</Link>
      </div>
      <div className="div3">
        <img src={"/assets/situp.png"}></img>
        <Link to={"fad"}>Read &#8594;</Link>
      </div>
    </motion.div>
  );
};
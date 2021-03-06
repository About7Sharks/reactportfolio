import React, { useEffect, useRef } from "react";
import { useOnScreen } from "../util/useOnScreen";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Cards } from "../util/Cards";
import { spinAnimationV2 } from "../util/SpinAnimation";
import Button from "@material-ui/core/Button";
let curatedArticles = [
  {
    title: "Ethereum Name Service",
    url: "local",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbitexpert.io%2Fwp-content%2Fuploads%2F2019%2F10%2F1Ethereum-Name-Service.jpg",
    text:
      "Making Ethereum easier to use is the main key for mass adoption of cryptocurrencies and blockchain technology.",
    tags: ["Blockchain"],
  },
  {
    title: "AR Business Card",
    url: "local",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.s-nbcnews.com%2Fj%2Fnewscms%2F2017_37%2F2152646%2F170912-augmented-reality-mn-1555_ef744fbb489d79f4a3668d5b7560dd5b.fit-760w.jpg&f=1&nofb=1",
    text: "Viro Augmented reality business card",
    tags: ["AR", "Javascript"],
  },
  {
    title: "Blockstack Platform",
    url: "local",
    img:
      "https://blog.blockstack.org/wp-content/uploads/2018/11/blockstack_og-86ab19adbc455cc17a097b505e20f44c-1600.png",
    text:
      "Blockstack makes it easy for people to access and utilize the powerful privacy that blockchain technology has to offer utilizing a (PoX) system backed by Bitcoin.",
    tags: ["Blockchain"],
  },
  {
    title: "Tech Uses",
    url: "local",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Retrocomputer_02.jpg",
    text:
      "As a Software Engineer i'm constantly tweaking and playing around with the technologies I use. Here's the current things I use almost daily 😘",
    tags: ["Tech", "Personal"],
  },
  {
    title: "Improving Personal Security",
    url: "local",
    img:
      "https://cdn.pixabay.com/photo/2019/03/03/14/38/hacker-4031973_960_720.jpg",
    text:
      'So I was lying in bed browsing Instagram when my girlfriend snapchats me. "Funny" I thought, since she was passed out next to me',
    tags: ["Security"],
  },
  {
    title: "Why Use Crypto",
    url: "local",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.manhattandigest.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbitcoin-perfecthue.jpg&f=1&nofb=1",
    text:
      "You've probably heard of bitcoin and cryptocurrencies by now. You may still be asking yourself why care?",
    tags: ["Bitcoin", "Crypto", "Tech", "Featured"],
  },
];

export const JournalHome = () => {
  const controls = useAnimation();
  const journalRef = useRef(null);
  const onScreen = useOnScreen(journalRef, "0px");

  useEffect(() => {
    if (onScreen) {
      controls.start({
        opacity: 1,
        scale: 1,
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 1 }}
      animate={controls}
      ref={journalRef}
      className="homePosts"
      id="journalHome"
    >
      <Cards
        routeExternal={false}
        data={curatedArticles}
        gridLayout="twoBytwo"
      />
      <h1>{spinAnimationV2("Journal Posts")}</h1>

      <div className="linkButton">
        <Button component={Link} to="/Journal">
          View All
        </Button>
      </div>
    </motion.div>
  );
};

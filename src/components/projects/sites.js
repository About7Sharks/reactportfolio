let sites = [
  {
    url: `https://accubrew.io`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5edd8a5f4d7c220008625fff/screenshot.png`,
    title: `Accubrew`,
    text: `Real time precision beer monitoring system`,
    tags: [`IOT`, `Vue`, `Javascript`],
  },
  {
    url: `https://reactterminal.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e3f676d077be200092f56b4/screenshot.png`,
    title: `React Terminal`,
    text: `Site which emulates a terminal within a web browser using React.js`,
    tags: [`React`, `Javascript`],
  },
  {
    url: `https://zacsdapp.netlify.com`,
    img:
      `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*N4Xyvmrm-6uMzJcKkU7BMw.png&f=1&nofb=1`,
    title: `Ethereum ERC20 Wallet`,
    text:
      `A decentralized application for reading erc20 tokens on the ethereum blockchain.`,
    tags: [`React`, `Eth`, "Web3"],
  },
  {
    url: `https://about7sharks.com`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5eec3db2df8ac17028aa9991/screenshot.png`,
    title: `Personal Site`,
    text: `This was one of the first personal sites I made for myself.`,
    tags: [`Nuxt`, `Vue`],
  },
  {
    url: `https://meerkatapp.netlify.app`,
    img:
      `https://d33wubrfki0l68.cloudfront.net/5fc12498f63c2e06d99e61f8/screenshot.png`,
    title: `Meerkat`,
    text: `A network sniffer and analyser written in react and electron`,
    tags: [`Electron`, `React`, "Node"],
  },
  {
    url: `https://metadatascrub.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5eea3a9c53d17023b94b6d6d/screenshot.png`,
    title: `Metadata scrubber`,
    text:
      `This project was inspired after seeing a BLM post that showed a siri shortcut for removing picture data. Although siri is cool, anyone without an iphone is unable to use it.`,
    tags: [`Vue`],
  },
  {
    url: `https://rokuremote.netlify.app/#/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d34ac7f21e18700072880ff/screenshot.png`,
    title: `Roku TV Remote`,
    text:
      `Web Based Roku Remote I made after my remote died and I didn't have any batteries at home.`,
    tags: [`Vue`, `IOT`],
  },
  {
    url: `https://situpcoach.netlify.app/`,
    img: `/assets/situp.png`,
    title: `Sit Up Coach`,
    text:
      `AI Trained to count sit ups for you. Made during quarantine, when I was doing a lot of home workouts.`,
    tags: [`AI`, `Vue`, `Fitness`],
  },
  {
    url: `https://pushupcoach.netlify.app/`,
    img: `/assets/pushup.png`,
    title: `Push Up Coach`,
    text:
      `AI Trained to count push ups for you. Made during quarantine, when I was doing a lot of home workouts.`,
    tags: [`AI`, `Vue`, `Fitness`],
  },
  {
    url: `https://vuedragnotes.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d87de4bae78590008456919/screenshot.png`,
    title: `Note App`,
    text: `Simple note taking app with drag and drop notes`,
    tags: [`Vue`],
  },
  {
    url: "https://tors.netlify.app/",
    img:
      "https://d33wubrfki0l68.cloudfront.net/5f6b9b6a71789e0007e6318f/screenshot.png",
    title: "Torus Shape",
    text:
      "A dynamic torus to help you understand the propeties of this awesome shape.",
    tags: ["p5"],
  },
  {
    url: `https://todovue.netlify.app/#/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5bf822bdec8a895626261bf8/screenshot.png`,
    title: `Note App`,
    text: `Simple note taking app`,
    tags: [`Vue`],
  },
  {
    url: `https://pixt.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d7ea099a55e08000a56f4ee/screenshot.png`,
    title: `Pic to Text`,
    text:
      `Analyze text from pictures with your browser made with Vue.js and Tesseract.js (A pure Javascript port of the popular Tesseract OCR engine).`,
    tags: [`Vue`, `AI`],
  },
  {
    url: `https://weliveinasim.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e0a51668d0c8a374c71465a/screenshot.png`,
    title: `Conways Game of Life using WebAssembly and Javascript`,
    text:
      `Based on some basic rules to create living and intricate systems, that mimic life. This project utilizes WASM a portable binary-code format for executable programs, which gives C like performance in the browser.`,
    tags: [`Rust`, `WASM`, `WebAssembly`],
  },
  {
    url: `https://carlinfitness.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d27966251f7040008b66bba/screenshot.png`,
    title: `Carlin Fitness`,
    text: `Suite of Fitness calculators, and Guides`,
    tags: [`Vue`, `Fitness`],
  },
  {
    url: `https://gitfolio.netlify.app/`,
    img: `/assets/gitfolio.png`,
    title: `Gitfolio`,
    text:
      `Site showing of repositories for projects, self generating on each rebuild.`,
    tags: [`React`],
  },
  {
    url: `https://tensorposebot.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d863c1312febf000832790d/screenshot.png`,
    title: `Pose Bot`,
    text:
      `Pose bot built with tensorflow.js to identify body symmetry while posing.`,
    tags: [`Vue`, `AI`],
  },
  {
    url: `https://facialai.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d3f13f6c57b7c9f194a8de8/screenshot.png`,
    title: `Face Recognizer`,
    text: `Simple Facial recognition build in the browser`,
    tags: [`AI`, `HTML`, `Javascript`],
  },
  {
    url: `https://ticzactoe.netlify.app/`,
    img: `/assets/tictactoe.png`,
    title: `Tic-tac-toe`,
    text: `Tic-tac-toe built in the browser with an AI opponent`,
    tags: [`AI`, `HTML`, `Javascript`, `Game`],
  },
  {
    url: `https://phasergame.netlify.app`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5b5fe428b3127453bd4ffbaa/screenshot.png`,
    title: `Flappy Box`,
    text: `Flappy Bird build with Phaser a javascript game engine`,
    tags: [`HTML`, `Javascript`, `Game`],
  },
  {
    url: `https://vuecalculator.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5b6319d2792f8950d1d93e65/screenshot.png`,
    title: `Calculator`,
    text: `Calculator made with Vue`,
    tags: [`Vue`],
  },
  {
    url: `https://tensorflowjsvue.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5bf881c1e39e7c1ebc6b9676/screenshot.png`,
    title: `Linear Regression Model`,
    text:
      `This project takes some x and y pairs and based of a linear regression model predicts a y value based off an x input`,
    tags: [`Vue`, `Nuxt`, "AI"],
  },
  {
    url: "https://stocism.netlify.app",
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5c074e66dd28ef0e15d75956/screenshot.png`,
    title: `Stoicism Quotes`,
    text: `Database of stoicism quotes`,
    tags: [`Vue`],
  },
  {
    url: "https://breakoutjs.netlify.app",
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5c2ea1dae4fe6f00081833a0/screenshot.png`,
    title: `Breakout Game`,
    text: `simple breakout game made with javascript`,
    tags: [`HTML`, `Game`, `Javascript`],
  },
  {
    url: "https://zaframe.netlify.app/",
    img: `/assets/zaframe.png`,
    title: `Zaframe`,
    text: `Virtual Reality site in the browser`,
    tags: [`VR`],
  },
  {
    url: "https://www.zacarlin.com/#/",
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5c5f96bda306c00008028590/screenshot.png`,
    title: `Zacarlin`,
    text: `Bought the Domain a while back and figured I should put it to use.`,
    tags: [`Vue`],
  },
];

export default sites;

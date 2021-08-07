import React, { useEffect } from "react";

import grapesjs from "grapesjs";

import gjsPresetWebpage from "grapesjs-preset-webpage";

import "grapesjs/dist/css/grapes.min.css";

import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";

import "./App.css";

function App() {
  useEffect(() => {
    grapesjs.init({
      container: "#editor",
      width: "auto",
      plugins: [gjsPresetWebpage],
      pluginsOpts: { gjsPresetWebpage: {} },
    });
  }, []);

  return <div id="editor" style={{ height: 0, overflow: "hidden" }} />;
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import JcarloMetaImg from "./assets/jcarlo-meta-img.png";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <meta property="og:image" itemProp="image" content={JcarloMetaImg} />
    <App />
  </React.StrictMode>
);

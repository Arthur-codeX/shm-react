import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ArrayData from "./DisplayData/ArrayData";

import PrimitiveData from "./Props/PrimitiveData";

import MiniProject from "./MiniProject";

import "./css.css";
<<<<<<< HEAD
// import ".mycss/main.css";
import Buttons from "./Events/Btns"
import MyForm from "./Events/Form";
import SimpleState from "./Hooks/State/SimpleState";  
=======

import "./mycss/main.css";

>>>>>>> 300c44529055f712cfa40ece2af3127c8ac614c7
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MiniProject />
    <Buttons />
    <MyForm />
    <SimpleState />
  </StrictMode>
);

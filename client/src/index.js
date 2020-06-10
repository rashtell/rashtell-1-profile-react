import React from "react";
import { render } from "react-dom";
import { Body } from "./components/Body";

require("dotenv").config();

render(<Body />, document.getElementById("root"));

import _ from "lodash";

import { helloWebpack } from "./hello-webpack";

import "./style/main.css";
import "./style/title.scss";

helloWebpack(_.upperFirst("hello world"));

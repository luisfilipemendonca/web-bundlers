import _ from "lodash";

import { addImage } from "./components/add-image/add-image";
import { helloWebpack } from "./hello-webpack";

helloWebpack(_.upperFirst("add image"));
addImage();

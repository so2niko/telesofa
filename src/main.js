import { ControllerAuthorization } from "./authorization/ControllerAuthorization.js";
import { Publisher } from "./share/Publisher.js";
import { ControllerMenu } from "./menu/ControllerMenu.js";
import { ControllerMessages } from "./messages/ControllerMessages.js";
import { ControllerSpamer } from "./spamer/ControllerSpamer.js";

const publisher = new Publisher();
const methods = publisher.getMethods();
const auth = new ControllerAuthorization(methods);
const menu = new ControllerMenu(methods);
const messages = new ControllerMessages(methods);
const spamer = new ControllerSpamer(methods);
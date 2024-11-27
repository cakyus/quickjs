
import { fetch } from "./fetch.js";

const response = await fetch("https://developer.mozilla.org/");
const text = await response.text();
console.log(text);


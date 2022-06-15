// Import and Require
  // Code from other files

import { capitaliseString } from "./string_function";
const cap = capitaliseString("hello");
console.log(cap);

// Export
  // Can export and reuse functions/variabls from other files

/* Syntax
export { function };
export variable = x; */

// You can import all things from a file using *
import * as object from "filename";

// Export default
export default function subtract(x,y) {return x - y;}

// Import a default export
  // no curly brackets on default imports
import subtract from "filename"; 
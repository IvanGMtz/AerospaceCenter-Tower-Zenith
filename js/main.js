
import * as M1 from "./MetodoGET.js";
import * as M2 from "./metodoPostPut.js";
import * as M3 from "./MetodoDelete.js";

document.addEventListener("DOMContentLoaded", M1.getAll);

document.addEventListener("submit", M2.PostPut);

document.addEventListener("click", M3.Delete);
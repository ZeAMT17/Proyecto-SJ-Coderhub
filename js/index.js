console.log("AQUI")
import hamburgerMenu from "./telon.js";
import setupScrollHandler from "./arrowUp.js";
import { mostrarPokemon } from "./main.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e)=> {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
 
});
setupScrollHandler();
mostrarPokemon();


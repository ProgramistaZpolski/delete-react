"use strict";
let h = document.createElement("script");
h.textContent = `if (window.React || window.ReactDOM || document.querySelector('[data-reactroot], [data-reactid], #___gatsby, #__next')) {
	document.body.innerHTML = \`<h1>This website was made with react, so it was deleted.</h1>\`;
};`;
document.body.appendChild(h);

if(document.readyState === "complete") {
  hljs.inithighlightingonload();
}
else {
  document.addEventListener("DOMContentLoaded", function(event) {
    hljs.inithighlightingonload();
  });
}


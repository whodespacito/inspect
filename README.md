# inspect
get an element details without opening inspect element <br>

bookmark url: <br>
<strong>
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/whodespacito/inspect/main/script.js'); req.onload = function() { eval(req.responseText + "; main()"); }; req.send();
</strong>
<br> <br>
broken alternative (if the website broke alert() or something (hello blooket)): <br>
<strong>
javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/whodespacito/inspect/main/script.js'); req.onload = function() { eval(req.responseText = "; alt()"); }; req.send();
</strong>
<br><br>
activate with alt and \

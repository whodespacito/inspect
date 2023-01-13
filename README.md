# inspect
get an element details without opening inspect element  
activate with alt and \

***

bookmark url:  
`javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/whodespacito/inspect/main/script.js'); req.onload = function() { eval(req.responseText + "; main()"); }; req.send();`  

***

alternative (if the website broke alert() or something (hello blooket)):  
`javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/whodespacito/inspect/main/script.js'); req.onload = function() { eval(req.responseText + "; alt()"); }; req.send();`

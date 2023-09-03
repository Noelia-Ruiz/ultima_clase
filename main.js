let actor = '{"nombre":"Brad Pitt","cantidadDePeliculas": 54}';

//console.log(JSON.stringify(actor));
//console.log(JSON.parse(actor));

fetch('http://127.0.0.1:5500/ventas.json').then((response)=> response.json()).then
((data)=> console.log(data));
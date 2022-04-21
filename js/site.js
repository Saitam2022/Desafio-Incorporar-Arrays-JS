"use strict";

/* Se muestra un mensaje de bienvenida */

function saludar() {
    console.log("Sean Bienvenidos a nuestra Web!");
}
saludar();

/* Se usa una función con la propiedad lenght para recorrer los números del 1 al 10 iterando el array */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function recorrerArray(array) {
    let largoArray = array.length;
    for (let i = 0; i < largoArray; i++) {
        console.log(numeros[i]);
    }
}
recorrerArray(numeros);

/* Se usa una función con la propiedad lenght para recorrer los instrumentos musicales de una casa de venta de instrumentos iterando el array */

const instrumentos = ["Guitarra", "Bajo", "Batería", "Piano", "Saxo", "Trompeta", "Acordeón", "Violín", "Ukelele", "Congas", "Bandoneón"];
function recorrerArray(array) {
    let largoArray = array.length;
    for (let i = 0; i < largoArray; i++) {
        console.log(array[i]);
    }
}
recorrerArray(instrumentos);

/* Con el mismo ejemplo de arriba se usa una función con la propiedad unshift para agregar un instrumento musical (Armónica) al comienzo de la lista iterando el array */

instrumentos.unshift("Armónica");
console.log(instrumentos);

/* Con el mismo ejemplo se usa una función con la propiedad push para agregar un instrumento musical (Clarinete) al final de la lista iterando el array */

instrumentos.push("Clarinete");
console.log(instrumentos);

/* Con una lista de compras del supermercado usando el método join para armar una lista de compras, creando una variable y también llamando directo al console.log */

const listaSupermercado = ["Aceite", "Leche", "Fideos", "Vino", "Gaseosa", "Yerba", "Café", "Manzana", "Banana", "Tomate", "Lechuga"];
let a = listaSupermercado.join(" - ");
console.log(a);
console.log(listaSupermercado);

/* Con esta misma lista de compras del supermercado usando el método includes, pregunto: la lista incluye comprar Café? */

console.log("Café? " + listaSupermercado.includes("Café"));

/* Con esta misma lista de compras del supermercado usando el método includes, pregunto: la lista incluye comprar Queso? */

console.log("Queso? " + listaSupermercado.includes("Queso"));

/* Con una lista de herramientas de obra, combino un array con objetos usando for...of (con id) */

const herramientas = [
    { id: 1, nombre: "Martillo" },
    { id: 2, nombre: "Masa" },
    { id: 3, nombre: "Pala" },
    { id: 4, nombre: "Pico" }
];
for (const item of herramientas) {
    console.log(item.id);
    console.log(item.nombre);
}

/* Con una lista de artículos de librería, combino un array con objetos y producto usando un booleano, también utilizando for...of y sumando el IVA al precio del artículo*/

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("Lapicera", "120"));
productos.push(new Producto("Lápiz", "100"));
productos.push(new Producto("Goma", "70"));
productos.push(new Producto("Hojas", "500"));
for (const producto of productos)
    producto.sumarIva();
console.log(productos);




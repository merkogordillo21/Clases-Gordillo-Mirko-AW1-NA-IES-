
console.log(" 1a ");
const numeros = []; 
for (let i = 0; i < 5; i++) {
  const numero = Number(prompt("Ingrese un número (" + (i + 1) + " de 5):"));
  numeros.push(numero);
}

console.log(numeros);

console.log("1b");
const impares = [];

for (let i = 0; i < 5; i++) {
  const numero = Number(prompt("Ingrese un número (" + (i + 1) + " de 5):"));
  if (numero % 2 !== 0) {
    impares.push(numero);
  }
}

console.log(impares);

console.log(" 1c");
const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice) => {
  frutas[indice] = fruta.toUpperCase();
});

console.log(frutas);

console.log("1d ");
const frutas2 = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutas2.map((fruta) => {
  return fruta.toUpperCase();
});

console.log(frutasMayusculas);

console.log(" 1e");
const frutas3 = ["pera", "manzana", "banana", "durazno"];

const frutasConNa = frutas3.filter((fruta) => {
  if (fruta.includes("na")) {
    return true;
  }
  return false;
});

console.log(frutasConNa);


console.log("2a");
const producto = {
  nombre: "Remera",
  precio: 5000,
  stock: 10,
  talles: ["S", "M", "L"],
};

console.log(producto);

console.log("2b");
const productos = [
  { nombre: "Remera", precio: 5000, stock: 3, talles: ["S", "M", "L"] },
  { nombre: "Pantalón", precio: 12000, stock: 12, talles: ["S", "M", "L"] },
  { nombre: "Campera", precio: 25000, stock: 8, talles: ["S", "M", "L"] },
  { nombre: "Gorra", precio: 3000, stock: 20, talles: ["S", "M", "L"] },
];

productos.forEach((p) => {
  if (p.stock < 5) {
    console.log(p);
  }
});

console.log(" 2c ");
const productosConDescuento = productos.map((p) => {
  return {
    nombre: p.nombre,
    precio: p.precio * 0.9,
    stock: p.stock,
    talles: p.talles,
  };
});

console.log(productosConDescuento);

console.log("2d");
const productosConMuchoStock = productos.filter((p) => {
  return p.stock > 10;
});

console.log(productosConMuchoStock);

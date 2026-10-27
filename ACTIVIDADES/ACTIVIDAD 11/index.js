function saludar() {
  console.log("Hola, bienvenido");
}
saludar();

function saludarPersona(nombre) {
  console.log(`Hola ${nombre}, bienvenido`);
}
saludarPersona("mirko");

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
let resultado = esMayorDeEdad(20);
console.log(resultado);



const esMayorDeEdadFlecha = (edad) => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
};
let resultado2 = esMayorDeEdadFlecha(15);
console.log(resultado2);

const comparar = (parametro1, parametro2) => {
  if (parametro1 < parametro2) {
    console.log(`El número ${parametro1} es menor que ${parametro2}`);
  } else if (parametro1 === parametro2) {
    console.log(`El número ${parametro1} es igual que ${parametro2}`);
  } else {
    console.log(`El número ${parametro1} es mayor que ${parametro2}`);
  }
};

for (let i = 1; i <= 5; i++) {
  comparar(i, 3);
}



const operacion = (num1, num2, callback) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Debe ingresar solo números.");
  } else {
    callback(num1, num2);
  }
};

function suma(a, b) {
  console.log(` la suma es ${a + b}`);
}

function resta(a, b) {
  console.log(` la resta es ${a - b}`);
}

operacion(10, 5, suma);
operacion(10, 5, resta);
operacion("hola", 5, suma);
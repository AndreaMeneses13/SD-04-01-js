const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Escribe tu codigo por debajo de esta linea

arr.splice(7, 0, 8);
// splice(7, 0, 8) significa:
// 7 → posición donde insertar (entre el 7 y el 9)
// 0 → no eliminar ningún elemento, solo insertar
// 8 → el número que falta en la secuencia
// Escribe tu codigo por encima de esta línea

// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}

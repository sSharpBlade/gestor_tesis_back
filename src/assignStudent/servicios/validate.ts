export function validateDni(cedula: string): boolean {

    if (cedula.length !== 10) {
      return false;
    }
  
    if (!/^\d+$/.test(cedula)) {
      return false;
    }
  
    const digitos = cedula.split('').map(Number);
  
    const provincia = parseInt(cedula.substring(0, 2));
    if (provincia < 1 || provincia > 24) {
      return false;
    }
  
    let suma = 0;
    for (let i = 0; i < 9; i++) {
      let valor = digitos[i];
      if (i % 2 === 0) {
        valor = valor * 2;
        if (valor > 9) {
          valor -= 9;
        }
      }
      suma += valor;
    }
  
    const digitoVerificador = (10 - (suma % 10)) % 10;
    return digitoVerificador === digitos[9];
  }

class ArrayFechas {
  constructor() {
    // Array con fechas anteriores y posteriores al día presente
    this.fechas = [];
    const hoy = new Date(); // Fecha actual

    for (let i = -5; i <= 4; i++) {
      const fecha = new Date();
      fecha.setDate(hoy.getDate() + i);
      this.fechas.push(fecha);
    }
  }

  filtroFechas() {
    const hoy = new Date();
    const fechasAnteriores = this.fechas.filter((fecha) => fecha < hoy).length;
    const fechasPosteriores = this.fechas.filter((fecha) => fecha > hoy).length;

    console.log(`Fechas anteriores a hoy: ${fechasAnteriores}`);
    console.log(`Fechas posteriores a hoy: ${fechasPosteriores}`);
  }
}

export default ArrayFechas;

export interface ItemConId {
  item: number,
  texto: string
}
export class Clase {
  constructor(
    public id: string,
    public icono: string,
    public nombre: string,
    public breveDescripcion: string,
    public duracion: string,
    public horarios: ItemConId[],
    public beneficios: ItemConId[],
    public ubicacion: string,
    public descripcion: string
  ){}
}
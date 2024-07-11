import { Local } from './local';
import { Propietario } from './propietario';

export class Novedad {
  _id!: string;
  fechaCreacion: Date | string;
  fechaFinalizacion: Date | string;
  descripcion: string;
  estado: boolean;
  local: Local | string;
  propietario: Propietario | string;

  constructor(
    _id: string = '',
    fechaCreacion: Date | string = new Date(),
    fechaFinalizacion: Date | string = '',
    descripcion: string = '',
    estado: boolean = false,
    local: Local | string = '',
    propietario: Propietario | string = ''
  ) {
    this._id = _id;
    this.fechaCreacion = fechaCreacion;
    this.fechaFinalizacion = fechaFinalizacion;
    this.descripcion = descripcion;
    this.estado = estado;
    this.local = local;
    this.propietario = propietario;
  }
}

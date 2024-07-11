import { Local } from './local';
import { Propietario } from './propietario';

export class Novedad {
  _id!: string;
  fechaCreacion: Date | string;
  fechaFinalizacion: Date | string;
  descripcion: string;
  estado: boolean;
  local: Local;
  propietario: Propietario;

  constructor(
    _id: string = '',
    fechaCreacion: Date | string = new Date(),
    fechaFinalizacion: Date | string = new Date(),
    descripcion: string = '',
    estado: boolean = false,
    local: Local = new Local(),
    propietario: Propietario = new Propietario()
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

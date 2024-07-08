import { Alquiler } from "./alquiler";
import { Pago } from "./pago";

export class Cuota {
    _id!: string;
    alquiler!:Alquiler;
    mes!:number;
    monto!:number;
    nroCuota!:number;
    adelantos!:Array<Pago>;
    estado!:boolean;
}

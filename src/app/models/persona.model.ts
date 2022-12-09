import { Generico } from './generico.model';
export interface Persona{
    primer_nombre?: string;
    segundo_nombre?: string;
    primer_apellido?: string;
    segundo_apellido?: string;
    fecha_nacimiento?: Date;
    estudios?: string;
    sexo?: string;
}
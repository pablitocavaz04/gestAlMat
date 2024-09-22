/* ******************************************************************************* */
/*   File:alumnos.ts                                                         */
/*                                                    ::::::::::       :;     ;:   */
/*                                                   |;                :;    ;:    */
/*                                                  |;                 :;   ;:     */
/*   By: Pablo Camino Vázquez                      |;                  :;  ;:      */
/*                                                |;                   :; ;:       */
/*   Created: 2024/09/20 13:03                   |::::::::::::   :+:   ;;;         */
/*   Updated: 2024/09/20 14:34											       */
/*                                                                                 */
/* ******************************************************************************* */
import { Materia } from './materias';

export class Alumno {
    id: number;
    nombre: string;
    apellidos: string;
    edad: number;
    materias: Materia[];

    constructor(id: number, nombre: string, apellidos: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materias = [];
    }

    mostrarInfo(): string {
        const materiasNombres = this.materias.map(m => m.nombre).join(', ');
        return `ID: ${this.id}, Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, Edad: ${this.edad}, Materias: ${materiasNombres}`;
    }

    agregarMateria(materia: Materia) {
        this.materias.push(materia);
    }
}

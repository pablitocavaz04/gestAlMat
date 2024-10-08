/* ******************************************************************************* */
/*   File:materias.ts                                                         */
/*                                                    ::::::::::       :;     ;:   */
/*                                                   |;                :;    ;:    */
/*                                                  |;                 :;   ;:     */
/*   By: Pablo Camino Vázquez                      |;                  :;  ;:      */
/*                                                |;                   :; ;:       */
/*   Created: 2024/09/20 13:03                   |::::::::::::   :+:   ;;;         */
/*   Updated: 2024/09/20 14:34											       */
/*                                                                                 */
/* ******************************************************************************* */
export class Materia {
    id: number;
    nombre: string;
    nota?: number;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }
}

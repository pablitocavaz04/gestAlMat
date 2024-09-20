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
    constructor(
        public id: number,
        public nombre: string
    ) {}
}

export class GestionMaterias {
    private materias: Materia[] = [];

    crearMateria(id: number, nombre: string): void {
        const materia = new Materia(id, nombre);
        this.materias.push(materia);
    }

    listarMaterias(): void {
        this.materias.forEach(materia => {
            console.log(`ID: ${materia.id}, Nombre: ${materia.nombre}`);
        });
    }
}

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
export class Alumno {
    constructor(
        public id: number,
        public nombre: string,
        public materias: Map<number, number> // idMateria -> nota
    ) {}
}

export class GestionAlumnos {
    private alumnos: Alumno[] = [];

    crearAlumno(id: number, nombre: string): void {
        const alumno = new Alumno(id, nombre, new Map());
        this.alumnos.push(alumno);
    }

    asignarMateria(idAlumno: number, idMateria: number): void {
        const alumno = this.alumnos.find(a => a.id === idAlumno);
        if (alumno) {
            alumno.materias.set(idMateria, 0); // Asigna materia con nota 0
        } else {
            console.log(`Alumno con ID ${idAlumno} no encontrado.`);
        }
    }

    listarMaterias(idAlumno: number): void {
        const alumno = this.alumnos.find(a => a.id === idAlumno);
        if (alumno) {
            alumno.materias.forEach((nota, idMateria) => {
                console.log(`Materia ID: ${idMateria}, Nota: ${nota}`);
            });
        } else {
            console.log(`Alumno con ID ${idAlumno} no encontrado.`);
        }
    }

    asignarNota(idAlumno: number, idMateria: number, nota: number): void {
        const alumno = this.alumnos.find(a => a.id === idAlumno);
        if (alumno) {
            if (alumno.materias.has(idMateria)) {
                alumno.materias.set(idMateria, nota);
            } else {
                console.log(`Materia con ID ${idMateria} no encontrada en el alumno.`);
            }
        } else {
            console.log(`Alumno con ID ${idAlumno} no encontrado.`);
        }
    }

    listarAlumnosConNota(): void {
        this.alumnos.forEach(alumno => {
            console.log(`Alumno: ${alumno.nombre}`);
            alumno.materias.forEach((nota, idMateria) => {
                console.log(`  Materia ID: ${idMateria}, Nota: ${nota}`);
            });
        });
    }
}

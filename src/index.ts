/* ******************************************************************************* */
/*   File:index.ts                                                         */
/*                                                    ::::::::::       :;     ;:   */
/*                                                   |;                :;    ;:    */
/*                                                  |;                 :;   ;:     */
/*   By: Pablo Camino Vázquez                      |;                  :;  ;:      */
/*                                                |;                   :; ;:       */
/*   Created: 2024/09/20 13:03                   |::::::::::::   :+:   ;;;         */
/*   Updated: 2024/09/20 14:34											       */
/*                                                                                 */
/* ******************************************************************************* */
import { GestionAlumnos } from './alumnos';
import { GestionMaterias } from './materias';

const gestionAlumnos = new GestionAlumnos();
const gestionMaterias = new GestionMaterias();

// Crear algunas materias
gestionMaterias.crearMateria(1, 'Matemáticas');
gestionMaterias.crearMateria(2, 'Historia');

// Listar las materias creadas
gestionMaterias.listarMaterias();

// Crear un alumno
gestionAlumnos.crearAlumno(1, 'Juan Pérez');

// Asignar materias al alumno
gestionAlumnos.asignarMateria(1, 1); // Matemáticas
gestionAlumnos.asignarMateria(1, 2); // Historia

// Listar materias del alumno
gestionAlumnos.listarMaterias(1);

// Asignar una nota a una materia del alumno
gestionAlumnos.asignarNota(1, 1, 85); // Nota 85 en Matemáticas

// Listar todos los alumnos con sus notas
gestionAlumnos.listarAlumnosConNota();

/* ******************************************************************************* */
/*   File: index.ts                                                         */
/*                                                    ::::::::::       :;     ;:   */
/*                                                   |;                :;    ;:    */
/*                                                  |;                 :;   ;:     */
/*   By: Pablo Camino Vázquez                      |;                  :;  ;:      */
/*                                                |;                   :; ;:       */
/*   Created: 2024/09/22 17:05                   |::::::::::::   :+:   ;;;         */
/*   Updated: 2024/09/22 17:05                                              */
/*                                                                                 */
/* ******************************************************************************* */
import * as readline from 'readline';
import { Alumno } from './alumno';
import { Materia } from './materias';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const alumnos: Alumno[] = [];
const materias: Materia[] = [];

function mostrarAlumnos() {
    if (alumnos.length === 0) {
        console.log("No hay alumnos registrados.");
    } else {
        alumnos.forEach(alumno => {
            console.log(alumno.mostrarInfo());
        });
    }
}

function agregarAlumno() {
    rl.question('Ingrese ID: ', (idInput) => {
        const id = parseInt(idInput);
        rl.question('Ingrese nombre: ', (nombre) => {
            rl.question('Ingrese apellidos: ', (apellidos) => {
                rl.question('Ingrese edad: ', (edadInput) => {
                    const edad = parseInt(edadInput);
                    const nuevoAlumno = new Alumno(id, nombre, apellidos, edad);
                    alumnos.push(nuevoAlumno);
                    console.log("Alumno agregado exitosamente.");
                    mostrarMenu();
                });
            });
        });
    });
}

function agregarMateria() {
    rl.question('Ingrese ID de la materia: ', (idInput) => {
        const id = parseInt(idInput);
        rl.question('Ingrese nombre de la materia: ', (nombre) => {
            const nuevaMateria = new Materia(id, nombre);
            materias.push(nuevaMateria);
            console.log("Materia agregada exitosamente.");
            mostrarMenu();
        });
    });
}

function asignarMateria() {
    rl.question('Ingrese ID del alumno: ', (idInput) => {
        const id = parseInt(idInput);
        const alumno = alumnos.find(a => a.id === id);
        if (alumno) {
            rl.question('Ingrese ID de la materia a asignar: ', (materiaIdInput) => {
                const materiaId = parseInt(materiaIdInput);
                const materia = materias.find(m => m.id === materiaId);
                if (materia) {
                    alumno.agregarMateria(materia);
                    console.log("Materia asignada exitosamente.");
                } else {
                    console.log("Materia no encontrada.");
                }
                mostrarMenu();
            });
        } else {
            console.log("Alumno no encontrado.");
            mostrarMenu();
        }
    });
}

function listarMateriasDeAlumno() {
    rl.question('Ingrese ID del alumno: ', (idInput) => {
        const id = parseInt(idInput);
        const alumno = alumnos.find(a => a.id === id);
        if (alumno) {
            if (alumno.materias.length === 0) {
                console.log("Este alumno no tiene materias asignadas.");
            } else {
                console.log(`Materias de ${alumno.nombre}:`);
                alumno.materias.forEach(materia => {
                    console.log(`- ${materia.nombre}`);
                });
            }
        } else {
            console.log("Alumno no encontrado.");
        }
        mostrarMenu();
    });
}

function listarMateriasDisponibles() {
    if (materias.length === 0) {
        console.log("No hay materias disponibles.");
    } else {
        console.log("Materias disponibles:");
        materias.forEach(materia => {
            console.log(`- ID: ${materia.id}, Nombre: ${materia.nombre}`);
        });
    }
}

function asignarNota() {
    rl.question('Ingrese ID del alumno: ', (idInput) => {
        const id = parseInt(idInput);
        const alumno = alumnos.find(a => a.id === id);
        if (alumno) {
            rl.question('Ingrese ID de la materia: ', (materiaIdInput) => {
                const materiaId = parseInt(materiaIdInput);
                const materia = alumno.materias.find(m => m.id === materiaId);
                if (materia) {
                    rl.question('Ingrese la nota: ', (notaInput) => {
                        const nota = parseFloat(notaInput);
                        materia.nota = nota; // Asignar la nota a la materia
                        console.log("Nota asignada exitosamente.");
                        mostrarMenu();
                    });
                } else {
                    console.log("Materia no encontrada en este alumno.");
                    mostrarMenu();
                }
            });
        } else {
            console.log("Alumno no encontrado.");
            mostrarMenu();
        }
    });
}

function listarAlumnosConNotas() {
    if (alumnos.length === 0) {
        console.log("No hay alumnos registrados.");
    } else {
        alumnos.forEach(alumno => {
            console.log(`\n${alumno.nombre} ${alumno.apellidos}:`);
            if (alumno.materias.length === 0) {
                console.log("  Sin materias asignadas.");
            } else {
                alumno.materias.forEach(materia => {
                    const nota = materia.nota !== undefined ? materia.nota : 'Sin nota';
                    console.log(`  - ${materia.nombre}: ${nota}`);
                });
            }
        });
    }
}

function mostrarMenu() {
    console.log("\nSeleccione una opción:");
    console.log("1. Agregar alumno");
    console.log("2. Listar alumnos");
    console.log("3. Agregar materia");
    console.log("4. Asignar materia a alumno");
    console.log("5. Listar materias de un alumno");
    console.log("6. Listar materias disponibles");
    console.log("7. Asignar nota a materia");
    console.log("8. Listar alumnos con notas");
    console.log("9. Salir");

    rl.question('Opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                agregarAlumno();
                break;
            case '2':
                mostrarAlumnos();
                mostrarMenu();
                break;
            case '3':
                agregarMateria();
                break;
            case '4':
                asignarMateria();
                break;
            case '5':
                listarMateriasDeAlumno();
                break;
            case '6':
                listarMateriasDisponibles();
                mostrarMenu();
                break;
            case '7':
                asignarNota();
                break;
            case '8':
                listarAlumnosConNotas();
                mostrarMenu();
                break;
            case '9':
                console.log("Saliendo...");
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                mostrarMenu();
        }
    });
}

// Iniciar el programa
mostrarMenu();

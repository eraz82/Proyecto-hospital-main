const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const fecha = document.getElementById("fecha")
const especialidad = document.getElementById("especialidad")
const formularioregistro = document.getElementById("formulario-paciente")

formularioregistro.addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente ={
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        fecha: fecha.value,
        especialidad: especialidad.value,
    }
    let pacientes = []
    let localpacientes = localStorage.getItem("pacientes")
    if (localpacientes) {
        pacientes = JSON.parse(localpacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formularioregistro.reset()
    alert("paciente registrado con exito")
})
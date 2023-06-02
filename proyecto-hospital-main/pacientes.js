function mostrarpacientes() {
    let pacientes = []
    let localpacientes = localStorage.getItem("pacientes")
    if (localpacientes) {
        pacientes = JSON.parse(localpacientes)
    }
    const tablapacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablapacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombre = fila.insertCell()
        const celdaApellido = fila.insertCell()
        const celdaCedula = fila.insertCell();
        const celdaEspecialidad = fila.insertCell();
        const celdaEdad = fila.insertCell()
        const celdaTelefono = fila.insertCell();
        
        celdaNombre.textContent = paciente.nombre 
        celdaApellido.textContent = paciente.apellido 
        celdaCedula.textContent = paciente.cedula 
        celdaEdad.textContent = paciente.edad 
        celdaTelefono.textContent = paciente.telefono 
        celdaEspecialidad.textContent = paciente.especialidad 
        //celdaFecha.textContent = paciente.fecha 
    });
}

mostrarpacientes()
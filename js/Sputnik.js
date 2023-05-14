function contruirTabla(recluta) {
    recluta.forEach(e => {
        document.getElementById("tabla").innerHTML+=`
        <tr>
        <td class="id">${e.id}</td>
        <td class="nombre">${e.nombre}</td>
        <td class="edad">${e.edad}</td>
        <td class="telefono">${e.telefono}</td>
        <td class="mail">${e.mail}</td>
        <td class="direccion">${e.direccion}</td>
        <td class="fechaNacimiento">${e.fechaNacimiento}</td>
        <td class="numeroId">${e.numeroId}</td>
        <td class="fechaIngreso">${e.fechaIngreso}</td>
        <td class="TeamId">${e.TeamId}</td>
        </tr>`
    });
}

function obtenerDatos() {
    fetch(`http://localhost:3000/Team/1/Reclutas`)
        .then(res => res.json())
        .then(datos => {
            contruirTabla(datos)
            console.log(datos)
        })
        .catch((err)=>{
            console.log("Error al consumir la API\n", err.message);
        })
        .finally(()=>{
            console.log("Se ha consumido el API");
        })
}

obtenerDatos();
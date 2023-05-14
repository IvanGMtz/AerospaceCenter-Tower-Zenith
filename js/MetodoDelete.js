const d= document,
            $form = d.querySelector(".crud-form"),
            $title = d.querySelector(".crud-title")


export async function Delete(e){
    if(e.target.matches(".edit")){
        // alert("Presionaste el boton Editar");
         $title.textContent="Editar Recluta";
         $form.id.value=e.target.dataset.id;
         $form.nombre.value=e.target.dataset.nombre;
         $form.edad.value=e.target.dataset.edad;
         $form.telefono.value=e.target.dataset.telefono;
         $form.mail.value=e.target.dataset.mail;
         $form.direccion.value=e.target.dataset.direccion;
         $form.fechaNacimiento.value=e.target.dataset.fechaNacimiento;
         $form.numeroId.value=e.target.dataset.numeroId;
         $form.fechaIngreso.value=e.target.dataset.fechaIngreso;
         $form.TeamId.value=e.target.dataset.TeamId;
         $form.SkillId.value=e.target.dataset.SkillId;

     }

     if(e.target.matches(".delete")){
        // alert("Presionaste el boton Eliminar");
        let isDelete=confirm(`¿Estás seguro de elminar el id ${e.target.dataset.id}?`);

        if(isDelete){
            //Borrar - DELETE
            try{
                let options={
                    method:"DELETE",
                    headers:{
                        "Content-type": "application/json;charset=utf-8"
                    }
                },
                res = await fetch (`http://localhost:3000/Reclutas/${e.target.dataset.id}`, options),
                json =await res.json();

                if(!res.ok) throw{status: res.status, statusText:res.statusText};

                location.reload();
            }catch(error){
                let message = error.statusText || "Ocurrió un error";
                alert(`Error ${error.status}:${message}`)
            }
        }
    }
}
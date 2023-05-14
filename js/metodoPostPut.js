const d= document,
            $form = d.querySelector(".crud-form")

export async function PostPut(e){
    if(e.target===$form){
        e.preventDefault();

        if(!e.target.id.value){
            //CREAR - POST
            try{
                let options={
                    method:"POST",
                    headers:{
                        "Content-type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify({
                      nombre: e.target.nombre.value,
                      edad: Number(e.target.edad.value),
                      telefono: e.target.telefono.value,
                      mail: e.target.mail.value,
                      direccion: e.target.direccion.value,
                      fechaNacimiento:e.target.fechaNacimiento.value,
                      numeroId: e.target.numeroId.value,
                      fechaIngreso: e.target.fechaIngreso.value,
                      TeamId: e.target.TeamId.value,
                      SkillId: e.target.SkillId.value
                    })
                },
                res = await fetch ("http://localhost:3000/Reclutas", options),
                json =await res.json();

                if(!res.ok) throw{status: res.status, statusText:res.statusText};

                location.reload();

            }catch(error){
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}:${message}</b></p>`)
            }
        }else{
            //Editar - PUT
            try{
                let options={
                    method:"PUT",
                    headers:{
                        "Content-type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        edad: Number(e.target.edad.value),
                        telefono: e.target.telefono.value,
                        mail: e.target.mail.value,
                        direccion: e.target.direccion.value,
                        fechaNacimiento: e.target.fechaNacimiento.value,
                        numeroId: e.target.numeroId.value,
                        fechaIngreso: e.target.fechaIngreso.value,
                        TeamId: e.target.TeamId.value,
                        SkillId: e.target.SkillId.value
                    })
                },
                res = await fetch (`http://localhost:3000/Reclutas/${e.target.id.value}`, options),
                json =await res.json();

                if(!res.ok) throw{status: res.status, statusText:res.statusText};

                location.reload();
            }catch(error){
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}:${message}</b></p>`)
            }
        }
    }
}
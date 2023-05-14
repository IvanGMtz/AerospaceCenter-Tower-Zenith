const d= document,
            $table = d.querySelector(".crud-table"),
            $template=d.getElementById("crud-template").content,
            $fragment=d.createDocumentFragment();

export const getAll = async ()=>{

    try{
        let res = await fetch ("http://localhost:3000/Reclutas"),
        json =await res.json();
        
        if(!res.ok) throw{status: res.status, statusText:res.statusText};

        console.log(json);
        json.forEach(el=>{
            $template.querySelector(".id").textContent=el.id;
            $template.querySelector(".nombre").textContent=el.nombre;
            $template.querySelector(".edad").textContent=el.edad;
            $template.querySelector(".telefono").textContent=el.telefono;
            $template.querySelector(".mail").textContent=el.mail;
            $template.querySelector(".direccion").textContent=el.direccion;
            $template.querySelector(".fechaNacimiento").textContent=el.fechaNacimiento;
            $template.querySelector(".numeroId").textContent=el.numeroId;
            $template.querySelector(".fechaIngreso").textContent=el.fechaIngreso;
            $template.querySelector(".TeamId").textContent=el.TeamId;

            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.nombre = el.nombre;
            $template.querySelector(".edit").dataset.edad = el.edad;
            $template.querySelector(".edit").dataset.telefono = el.telefono;
            $template.querySelector(".edit").dataset.mail = el.mail;
            $template.querySelector(".edit").dataset.direccion = el.direccion;
            $template.querySelector(".edit").dataset.fechaNacimiento = el.fechaNacimiento;
            $template.querySelector(".edit").dataset.numeroId = el.numeroId;
            $template.querySelector(".edit").dataset.fechaIngreso = el.fechaIngreso;
            $template.querySelector(".edit").dataset.TeamId = el.TeamId;
            $template.querySelector(".edit").dataset.SkillId = el.SkillId;

            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
            
        });

        $table.querySelector("tbody").appendChild($fragment);

    }catch(error){
        let message = error.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}:${message}</b></p>`)
    }
}
//Crear la vista del getListCamiones
const CamionesViewList = (resp) =>{
    const listado = document.getElementById("listCamiones");
    const fragment = new DocumentFragment();
    const tem = document.getElementById("templateList").content;
  
    resp.forEach(element => {
        tem.querySelector("li").textContent = element;
        const miElemento = tem.cloneNode(true); 
        fragment.appendChild(miElemento);
    });
    listado.appendChild(fragment);
}

const insertTitleLIst = () =>{
    const listado = document.getElementById("listDataCamiones");
    const title = document.createElement("h2");
    title.innerHTML = "<strong>Inventario camiones</strong>";
   listado.insertAdjacentElement("afterbegin",title);
}

export {  CamionesViewList, insertTitleLIst };
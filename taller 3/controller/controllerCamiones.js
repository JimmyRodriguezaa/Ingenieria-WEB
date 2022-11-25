import {Camiones} from "../model/modelCamiones.js";
import {CamionesViewList} from "../view/viewCamiones.js";
import {insertTitleLIst} from "../view/viewCamiones.js";

const buttonCall = document.getElementById("btnListar");

//Obtener Modelo
const getListCamiones = (Camiones) =>{
    let datos = [];
    for (let s of Camiones){
        let datosTemplate = `${s.marca} ${s.conductor} ${s.modelo}`;
        datos.push(datosTemplate);
    }
    return datos;
}
//Asociando el evento al boton

buttonCall.addEventListener("click", ()=>{
    const response = getListCamiones(Camiones);
    //console.log(response);
    CamionesViewList(response);
    insertTitleLIst();
});




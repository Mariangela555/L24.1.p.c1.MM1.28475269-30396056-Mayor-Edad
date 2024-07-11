export default class Cl_Contador{
    constructor(){
        this.cantMayor = 0;  
        this.cantPersonas = 0;  

    }
    procesarPersona(per){
        if(per.edad > 18){
            this.cantMayor++
        }
        this.cantPersonas++
    }
    ContPersonas(){
return this.cantPersonas
    }
    ContMayor(){
        return this.cantMayor
    }
    PorcMayor(){
     return   this.cantMayor*100/this.cantPersonas
    }
}
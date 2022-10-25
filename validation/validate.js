import {Text} from "react-native";

const validation = (value,type) => {

    if (type==="all") {
        //console.log(value)
        if((validateFields(value.email, "email")===true &&validateFields(value.firstName, "name")===true)&& validateFields(value.lastName, "name")===true){
         
            if( value.password!=value.paswordConfirm){
            
                return false
            
            }
            return true
        }
        return false
    }
    return validateFields(value,type);

}

function validateFields(value, type){
    switch (type) {
        case "email":
            if( String(value).toLowerCase().trim().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
             {
              return true 
             }
             
            else{
                if(value!=="")
                {
                    return <Text className="text-red-500 px-8 mt-2 ">Correo no valido</Text>
                }
                return <Text className="text-red-500 px-8 mt-2 ">Campo Obligatorio</Text>
            }
       
          
        case "name":
            //regex para validar que el nombre contenga al menos 3 caracter
            if (/[a-zA-Z]/g.test(value) && value.length > 2) {
                return true
           }
           else{
            if(value!=="")
            {
                return <Text className="text-red-500 px-8 mt-2 ">Nombre no puede llevar Numeros</Text>
            }
            return <Text className="text-red-500 px-8 mt-2 ">Campo Obligatorio</Text>
        }

        case "password":
            //regex para validar que el nombre contenga al menos 8 caracter
            if (/[a-zA-Z-0-9]/g.test(value) && value.length >= 7) {
                return true
            }
           else{
            return  <Text className="text-red-500 px-8 mt-2 ">La contraseña debe de tener al 8 Caracteres</Text>
           }

      

        case "passwordEqual":
            //regex para validar que el nombre contenga al menos 8 caracter
            console.log(value)
            let pass= value.split(",")

            if (/[a-zA-Z-0-9]/g.test(pass[0]) && pass[0].length >= 7) {
                if(pass[0]===pass[1]){
                    return true
                }
                return  <Text className="text-red-500 px-8 mt-2 ">La contraseñas no coinciden</Text>
                
           }
           
        // case "email":
        //     return
            
    
        default:
            return false
            
        
    }
}

export default validation;
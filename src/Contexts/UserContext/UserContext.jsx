import React from "react"

const UserContext = React.createContext('user');

export const UserProvider = ({ children }) => {
    //primer estado de los datos del usuario
    const [user , setUser ] = React.useState([]);

    //primer monte de la aplicacion
    React.useEffect(() => {
        //capturar datos de localstorage segun su key
        const jsonData = localStorage.getItem('user');
        //pasamos los datos capturados a JSON
        // const savedData = JSON.parse(jsonData);
        //validamos 
        if(!jsonData) return;
        //si no existe un usuario guardamos con estado inicial
        setUser(jsonData);
        console.log(user);
    },[])

    const data = {
        user : user
    }
    
    return(
        <UserContext.Provider value={data}>
            { children }
        </UserContext.Provider>
    )
}
    
export default UserContext;


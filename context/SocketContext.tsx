import { createContext, useContext } from "react";

interface iSocketContext{

}

export const SocketContext = createContext<iSocketContext | null>(null)

export const SocketContextProvider= () =>{
    return <SocketContext.Provider value={{}}>

    </SocketContext.Provider>
}

export const useSocket = ()=>{
    const context = useContext(SocketContext)

    if(context === null){
        throw new Error ("useSocket must be used within a SocketContextProvider")
    }

    return context
}
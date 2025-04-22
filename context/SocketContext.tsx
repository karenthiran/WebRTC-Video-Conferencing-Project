import { SocketUser } from "@/types";
import { useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface iSocketContext{

}

export const SocketContext = createContext<iSocketContext | null>(null)

export const SocketContextProvider= ({children}:{children:React.ReactNode}) =>{

    const {user}=useUser()
    const [socket, setSocket] = useState<Socket | null>(null)
    const [isSocketConnected, setIsSocketConnected] = useState(false)
    const [onlineUsers, setOnlineUsers] = useState<SocketUser[] | null>(null)

    //initillizing a socket
    useEffect( ()=>{
        const newSocket = io()
        setSocket(newSocket)

        return ()=>{
            newSocket.disconnect()
        }
    },[user])

    useEffect( ()=>{
        if(socket===null) return;

        if(socket.connected){
            onConnect()
        }

        function onConnect(){
            setIsSocketConnected(true)
        }

        function onDisconnet(){
            setIsSocketConnected(false)
        }

        socket.on('connect',onConnect)
        socket.on('disconnect',onDisconnet)

        return ()=>{
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnet)
        }

    }, [socket])

    //set online users
    useEffect(()=>{

        if(!socket || !isSocketConnected) return;

        socket.emit("addNewUser",user)
        socket.on('getusers',(res)=>{
            setOnlineUsers(res)
        })

        return ()=>{
            socket.off('getusers',(res)=>{
            setOnlineUsers(res)
        })
        }

    },[socket, isSocketConnected, user])

    return <SocketContext.Provider value={{}}>
        {children}
    </SocketContext.Provider>
}

export const useSocket = ()=>{
    const context = useContext(SocketContext)

    if(context === null){
        throw new Error ("useSocket must be used within a SocketContextProvider")
    }

    return context
}
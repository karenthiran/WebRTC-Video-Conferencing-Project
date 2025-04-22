import { User } from "@clerk/nextjs/server";

export type SocketUser = {
    userId : String;
    socketId : String;
    profile : User;
}
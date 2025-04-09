'use client'

import { useAuth, UserButton } from "@clerk/nextjs";
import { Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Container from "./Container";

const NavBar=()=>{
    const router=useRouter()
    const {userId}=useAuth()

    return (
    <div className="sticky top-0 border border-b-primary/10">
        <Container>
            <div className="flex justify-between items-center">
                <div className="flex flex-center gap-1 cursor-pointer" onClick={()=>router.push('/')}>
                    <Video />
                    <div className="font-bold text-xl">VideoConfrence</div>
                </div>
                <div className="flex gap-3 items-center">
                    <UserButton />
                    {!userId && <>
                        <Button onClick={()=>router.push('/sign-in')} size='sm' variant='outline'>Sign in</Button>
                        <Button onClick={()=>router.push('/sign-up')} size='sm'>Sign up</Button>
                    </>}
                </div>
            </div>
        </Container>
    </div>
    );
}

export default NavBar;
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const Header: React.FC = () => {
    return (
        <nav className='py-4 flex justify-between items-center sticky top-0 bg-white '>
            <div className='text-2xl font-bold'>
                My Task
            </div>
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    )
}

export default Header
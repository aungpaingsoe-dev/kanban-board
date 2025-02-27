import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Ellipsis } from 'lucide-react'
import React from 'react'

const TaskItem: React.FC = () => {
    return (
        <div className='border p-3 rounded-lg shadow-sm cursor-grab flex flex-col gap-3'>
            <div className='font-medium flex justify-between items-center'>
                <div>To develop new api</div>
                <Button
                    variant="ghost"
                    size="icon"
                    className='cursor-pointer'
                >
                    <Ellipsis size={16} />
                </Button>
            </div>
            <Badge>
                High Priority
            </Badge>
            <div className='flex items-center gap-1 text-sm'>
                <Calendar size={16} />
                Due : 05/03/2025
            </div>
        </div>
    )
}

export default TaskItem
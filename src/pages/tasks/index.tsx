import { Circle, CircleCheck, Clock, Plus } from 'lucide-react'
import React from 'react'
import TaskItem from './_components/task-item'
import { Button } from '@/components/ui/button'

const Tasks: React.FC = () => {
    return (
        <section>
            <div className='grid grid-cols-3 gap-3'>
                {/* To Do */}
                <div>
                    <div className='text-lg flex justify-between items-center gap-1 mb-5 text-sm uppercase font-bold'>
                        <div className='flex gap-1'>
                            <Circle size={20} />
                            To Do
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                        >
                            <Plus size={16} />
                            New
                        </Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <TaskItem />
                        <TaskItem />
                    </div>
                </div>

                {/* In Progress */}
                <div>
                    <div className='text-lg flex items-center justify-between gap-1 mb-5 text-sm uppercase font-bold'>
                        <div className='flex gap-1'>
                            <Clock size={20} className='text-yellow-500' />
                            In Progress
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                        >
                            <Plus size={16} />
                            New
                        </Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <TaskItem />
                        <TaskItem />
                    </div>
                </div>

                {/* Done */}
                <div>
                    <div className='text-lg flex items-center justify-between gap-1 mb-5 text-sm uppercase font-bold'>
                        <div className='flex gap-1'>
                            <CircleCheck size={20} className='text-green-500' />
                            Done
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                        >
                            <Plus size={16} />
                            New
                        </Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <TaskItem />
                        <TaskItem />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tasks
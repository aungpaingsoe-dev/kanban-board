import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { FormEvent, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface TaskCreateButtonProp {
    taskType: 'TODO' | 'INPROGRESS' | 'DONE'
}

interface Task {
    title: string;
    description: string;
    priority: string;
    due_date: string;
}

const TaskCreateButton: React.FC<TaskCreateButtonProp> = ({ taskType }) => {
    const [task, setTask] = useState<Task>({
        title: "",
        description: "",
        priority: "",
        due_date: ""
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Hello World!");
    };

    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Button
                        variant="outline"
                        size="sm"
                        className='cursor-pointer'
                    >
                        <Plus size={16} />
                        New
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New To Do</DialogTitle>
                    </DialogHeader>
                    <div>
                        <form
                            className='flex flex-col gap-4'
                            onSubmit={handleSubmit}
                            id='task_create_form'
                        >
                            <div>
                                <Label htmlFor="title">Title <span className='text-red-500'>*</span></Label>
                                <Input
                                    className='mt-2'
                                    id='title'
                                    placeholder='Enter task title'
                                />
                            </div>
                            <div>
                                <Label htmlFor="description">Description (optional)</Label>
                                <Textarea
                                    className='mt-2'
                                    id='description'
                                    placeholder='Enter task description (optional)'
                                />
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <Label htmlFor="priority">Priority<span className='text-red-500'>*</span></Label>
                                    <Select>
                                        <SelectTrigger id='priority' className='mt-2'>
                                            <SelectValue placeholder="Select task priority" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="LOW">Low</SelectItem>
                                                <SelectItem value="MEDIUM">Medium</SelectItem>
                                                <SelectItem value="HIGH">High</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="due_date">Due Date<span className='text-red-500'>*</span></Label>
                                    <Input id='due_date' type="date" className='mt-2' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <DialogFooter>
                        <Button type="submit" form='task_create_form' className='cursor-pointer'>Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default TaskCreateButton
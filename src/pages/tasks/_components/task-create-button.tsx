import { Button } from "@/components/ui/button";
import { CircleCheck, Circle, Clock, Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { Task } from "@/types";
import { useTaskStore } from "@/stores";

interface TaskCreateButtonProp {
  taskType: "TODO" | "INPROGRESS" | "DONE";
}

const TaskCreateButton: React.FC<TaskCreateButtonProp> = ({ taskType }) => {
  const { tasks, addTask } = useTaskStore();
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>();

  const onSubmit = (data: Task) => {
    addTask({
      id: tasks.length + 1,
      title: data.title,
      description: data.description,
      due_date: data.due_date,
      type: taskType,
      priority: data.priority,
    });
    reset();
    setOpen(false);
  };

  const dialogTitle = () => {
    if (taskType === "TODO")
      return (
        <div className="flex items-center gap-1.5">
          <Circle />
          Create New To Do Task
        </div>
      );

    if (taskType === "INPROGRESS")
      return (
        <div className="flex items-center gap-1.5">
          <Clock className="text-yellow-500" />
          Create New In Progress Task
        </div>
      );

    if (taskType === "DONE")
      return (
        <div className="flex items-center gap-1.5">
          <CircleCheck className="text-green-500" />
          Create New Done Task
        </div>
      );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>
          <Button variant="outline" size="sm" className="cursor-pointer">
            <Plus size={16} className="mr-2" />
            New
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" capitalize ">{dialogTitle()}</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col gap-4"
          id="task_create_form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Label htmlFor="title">
              Title <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <Input
                  id="title"
                  placeholder="Enter task title"
                  {...field}
                  className="mt-2"
                />
              )}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="description">Description (optional)</Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  id="description"
                  placeholder="Enter task description (optional)"
                  className="mt-2"
                />
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="priority">
                Priority <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="priority"
                control={control}
                defaultValue="LOW"
                rules={{ required: "Priority is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="priority" className="mt-2">
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
                )}
              />
              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.priority.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="due_date">
                Due Date <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="due_date"
                control={control}
                rules={{ required: "Due date is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="due_date"
                    type="date"
                    className="mt-2"
                  />
                )}
              />
              {errors.due_date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.due_date.message}
                </p>
              )}
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="task_create_form"
            className="cursor-pointer"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCreateButton;

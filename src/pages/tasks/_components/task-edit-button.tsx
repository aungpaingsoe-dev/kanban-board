import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Circle, CircleCheck, Clock, Edit3 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Task } from "@/types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTaskStore } from "@/stores";

const TaskEditButton: React.FC<{ task: Task }> = ({ task }) => {
  const [open, setOpen] = useState(false);
  const { updateTask } = useTaskStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>({
    defaultValues: {
      title: task.title,
      description: task.description ?? "",
      priority: task.priority,
      due_date: task.due_date,
      type: task.type,
    },
  });

  // Reset the form values when the task prop changes
  useEffect(() => {
    reset({
      title: task.title,
      description: task.description ?? "",
      priority: task.priority,
      due_date: task.due_date,
      type: task.type,
    });
  }, [task, reset]);

  const onSubmit = (data: Task) => {
    updateTask(task.id, {
      id: task.id,
      title: data.title,
      description: data.description,
      due_date: data.due_date,
      type: data.type,
      priority: data.priority,
    });
    reset();
    setOpen(false);
  };

  const dialogTitle = () => {
    if (task.type === "TODO")
      return (
        <div className="flex items-center gap-1.5">
          <Circle />
          Edit To Do Task
        </div>
      );

    if (task.type === "INPROGRESS")
      return (
        <div className="flex items-center gap-1.5">
          <Clock className="text-yellow-500" />
          Edit In Progress Task
        </div>
      );

    if (task.type === "DONE")
      return (
        <div className="flex items-center gap-1.5">
          <CircleCheck className="text-green-500" />
          Edit Done Task
        </div>
      );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Edit3 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="capitalize">{dialogTitle()}</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col gap-4"
          id="task_edit_form"
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
                  value={field.value}
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
                  value={field.value}
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
                    value={field.value}
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
            form="task_edit_form"
            className="cursor-pointer"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskEditButton;

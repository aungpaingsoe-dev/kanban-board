import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useTaskStore } from "@/stores";
import { Task } from "@/types";

const TaskDeleteButton: React.FC<{ task: Task }> = ({ task }) => {
  const [open, setOpen] = useState(false);
  const { removeTask } = useTaskStore();

  const handleDeleteTask = () => {
    removeTask(task.id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>
          <Button
            variant="ghost"
            size="icon"
            className=" cursor-pointer "
            onClick={() => setOpen(true)}
          >
            <Trash2 className="text-red-500" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="capitalize">Confirmation</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete?
          </DialogDescription>
        </DialogHeader>
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
            className="cursor-pointer"
            variant="destructive"
            onClick={() => handleDeleteTask()}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDeleteButton;

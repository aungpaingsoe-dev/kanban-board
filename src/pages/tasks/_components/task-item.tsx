import React from "react";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/types";
import { Calendar } from "lucide-react";
import TaskEditButton from "./task-edit-button";
import TaskDeleteButton from "./task-delete-button";

interface TaskItemProp {
  task: Task;
}

const TaskItem: React.FC<TaskItemProp> = ({ task }) => {
  const getPriorityText = () => {
    let text;

    if (task.priority === "LOW")
      return <Badge variant="outline">Low Priority</Badge>;

    if (task.priority === "MEDIUM")
      return <Badge variant="default">Medium Priority</Badge>;

    if (task.priority === "HIGH")
      return <Badge variant="destructive">High Priority</Badge>;

    return text;
  };

  return (
    <div className="border p-3 rounded-lg shadow-sm cursor-grab hover:shadow-lg transition-all active:rotate-3 active:shadow-xl flex flex-col gap-3">
      <div className="font-medium flex justify-between items-center">
        <div>{task.title}</div>
        <div className="flex items-center">
          <TaskEditButton task={task} />
          <TaskDeleteButton task={task} />
        </div>
      </div>
      {getPriorityText()}
      <div className="flex items-center gap-1 text-sm">
        <Calendar size={16} />
        Due : {task.due_date}
      </div>
    </div>
  );
};

export default TaskItem;

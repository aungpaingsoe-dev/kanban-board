import { Calendar, Circle, CircleCheck, Clock } from "lucide-react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Badge } from "@/components/ui/badge";
import CreateButton from "./_components/create-button";
import { useTaskStore } from "@/stores";
import React from "react";
import Empty from "./_components/empty";
import DeleteButton from "./_components/delete-button";
import EditButton from "./_components/edit-button";
import { Task as ITask } from "@/types";
import { useLocation } from "react-router";
import { Separator } from "@/components/ui/separator";

const TaskItem: React.FC<ITask> = ({
  id,
  text,
  description,
  due_date,
  priority,
  status,
}) => {
  const [{ isDragging }, drag]: any = useDrag({
    type: "TASK",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const isOverDue = () => {
    const dueDate = new Date(due_date);
    const today = new Date();
    const isOverdue = dueDate < today;
    return isOverdue;
  };

  return (
    <div
      ref={drag}
      className={`border p-3 rounded-lg shadow-sm cursor-grab bg-white dark:bg-gray-900 transition-all flex flex-col gap-3 ${
        isDragging && "hidden"
      }`}
    >
      <div className="font-medium flex justify-between items-center">
        <div className=" text ">
          {text.length > 40 ? text.slice(0, 40) + "..." : text}
        </div>
        <div className="flex items-center">
          <EditButton
            id={id}
            text={text}
            due_date={due_date}
            description={description}
            priority={priority}
            status={status}
          />
          <DeleteButton id={id} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center gap-1 text-xs ${
            isOverDue() && "text-red-500"
          }`}
        >
          <Calendar size={16} />
          Due : {due_date}
        </div>
        {priority === "Low" && <Badge variant="outline">Low Priority</Badge>}
        {priority === "Medium" && (
          <Badge variant="default">Medium Priority</Badge>
        )}
        {priority === "High" && (
          <Badge variant="destructive">High Priority</Badge>
        )}
      </div>
    </div>
  );
};

const Column = ({ status, tasks, onDrop }: any) => {
  const [{ canDrop, isOver }, drop]: any = useDrop({
    accept: "TASK",
    drop: (item: any) => onDrop(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div ref={drop}>
      <div className="text-sm flex justify-between up items-center gap-1 mb-5 font-bold">
        <div className="flex gap-1.5 items-center uppercase">
          {status === "Todo" && <Circle size={20} />}
          {status === "In Progress" && (
            <Clock size={20} className="text-yellow-500" />
          )}
          {status === "Done" && (
            <CircleCheck size={20} className="text-green-500" />
          )}
          {status}
          <Badge variant="outline">
            {tasks.filter((task: any) => task.status === status)?.length}
          </Badge>
        </div>
        <CreateButton status={status} />
      </div>
      <Separator className={`mb-3 ${isActive && "bg-slate-700"} `} />
      <div className="flex flex-col gap-2 h-[calc(100vh-200px)]">
        {tasks.filter((task: any) => task.status === status).length === 0 ? (
          <Empty />
        ) : (
          tasks
            .filter((task: any) => task.status === status)
            .map((task: any) => (
              <TaskItem
                key={task.id}
                id={task.id}
                text={task.text}
                description={task.description}
                due_date={task.due_date}
                priority={task.priority}
                status={task.status}
              />
            ))
        )}
      </div>
    </div>
  );
};

const Tasks = () => {
  const { tasks, updateTask } = useTaskStore();
  const location = useLocation();

  const handleDrop = (id: number, newStatus: string) => {
    let task = tasks.find((task) => task.id === id);
    updateTask(id, {
      ...task,
      status: newStatus,
    });
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="md:hidden">
          {location.hash === "#todo" && (
            <Column status="Todo" tasks={tasks} onDrop={handleDrop} />
          )}
          {location.hash === "#in-progress" && (
            <Column status="In Progress" tasks={tasks} onDrop={handleDrop} />
          )}
          {location.hash === "#done" && (
            <Column status="Done" tasks={tasks} onDrop={handleDrop} />
          )}
        </div>
        <div className=" hidden md:grid md:grid-cols-3 gap-3">
          <Column status="Todo" tasks={tasks} onDrop={handleDrop} />
          <Column status="In Progress" tasks={tasks} onDrop={handleDrop} />
          <Column status="Done" tasks={tasks} onDrop={handleDrop} />
        </div>
      </DndProvider>
    </>
  );
};

export default Tasks;

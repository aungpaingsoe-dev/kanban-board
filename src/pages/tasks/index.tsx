import { Circle, CircleCheck, Clock } from "lucide-react";
import React from "react";
import TaskEmpty from "./_components/task-empty";
import TaskCreateButton from "./_components/task-create-button";
import { useTaskStore } from "@/stores";
import TaskItem from "./_components/task-item";

const Tasks: React.FC = () => {
  const { tasks } = useTaskStore();

  const getTodoTasks = () => {
    return tasks.filter((task) => task.type === "TODO");
  };

  const getInProgressTasks = () => {
    return tasks.filter((task) => task.type === "INPROGRESS");
  };

  const getDoneTasks = () => {
    return tasks.filter((task) => task.type === "DONE");
  };

  return (
    <section>
      <div className="grid grid-cols-3 gap-3">
        {/* To Do */}
        <div>
          <div className="text-sm flex justify-between items-center gap-1 mb-5 uppercase font-bold">
            <div className="flex gap-1">
              <Circle size={20} />
              To Do
            </div>
            <TaskCreateButton taskType="TODO" />
          </div>
          <div className="flex flex-col gap-2">
            {getTodoTasks().length === 0 ? (
              <TaskEmpty />
            ) : (
              getTodoTasks().map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            )}
          </div>
        </div>

        {/* In Progress */}
        <div>
          <div className=" flex items-center justify-between gap-1 mb-5 text-sm uppercase font-bold">
            <div className="flex gap-1">
              <Clock size={20} className="text-yellow-500" />
              In Progress
            </div>
            <TaskCreateButton taskType="INPROGRESS" />
          </div>
          <div className="flex flex-col gap-2">
            {getInProgressTasks().length === 0 ? (
              <TaskEmpty />
            ) : (
              getInProgressTasks()?.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            )}
          </div>
        </div>

        {/* Done */}
        <div>
          <div className="flex items-center justify-between gap-1 mb-5 text-sm uppercase font-bold">
            <div className="flex gap-1">
              <CircleCheck size={20} className="text-green-500" />
              Done
            </div>
            <TaskCreateButton taskType="DONE" />
          </div>
          <div className="flex flex-col gap-2">
            {getDoneTasks().length === 0 ? (
              <TaskEmpty />
            ) : (
              getDoneTasks()?.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;

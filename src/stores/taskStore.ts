import { Task } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TaskStore {
  tasks: Task[];
  addTask: (createTaskInput: Task) => void;
  updateTask: (taskId: number, editTaskInput: any) => void;
  removeTask: (taskId: number) => void;
}

const useTaskStore = create<TaskStore>()(
  devtools((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (taskId, editTaskInput) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, ...editTaskInput } : task
        ),
      })),
    removeTask: (taskId) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      })),
  }))
);

export default useTaskStore;

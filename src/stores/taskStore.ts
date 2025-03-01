import { Task } from "@/types";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface TaskStore {
  tasks: Task[];
  addTask: (createTaskInput: Task) => void;
  updateTask: (taskId: number, editTaskInput: Partial<any>) => void;
  removeTask: (taskId: number) => void;
}

const useTaskStore = create<TaskStore>()(
  persist(
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
    })),
    {
      name: "task-storage", // Unique key for localStorage
      storage: createJSONStorage(() => localStorage), // ✅ Correct way to use localStorage
    }
  )
);

export default useTaskStore;

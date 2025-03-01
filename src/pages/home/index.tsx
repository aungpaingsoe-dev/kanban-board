import { useTaskStore } from "@/stores";
import React from "react";

const Home: React.FC = () => {
  const { tasks } = useTaskStore();

  const todoCount = tasks.filter((task) => task.status === "Todo").length;
  const inProgressCount = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;
  const doneCount = tasks.filter((task) => task.status === "Done").length;

  const totalTasks = tasks.length;
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const completedTasks = doneCount;

  return (
    <section className="min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Task Overview Dashboard</h1>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
        {/* Total Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900 ">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
            Total Tasks
          </h2>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {totalTasks}
          </p>
        </div>

        {/* Todo Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md  dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
            Todo
          </h2>
          <p className="text-3xl font-bold text-blue-500">{todoCount}</p>
        </div>

        {/* In Progress Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md  dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
            In Progress
          </h2>
          <p className="text-3xl font-bold text-yellow-500">
            {inProgressCount}
          </p>
        </div>

        {/* Done Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md  dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
            Done
          </h2>
          <p className="text-3xl font-bold text-green-500">{doneCount}</p>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {/* High Priority Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md  dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
            High Priority Tasks
          </h2>
          <p className="text-3xl font-bold text-red-500">{highPriorityTasks}</p>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md  dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
            Completed Tasks
          </h2>
          <p className="text-3xl font-bold text-purple-500">{completedTasks}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

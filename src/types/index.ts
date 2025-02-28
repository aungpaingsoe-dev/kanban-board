export interface Task {
  id: number;
  text: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  due_date: string;
  status: "Todo" | "In Progress" | "Done";
}

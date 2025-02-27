export interface Task {
  id: number;
  title: string;
  description?: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  due_date: string;
  type: "TODO" | "INPROGRESS" | "DONE";
}

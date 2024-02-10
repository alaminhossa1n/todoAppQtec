export type TTodos = {
    id: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    isCompleted?: boolean;
  };
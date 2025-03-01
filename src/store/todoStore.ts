import { create } from "zustand";

type TodoItem = {
  id: number;
  activity: string;
  price: number;
  type: string;
  bookingRequired: boolean;
  accessibility: number;
};

const loadTodos = (): TodoItem[] => {
  if (typeof window !== "undefined") {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  }
  return [];
};

type TodoStore = {
  items: TodoItem[];
  addItem: (item: TodoItem) => void;
  removeItem: (id: number) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  items: loadTodos(),

  addItem: (item) =>
    set((state) => {
      const updatedItems = [...state.items, item];
      localStorage.setItem("todos", JSON.stringify(updatedItems));
      return { items: updatedItems };
    }),

  removeItem: (id) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedItems));
      return { items: updatedItems };
    }),
}));

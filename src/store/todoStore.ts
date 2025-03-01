import { create } from "zustand";
type TodoItem = {
  id: number;
  activity: string;
  price: number;
  type: string;
  bookingRequired: boolean;
  accessibility: number;
};

type TodoStore = {
  items: TodoItem[];
  addItem: (item: TodoItem) => void;
  removeItem: (id: number) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));

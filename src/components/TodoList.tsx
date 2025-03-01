"use client";

import { useTodoStore } from "../store/todoStore";

const TodoList = () => {
  const { items, removeItem } = useTodoStore();

  return (
    <div className="mt-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">To-Do List ({items.length})</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No to-do items yet.</p>
      ) : (
        <ul className="bg-white shadow-md rounded-lg p-4">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <p className="font-medium">{item.activity}</p>
                <p className="text-sm text-gray-500">Price: RM {item.price}</p>
                <p className="text-sm text-gray-500">Type: {item.type}</p>
                <p className="text-sm text-gray-500">
                  Booking Required: {item.bookingRequired ? "Yes" : "No"}
                </p>
                <p className="text-sm text-gray-500">Accessibility: {item.accessibility}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

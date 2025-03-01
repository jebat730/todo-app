"use client";

import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

const TodoForm = () => {
  const { addItem } = useTodoStore();

  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("education");
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!activity || !price) return;

    addItem({
      id: Date.now(),
      activity,
      price: parseFloat(price),
      type,
      bookingRequired,
      accessibility,
    });

    setActivity("");
    setPrice("");
    setType("education");
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="mb-2">
        <label className="block text-sm font-medium">Activity:</label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium">Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 border rounded">
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={bookingRequired}
            onChange={(e) => setBookingRequired(e.target.checked)}
            className="mr-2"
          />
          Booking Required
        </label>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium">Accessibility: {accessibility}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={accessibility}
          onChange={(e) => setAccessibility(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Add To-Do
      </button>
    </form>
  );
};

export default TodoForm;

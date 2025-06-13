import React, { useState } from "react";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("New workout added", json);
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 border border-gray-200">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Add a New Workout</h3>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Exercise Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Bench Press"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Load (in kg)</label>
          <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. 60"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Number of Reps</label>
          <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. 10"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add Workout
        </button>

        {error && (
          <div className="text-red-600 mt-2 text-sm font-medium">{error}</div>
        )}
      </form>
    </div>
  );
}

export default WorkoutForm;

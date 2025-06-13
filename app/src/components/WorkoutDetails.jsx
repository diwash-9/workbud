import React from "react";

function WorkoutDetails({ workout }) {
  return (
    <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 mb-4 p-6 flex items-center justify-between">
      
      {/* Left info */}
      <div className="flex-1">
        <h4 className="text-2xl font-bold text-gray-900 mb-2">{workout.title}</h4>
        <div className="flex flex-wrap gap-x-10 gap-y-1 text-gray-700 text-lg font-semibold">
          <p>
            <span className="text-blue-600">Load:</span> {workout.load} kg
          </p>
          <p>
            <span className="text-blue-600">Reps:</span> {workout.reps}
          </p>
        </div>
      </div>

      {/* Right date */}
      <div className="text-right text-gray-500 text-sm font-medium whitespace-nowrap">
        <div className="bg-blue-50 text-blue-600 rounded-full px-4 py-1 mb-1 inline-block">
          {new Date(workout.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div>
          {new Date(workout.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkoutDetails;

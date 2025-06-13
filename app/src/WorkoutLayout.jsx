import React from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutDetails from "./components/WorkoutDetails";

function WorkoutLayout({ workouts }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto min-h-screen">
      
      {/* Left side - workout list */}
      <div className="flex-1 space-y-4 overflow-y-auto">
        {workouts?.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>

      {/* Right side - form */}
      <div className="w-full lg:w-1/3">
        <WorkoutForm />
      </div>
    </div>
  );
}

export default WorkoutLayout;

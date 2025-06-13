import React from "react";
import { useEffect, useState } from "react";
import WorkoutLayout from "./WorkoutLayout";
function Home() {
    const [workouts, setWorkouts] = useState(null)
  useEffect(() => {
    const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts")
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
                console.log(json)
            }
    };

    fetchWorkouts()
  }, []);
  return (
    <>
     <div className="pt-20">
      <WorkoutLayout workouts={workouts} />
    </div>
    </>
  );
}

export default Home;

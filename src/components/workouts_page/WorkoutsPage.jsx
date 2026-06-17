import WorkoutCard from "../workout_card/WorkoutCard";
import { Link } from "react-router-dom";

const exercises = [
    {
        id: 1,
        name: "Bench Press",
        muscle: "Chest",
        movement: "Push"
    },
    {
        id: 2, 
        name: "Lat Pulldown",
        muscle: "Back",
        movement: "Pull"
    },
    {
        id: 3,
        name: "Bicep Curl",
        muscle: "Biceps",
        movement: "Pull",
    },
    {
        id: 4,
        name: "Leg Extension",
        muscle: "Legs",
        movement: "Legs"
    },
    {
        id: 5,
        name: "Overhead Press",
        muscle: "Shoulders",
        movement: "Push"
    },
    {
        id: 6,
        name: "Skullcrushers",
        muscle: "Triceps",
        movement: "Push"
    }
]

const WorkoutsPage = () => {
    return(
        <div className="mt-5">
            <Link className="ml-15 text-3xl font-roboto-slab font-bold cursor-pointer rounded-2xl" to="/">
                Home
            </Link>
            <div className="flex flex-wrap mx-10 my-5">
                {exercises.map(exercise => {
                    return <WorkoutCard key={exercise.id} workout={exercise} />
                })}
            </div>
        </div>
    );
}

export default WorkoutsPage;
import { HugeiconsIcon } from '@hugeicons/react'
import { EquipmentGym03Icon, EquipmentWeightliftingIcon, BodyPartLegIcon } from "@hugeicons/core-free-icons";

const WorkoutCard = ({workout}) => {
    const Icon = () => {
        const mov = workout.movement;

        if(mov === "Push"){
            return <HugeiconsIcon icon={EquipmentGym03Icon} size={160} color="currentColor" strokeWidth={0.5} />
        }
        else if(mov === "Pull"){
            return <HugeiconsIcon icon={EquipmentWeightliftingIcon} size={160} color="currentColor" strokeWidth={0.5} />
        }
        else{
            return <HugeiconsIcon icon={BodyPartLegIcon} size={160} color="currentColor" strokeWidth={0.5} />
        }
    }

    return(
        <div className="mr-5 mb-10 p-3 h-85 w-85 font-roboto-slab rounded-3xl border border-solid border-olive-400">
            <div className='flex justify-center rounded-3xl border-2 border-yellow-500'>
                <Icon />
            </div>
            <div className='p-3 mt-1'>
                <div className='text-4xl text-yellow-500 font-extrabold'>{workout.name}</div>
                <div className='mt-3 text-2xl font-bold'>Muscle: {workout.muscle}</div>
                <div className='text-2xl font-bold'>Movement: {workout.movement}</div>
            </div>
        </div>
    );
}

export default WorkoutCard;
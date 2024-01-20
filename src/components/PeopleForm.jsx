import { currentStep } from '../stores/stepperStore';
import { useStore } from '@nanostores/react';
export default function PeopleForm () {
    const $currentStep = useStore(currentStep);
    const nextStep = () => {currentStep.set($currentStep + 1);console.log($currentStep)}
    return (
        <div className="relative overflow-x-auto">
            <button className="p-4 bg-slate-200" onClick={nextStep}>Siguiente</button>
        </div>
    )
}
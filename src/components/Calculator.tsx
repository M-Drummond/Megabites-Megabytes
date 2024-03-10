import React, { useState } from 'react';

function Calculator({ darkMode, toggleDarkMode }) {
    const [megabits, setMegabits] = useState<string>("");
    const [megabytes, setMegabytes] = useState<string>("");
    const [megabitsValue, setMegabitsValue] = useState<string>("");

    const calculateMegabytes = (megabits: number): number => {
        return megabits / 8;
    };

    const calculateMegaBits = (megabytes: number): number => {
        return megabytes * 8;
    };

    const handleMegabitsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setMegabits(value);
        const megabitsValue = parseFloat(value);
        if (!isNaN(megabitsValue)) {
            const calculatedMegabytes = calculateMegabytes(megabitsValue).toString();
            setMegabytes(calculatedMegabytes);
            setMegabitsValue(value);
        } else {
            setMegabytes("");
            setMegabitsValue("");
        }
    };

    const handleMegabytesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setMegabytes(value);
        const megabytesValue = parseFloat(value);
        if (!isNaN(megabytesValue)) {
            const calculatedMegabits = calculateMegaBits(megabytesValue).toString();
            setMegabits(calculatedMegabits);
            setMegabitsValue(calculatedMegabits);
        } else {
            setMegabits("");
        }
    };

    return (
        <section
            id="Calculator"
            className={` ${darkMode ? ' ' : ''} container border-current mx-auto px-8 min-h-[500px] border-t-4 border-b-4 md:border-x-4 border-double border`}
        >
            <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                    <span className="block mb-2">Megabits per Second</span>
                    <input
                        id="megabitsInput"
                        onChange={handleMegabitsChange}
                        type="text"
                        value={megabits}
                        className="bg-transparent  border-current border-double border-4 p-4"
                        placeholder="X"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <span className="block mb-2">Megabytes per Second</span>
                    <input
                        type="text"
                        value={megabytes}
                        onChange={handleMegabytesChange}
                        className="bg-transparent  border-current border-double border-4 p-4"
                        id="megabytesInput"
                        placeholder="Y"
                    />
                </label>
            </form>
			{ megabits && megabytes && 
				<p className="text-lg text-center">{ megabitsValue }Mb is equal to { megabytes }MB</p>
			}			
        </section>
    );
}

export default Calculator;

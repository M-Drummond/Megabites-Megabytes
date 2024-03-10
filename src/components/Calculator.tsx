import React, { useState } from 'react';

function calculateMegabytes(megabits : number) {
	return megabits / 8;
}

function calculateMegaBits(megabytes : number) {
	return megabytes * 8 ;
}

function Calculator({ darkMode }) {
	const [megabits, setMegabits] = useState("");
	const [megabytes, setMegabytes] = useState("");

	const handleMegabitsChange = (event) => {
		const megabitsValue : number = parseFloat(event.target.value);
		setMegabits(event.target.value);
		if (!isNaN(megabitsValue)) {
			const megabytesValue = calculateMegabytes(megabitsValue);
			setMegabytes(megabytesValue.toString() );
		} else {
			setMegabytes("");
		}
	};

	const handleMegabytesChange = (event) => {
		const megabytesValue : number = parseFloat(event.target.value);
		setMegabytes(event.target.value);
		if (!isNaN(megabytesValue)) {
			const megabitsValue = calculateMegaBits(megabytesValue);
			setMegabits(megabitsValue.toString());
		} else {
			setMegabits("");
		}
	};

	return (
		<section
			id="Calculator"
			className={` ${darkMode ? 'bg-gray-900 text-white border-white' : 'border-gray-900'} xl:max-w-screen-lg mx-auto px-8 min-h-[500px] border-t border-b md:border-x border-solid md:rounded-xl`}
		>
			<form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
				<label className="flex flex-col gpa-4">
					<span className="block mb-4">Megabits per Second</span>
					<input
						id="megabitsInput"
						onChange={handleMegabitsChange}
						type="text"
						value={megabits}
						className="bg-transparent outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg border-solid border-current border p-4"
						placeholder="X"
						aria-label="megabits input"
					/>
				</label>
				<label className="flex flex-col gpa-4">
					<span className="block mb-4">Megabytes per Second</span>
					<input
						type="text"
						value={megabytes}
						onChange={handleMegabytesChange}
						className="bg-transparent outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg border-solid border-current border p-4"
						id="megabytesInput"
						placeholder="Y"
						aria-label="megabytes input"
					/>
				</label>
			</form>
		</section>
	);
}

export default Calculator;

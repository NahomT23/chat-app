const GenderCheckbox = ({
	selectedGender,
	onCheckBoxChange
}: {
	selectedGender: string,
	onCheckBoxChange: (gender: "male" | "female") => void
}) => {

	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-gray-100'>Male</span>
					<input type='checkbox' className='checkbox border-gray-100'
					checked={selectedGender === "male"}
					onChange={() => onCheckBoxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-gray-100'>Female</span>
					<input type='checkbox' className='checkbox border-gray-100'
					checked={selectedGender === "female"}
					onChange={() => onCheckBoxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
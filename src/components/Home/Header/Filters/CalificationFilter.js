import React from 'react'
import { Range } from "react-range"

export default function CalificationFilter() {
    const [values, setValues] = React.useState([0])
    return (
        <div className="pb-2">
            <div className="bg-gray-500 px-4 mb-2 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Calificación</h2>
                <div className="bg-black rounded-full px-2">
                    <span className="text-white">{values[0]}+</span>
                </div>
            </div>
            <div className="w-full justify-center">
			<div className="w-full px-4 pt-6">
				<Range
					step={0.1}
					min={0.0}
					max={5.0}
					values={values}
					onChange={(values) => {
						setValues(values)
					}}
					renderTrack={({ props, children }) => (
						<div
							{...props}
							className="w-full h-1 pr-2 bg-gray-300 rounded-md"
						>
							{children}
						</div>
					)}
					renderThumb={({ props }) => (
						<div
							{...props}
							className="w-3 h-3 transform translate-x-10 bg-yellow-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
						/>
					)}
				/>
			</div>
            <div className="flex px-2 justify-between mt-2 text-xs text-gray-300">
                <span className="w-6 text-left">Todos</span>
                <span className="w-7 text-center">1</span>
                <span className="w-7 text-center">2</span>
                <span className="w-7 text-center">3</span>
                <span className="w-7 text-center">4</span>
                <span className="w-6 text-right">5</span>
            </div>
		</div>
        </div>
    )
}

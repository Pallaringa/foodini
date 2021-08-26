import React from 'react'
import { Range } from "react-range"

export default function PriceFilter() {
    const [values, setValues] = React.useState([20])
    return (
        <div className="pb-2">
            <div>
            <div className="bg-gray-500 px-4 mb-2 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Precio (NO TERMINADO)</h2>
                <div className="bg-black rounded-full px-2">
                    <span className="text-white">{values[0]>999 ? values[0]/1000 + ' Km' : values[0] + ' m'}</span>
                </div>
            </div>
            <div className="pt-6 w-full justify-center">
			<div className="w-full px-4">
				<Range
					step={1}
					min={20}
					max={50000}
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
                <span className="w-6 text-left">500m</span>
                <span className="w-6 text-right">50Km</span>
            </div>
		</div>
        </div>
    </div>
    )
}

import React from "react";
import foxy from "../assets/fox.png";
import vik from "../assets/rhino.png";

const MatchCard = ({ ...match }) => {
	console.log(match);
	return (
		<div>
			<div className="border-[#090B1A] border-2 border-lg hover:border-[#0dd71491] w-[100%] bg-[#1E2229]  hover:scale-105 transition-all duration-300 ease-in-out">
				<div className="flex gap-[12%] items-center px-4 justify-between">
					<h3 className="font-bold text-[#0dd71491]">{match.name}</h3>
					<h3 className="bg-[#1e5421] text-[#0dd71491] px-8 py-2 font-bold">
						{match.round}
					</h3>
				</div>
				<div className="px-4">
					<p className="font-bold text-white/60">
						{match.date} | {match.time}
					</p>
				</div>
				<div className="flex items-center py-4 justify-between">
					<img src={foxy} alt="" />
					<p className="font-bold border-2 w-8 border-[#0dd71491] px-1 text-white">
						VS
					</p>
					<img src={vik} alt="" />
				</div>
			</div>
		</div>
	);
};

export default MatchCard;

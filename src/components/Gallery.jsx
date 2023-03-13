import React from "react";
import gal from "../assets/lach1.jpg";
import gall from "../assets/lach2.jpg";
import gallery from "../assets/lach3.jpg";
import lary from "../assets/lach4.jpg";

const Gallery = () => {
	return (
		<div className="bg-[#1E0E22] py-12">
			<div className="flex justify-between flex-col xl:flex-row max-w-[1300px] container mx-auto px-8">
				<h3 className="font-bold text-2xl text-white py-8">
					OUR <span className="text-[#0dd71491]">GALLERY</span>
				</h3>
				<button className="bg-[#0dd71491] px-4 xl:px-8 py-2 font-bold rounded-sm text-white mb-4 hover:bg-[#0dd71446]">
					VIEW ALL
				</button>
			</div>
			<div className="grid xl:grid-cols-2 grid-cols-1 max-w-[1200px] container mx-auto gap-5 py-8 px-8">
				<img
					className="border-4 border-[#1E0E22] hover:border-[#0dd71491]"
					src={gal}
					alt=""
				/>
				<img
					className="border-4 border-[#1E0E22] hover:border-[#0dd71491]"
					src={gall}
					alt=""
				/>
				<img
					className="border-4 border-[#1E0E22] hover:border-[#0dd71491]"
					src={gallery}
					alt=""
				/>
				<img
					className="border-4 border-[#1E0E22] hover:border-[#0dd71491]"
					src={lary}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Gallery;

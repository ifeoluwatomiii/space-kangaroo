import React from "react";
import vik from "../assets/viking.png";
import kungfu from "../assets/master.png";
import hello from "../assets/friend.png";
import army from "../assets/army.png";
import bus from "../assets/bus.png";
import snow from "../assets/snow.png";

const Cards = () => {
	return (
		<div className="grid xl:grid-cols-6 grid-cols-2 xl:gap-5 px-4 py-20">
			<div className="py-4 px-4">
				<img
					className="hover:scale-110 transform transition duration-500"
					src={vik}
					alt=""
				/>
				<h4 className="font-bold text-xl text-white mt-4">Evil Inside</h4>
				<p className="font-semibold text-white/50 text-sm mb-4 mt-4">$20</p>
				<button className="bg-[#0dd71491] px-4 xl:px-8 py-2 font-bold rounded-sm text-white mb-4 hover:bg-[#0dd71446]">
					Add to Cart
				</button>
			</div>
			<div className="py-4 px-4">
				<img
					className="hover:scale-110 transform transition duration-500"
					src={kungfu}
					alt=""
				/>
				<h4 className="font-bold text-xl text-white mt-4">Kungfu Master</h4>
				<p className="font-semibold text-white/50 text-sm mb-4 mt-4">$27</p>
				<button className="bg-[#0dd71491] px-4 xl:px-8 py-2 font-bold rounded-sm text-white mb-4 hover:bg-[#0dd71446]">
					Add to Cart
				</button>
			</div>
			<div className="py-4 px-4">
				<img
					className="hover:scale-110 transform transition duration-500"
					src={hello}
					alt=""
				/>
				<h4 className="font-bold text-xl text-white mt-4">Hello Friend</h4>
				<p className="font-semibold text-white/50 text-sm mb-4 mt-4">$23</p>
				<button className="bg-[#0dd71491] px-4 xl:px-8 py-2 font-bold rounded-sm text-white mb-4 hover:bg-[#0dd71446]">
					Add to Cart
				</button>
			</div>
			<div className="py-4 px-4">
				<img
					className="hover:scale-110 transform transition duration-500"
					src={army}
					alt=""
				/>
				<h4 className="font-bold text-xl text-white mt-4">The Army</h4>
				<p className="font-semibold text-white/50 text-sm mb-4 mt-4">$43</p>
				<button className="bg-[#0dd71491] px-4 xl:px-8 py-2 font-bold rounded-sm text-white mb-4 hover:bg-[#0dd71446]">
					Add to Cart
				</button>
			</div>
			<div className="py-4 px-4">
				<img
					className="hover:scale-110 transform transition duration-500"
					src={bus}
					alt=""
				/>
				<h4 className="font-bold text-xl text-white mt-4">Bus Stimulation</h4>
				<p className="font-semibold text-white/50 text-sm mb-4 mt-4">$30</p>
				<button className="bg-[#0dd71491] px-4 xl:px-8 py-2 font-bold rounded-sm text-white mb-4 hover:bg-[#0dd71446]">
					Add to Cart
				</button>
			</div>
			<div className="py-4 px-4">
				<img
					className="hover:scale-110 transform transition duration-500"
					src={snow}
					alt=""
				/>
				<h4 className="font-bold text-xl text-white mt-4">Snowmen</h4>
				<p className="font-semibold text-white/50 text-sm mb-4 mt-4">$38</p>
				<button className="bg-[#0dd71491] px-4 xl:px-8 py-2 font-bold rounded-sm text-white mb-4 hover:bg-[#0dd71446]">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Cards;

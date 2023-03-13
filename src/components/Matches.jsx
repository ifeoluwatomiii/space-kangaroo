import React from "react";
import foxy from "../assets/fox.png";
import vik from "../assets/rhino.png";
import saber from "../assets/sabermask.png";
import rab from "../assets/rabbit.png";
import knight from "../assets/knight.png";
import vam from "../assets/vikstick.png";
import MatchCard from "./MatchCard";
import axios from "axios";
import { useState, useEffect } from "react";

const Matches = () => {
	const [matches, setMatches] = useState([]);

	useEffect(() => {
		fetchMatches();
	}, []);

	const fetchMatches = async () => {
		const result = await axios.get("http://localhost:3000/matches");
		setMatches(result.data);
	};

	console.log(matches);
	return (
		<div className="grid xl:grid-cols-2 grid-cols-1 max-w-[1200px] container mx-auto gap-8 py-8 px-4">
			{matches.slice(0,4).map((match, index) => {
				return <MatchCard key={index} {...match} />;
			})}
		</div>
	);
};

export default Matches;

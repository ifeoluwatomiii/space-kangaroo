import React from "react";
import Slider from "react-slick";
import Hero1 from "../assets/gaming1.jpg";
import Hero2 from "../assets/gaming2.jpg";
import Hero3 from "../assets/gaming3.jpg";

const HeroSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1800,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		fade: true,
		accessibility: true,
		pauseOnHover: false,
	};

	const sliderItems = [
		{
			bgImg: Hero1,
			heading: "Space Kangaroo Esport.",
			text: "An Online gaming platform that helps form a community",
			btnText: "Learn More",
		},
		{
			bgImg: Hero2,
			heading: "Space Kangaroo Esport.",
			text: "We are committed to bringing people together through sports",
			btnText: "Learn More",
		},
		{
			bgImg: Hero3,
			heading: "Space Kangaroo Esport.",
			text: "We believe in team spirit and community.",
			btnText: "Learn More",
		},
	];

	return (
		<div className="slider-wrapper">
			<Slider {...settings}>
				{sliderItems.map((item, index) => (
					<div key={index}>
						<div
							className="h-[100vh] bg-center bg-cover"
							style={{ backgroundImage: `url(${item.bgImg})` }}>
							<div className="slide-content bg-black/75 h-[100vh] w-full text-white flex flex-col items-start justify-center px-8 pt-12">
								<h3 className="font-bold text-[60px] leading-[68px] mb-4">{item.heading}</h3>
								<p className="mb-4  text-[20px]">{item.text}</p>
								<button className="bg-[#0dd71491] hover:bg-[#0dd71446] hover:scale-110 transform transition duration-500 px-10 py-2 font-bold rounded-sm mt-2">{item.btnText}</button>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default HeroSlider;

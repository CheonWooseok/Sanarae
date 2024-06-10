import AppleBanner from "@assets/apple.jpg";
import { useState } from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5f5f5;
	/* padding: 20px; */
`;

const BannerContent = styled.div`
	display: flex;
	padding: 50px 140px;
	box-sizing: border-box;
	background-color: #fff;
	/* padding: 20px; */
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	background-image: url(${AppleBanner});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 600px;
	position: relative;

	&:before {
		content: "";
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	& > p {
		color: #fff;
		font-family: "Black Han Sans", sans-serif;
		font-style: normal;
		font-size: 2.5rem;
		/* font-weight: 500; */
		position: absolute;
		z-index: 1;
	}
`;

const Banner = () => {
	const [index, setIndex] = useState<number>(0);

	const handlePrev = () => {
		setIndex((prev) => (prev === 0 ? 2 : prev - 1));
	};

	const handleNext = () => {
		setIndex((prev) => (prev === 2 ? 0 : prev + 1));
	};

	// 베너에 표시할 내용은 3개로 구성되며 옆으로 넘길 수 있음
	return (
		<BannerWrapper>
			<BannerContent>
				<p>
					신선한 사과와 오미자로 가득한 농장.
					<br /> 자연의 맛을 만나보세요
				</p>
			</BannerContent>
		</BannerWrapper>
	);
};

export default Banner;

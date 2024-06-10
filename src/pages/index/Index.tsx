import Banner from "@/components/banner/Banner";
import { numberWithCommas } from "@/utils/func";
import styled from "styled-components";
import Apple10 from "../../assets/apple10.jpeg";
import AppleJuice from "../../assets/applejuice.jpeg";
import Omija10 from "../../assets/omija10.jpeg";

const IndexPage = () => {
	return (
		<>
			<Banner />
			<Content />
		</>
	);
};

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	background-color: #f5f5f5;
	padding: 3vh 13vw;

	& > h1 {
		text-align: right;
		font-size: 2.3rem;
		font-weight: 400;
		margin: 20px 0;
	}
`;

const Content = () => {
	return (
		<ContentWrapper>
			<h1
				style={{
					fontFamily: "Black Han Sans, sans-serif",
					fontWeight: 500,
				}}
			>
				베스트 추천 상품
			</h1>
			<ProductList />
		</ContentWrapper>
	);
};

const ProductListWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const ProductList = () => {
	const products = [
		{
			image: Omija10,
			detail: {
				name: "오미자 10kg",
				price: 10000,
			},
		},
		{
			image: Apple10,
			detail: {
				name: "사과 10kg",
				price: 20000,
			},
		},
		{
			image: AppleJuice,
			detail: {
				name: "사과 즙",
				price: 30000,
			},
		},
	];

	const DetailButton = styled.button`
		width: 10vw;
		max-width: 100px;
		height: 370px;
		line-height: 100px;
		font-size: 1.5rem;
		font-weight: 500;
		border-radius: 10px;
		text-align: center;
		writing-mode: vertical-lr;
		background-color: #008000;
		color: #fff;
		border: none;
		cursor: pointer;
	`;

	return (
		<ProductListWrapper>
			{products.map((product, index) => (
				<Product key={index} image={product.image} detail={product.detail} />
			))}
			<DetailButton
				onClick={() => {
					alert("더보기 버튼 클릭");
				}}
			>
				더보기
			</DetailButton>
		</ProductListWrapper>
	);
};

const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	background-color: #fff;
	/* padding: 20px; */
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	width: 20vw;
	max-width: 270px;
	height: 370px;
	margin: 0px 30px;
`;

const ProductImage = styled.div`
	background-color: #f5f5f5;
	width: 100%;
	height: 300px;
`;

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 30%;

	& > h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 400;
		color: #666;
	}

	& > p {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 500;
	}
`;

const Product = ({
	image,
	detail,
}: {
	image: string;
	detail: {
		name: string;
		price: number;
	};
}) => {
	return (
		<ProductWrapper>
			<ProductImage>
				<img
					src={image}
					alt="product"
					style={{ width: "100%", height: "100%" }}
				/>
			</ProductImage>
			<ProductInfo>
				<h2>{detail.name}</h2>
				<p>가격: {numberWithCommas(detail.price)}원</p>
			</ProductInfo>
		</ProductWrapper>
	);
};

export default IndexPage;

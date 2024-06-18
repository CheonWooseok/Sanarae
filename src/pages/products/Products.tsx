import { numberWithCommas } from "@/utils/func";

const ProductsPage = () => {
	return (
		<div
			style={{
				padding: "3vh 13vw",
			}}
		>
			<h1
				style={{
					textAlign: "center",
					fontSize: "2rem",
					fontWeight: 600,
					margin: "20px 0",
					textDecoration: "underline",
					textUnderlineOffset: "10px",
					textDecorationColor:
						"linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)",
					// borderBottom: "1px solid #000",
				}}
			>
				상품 목록
			</h1>
			<div
				style={{
					// border: "1px solid #000",
					backgroundColor: "#faebd7",
					borderRadius: 30,
					boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
					width: "100%",
					height: 300,
					margin: "20px 0",
				}}
			></div>
			<div
				style={{
					display: "flex",
					gap: 10,
					// fontWeight: 300,
					fontSize: "0.8rem",
					color: "#666",
				}}
			>
				<span>신상품</span>
				<span>상품명</span>
				<span>높은가격</span>
				<span>낮은가격</span>
			</div>
			<hr
				style={{
					border: "none",
					borderTop: "1px solid #000",
					width: "100%",
					margin: "20px 0",
				}}
			/>
			<Products />
		</div>
	);
};

const Products = () => {
	const products = [...Array(10)].map(
		(_, index) =>
			({
				image: `https://picsum.photos/300/300?random=${index}`,
				detail: {
					name: `Product ${index + 1}`,
					price: 10000 * (index + 1),
				},
			} as const)
	);

	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: 25,
			}}
		>
			{products.map((product, index) => (
				<Product key={index} image={product.image} detail={product.detail} />
			))}
		</div>
	);
};

const Product = ({
	image,
	detail,
}: {
	image: string;
	detail: { name: string; price: number };
}) => {
	return (
		<div>
			<div
				style={{
					width: 300,
					height: 300,
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					borderRadius: 30,
				}}
			></div>
			<div
				style={{
					color: "#000",
					padding: 10,
				}}
			>
				<h2
					style={{
						margin: 0,
						fontSize: "1rem",
						fontWeight: 400,
					}}
				>
					{detail.name}
				</h2>
				<p
					style={{
						margin: 0,
						fontSize: "1rem",
						fontWeight: 600,
					}}
				>
					{numberWithCommas(detail.price)}원
				</p>
			</div>
		</div>
	);
};

export default ProductsPage;

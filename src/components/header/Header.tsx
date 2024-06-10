import AppleLogo from "@assets/apple.png";
import { Badge } from "@mui/material";
import { Input } from "antd";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import styled from "styled-components";

const HeaderWrapper = styled.header`
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	/* padding: 20px; */
	text-align: center;
	display: flex;
	justify-content: space-between;
	position: sticky;
	z-index: 100;
	width: 100%;
	top: 0;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	/* background-color: #d32f2f; */
	font-size: 1.7rem;
	font-weight: 700;
	color: #2e7d32;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
	/* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
	border-radius: 10px;
	padding: 15px 30px;
	font-family: "Nanum Gothic", sans-serif;

	&::after {
		content: "";
		margin-left: 10px;
		background: url(${AppleLogo}) no-repeat;
		background-size: 30px;
		display: inline-block;
		width: 30px;
		height: 30px;
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<Title>산아래 해찬솔</Title>
			<Menus />
			<div style={{ display: "flex", flex: 1 }}>
				<SearchBar />
				<Profile />
			</div>
		</HeaderWrapper>
	);
};

const SearchWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

const SearchBar = () => {
	return (
		<SearchWrapper>
			<Input
				placeholder="검색어를 입력하세요"
				prefix={<BiSearch />}
				size="large"
			/>
		</SearchWrapper>
	);
};

const MenusWrapper = styled.div`
	display: flex;
	flex: 3;
	justify-content: center;
	align-items: center;
`;

const Menu = styled.div`
	padding: 20px;
	width: 130px;
	/* height: 30px; */
	font-size: 1.1rem;
	font-weight: 500;
	color: #000;
	/* color: #2e7d32; */
	font-family: "Nanum Gothic", sans-serif;
	box-sizing: border-box;
	transition: all 0.2s;

	&:hover {
		/* color: #fff; */
		cursor: pointer;
		border-bottom: 2px solid #2e7d32;
	}
`;

const Menus = () => {
	return (
		<MenusWrapper>
			<Menu>농장 소개</Menu>
			<Menu>제조 과정</Menu>
			<Menu>상품 목록</Menu>
			<Menu>상품 문의</Menu>
		</MenusWrapper>
	);
};

const ProfileWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 30px;

	& > * {
		margin-left: 15px;
	}
`;

const Profile = () => {
	return (
		<ProfileWrapper>
			<Cart />
			<FaUser size={20} />
		</ProfileWrapper>
	);
};

const Cart = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<Badge badgeContent={count.toString()} color="error">
			<FaShoppingCart size={20} />
		</Badge>
	);
};

export default Header;

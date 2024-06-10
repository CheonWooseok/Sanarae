import { Footer } from "antd/es/layout/layout";
import { BiCopyright } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const FooterStyle = styled(Footer)`
	/* text-align: center; */
	background-color: #000;

	padding: 6vh 10vw;
	display: flex;
	justify-content: space-between;

	& > .footer-content1 {
		color: #999;

		& > p {
			margin: 0;
		}
	}
`;

const AppFooter = () => {
	return (
		<FooterStyle>
			<div className="footer-content1">
				<p>
					사업자명 : 산아래 해찬솔 농원 주소 : 경상북도 문경시 동로면 안생달길
					153-16
				</p>
				<p>
					사업자 등록번호 : 123-45-67890 대표자 : 천승업 전화번호 :
					010-4521-8442
				</p>
				<p>
					Copyright
					<BiCopyright />
					<span
						style={{
							color: "#fff",
							// fontWeight: "bold",
							paddingLeft: "5px",
						}}
					>
						2024 해찬솔 농원
					</span>{" "}
					All Rights Reserved.
				</p>
			</div>
			<div className="footer-content2">
				<span
					style={{
						borderRadius: "50%",
						backgroundColor: "#999",
						padding: "5px",
						width: "30px",
						height: "30px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<FaInstagram size="20px" color="#fff" />
				</span>
			</div>
		</FooterStyle>
	);
};

export default AppFooter;

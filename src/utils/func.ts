// 숫자 콤마 찍기
export const numberWithCommas = (x: number): string => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

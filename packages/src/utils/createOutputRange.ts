export const createOutputRange = ({
	isIn,
	isOut,
	start,
	end,
	mid,
}: {
	isIn: boolean;
	isOut: boolean;
	start: number;
	end: number;
	mid: number;
}): number[] => {
	if (isIn && isOut) {
		return [start, mid, mid, end];
	}
	if (isIn) {
		return [start, mid];
	}
	if (isOut) {
		return [mid, end];
	}
	return [mid, mid];
};

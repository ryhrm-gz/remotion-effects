export const createInputRange = ({
	isIn,
	isOut,
	inDuration,
	outDuration,
	durationInFrames,
	fps,
}: {
	isIn: boolean;
	isOut: boolean;
	inDuration: number;
	outDuration: number;
	durationInFrames: number;
	fps: number;
}): number[] => {
	if (isIn && isOut) {
		return [
			0,
			inDuration * fps,
			durationInFrames - outDuration * fps,
			durationInFrames,
		];
	}
	if (isIn) {
		return [0, inDuration * fps];
	}
	if (isOut) {
		return [durationInFrames - outDuration * fps, durationInFrames];
	}
	return [0, 1];
};

import {Easing, interpolate} from 'remotion';
import {ReactNode} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {createInputRange} from '../utils/createInputRange';
import {createOutputRange} from '../utils/createOutputRange';

export type ScaleOptions = {
	/** The duration of the animation in seconds
	 * @default 1
	 */
	duration?: number;

	/** The size of the scale
	 * @default 3
	 */
	scale?: number;
};

export type ScaleProps = {
	children: ReactNode;
	isIn?: boolean;
	isOut?: boolean;
	inOptions?: ScaleOptions;
	outOptions?: ScaleOptions;
};

export const Scale = ({
	children,
	isIn = false,
	isOut = false,
	inOptions,
	outOptions,
}: ScaleProps) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const inDuration = inOptions?.duration ?? 1;
	const inScale = inOptions?.scale ?? 3;
	const outDuration = outOptions?.duration ?? 1;
	const outScale = outOptions?.scale ?? 3;

	const inputRange = createInputRange({
		isIn,
		isOut,
		inDuration,
		outDuration,
		fps,
		durationInFrames,
	});

	const scaleOutputRange = createOutputRange({
		isIn,
		isOut,
		start: inScale,
		end: outScale,
		mid: 1,
	});

	const opacityOutputRange = createOutputRange({
		isIn,
		isOut,
		start: 0,
		end: 0,
		mid: 1,
	});

	const scale = interpolate(frame, inputRange, scaleOutputRange, {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic),
	});

	const opacity = interpolate(frame, inputRange, opacityOutputRange, {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic),
	});

	return (
		<div
			style={{
				transform: `scale(${scale})`,
				opacity,
			}}
		>
			{children}
		</div>
	);
};

import {ReactNode} from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {createInputRange} from '../utils/createInputRange';
import {createOutputRange} from '../utils/createOutputRange';
import {Fade} from './Fade';

export type BlurOptions = {
	/** Seconds the transition lasts
	 * @default 1
	 */
	duration?: number;

	/** The size of the blur in pixels
	 * @default 20
	 */
	amount?: number;
};

export type BlurProps = {
	children: ReactNode;
	isIn?: boolean;
	isOut?: boolean;
	inOptions?: BlurOptions;
	outOptions?: BlurOptions;
};

export const Blur = ({
	children,
	isIn = false,
	isOut = false,
	inOptions,
	outOptions,
}: BlurProps) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const inDuration = inOptions?.duration ?? 1;
	const inAmount = inOptions?.amount ?? 20;
	const outDuration = outOptions?.duration ?? 1;
	const outAmount = outOptions?.amount ?? 20;

	const inputRange = createInputRange({
		isIn,
		isOut,
		inDuration,
		outDuration,
		fps,
		durationInFrames,
	});

	const outputRange = createOutputRange({
		isIn,
		isOut,
		start: inAmount,
		end: outAmount,
		mid: 0,
	});

	const blur = interpolate(frame, inputRange, outputRange, {
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.cubic),
	});

	return (
		<Fade
			isIn={isIn}
			isOut={isOut}
			inOptions={{duration: inDuration * 0.5}}
			outOptions={{duration: outDuration * 0.5}}
		>
			<div style={{filter: `blur(${blur}px)`}}>{children}</div>
		</Fade>
	);
};

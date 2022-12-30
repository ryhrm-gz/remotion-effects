import {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {createInputRange} from '../utils/createInputRange';
import {createOutputRange} from '../utils/createOutputRange';

export type FadeOptions = {
	/** Seconds the transition lasts
	 * @default 1
	 */
	duration?: number;
};

export type FadeProps = {
	children: ReactNode;
	isIn?: boolean;
	isOut?: boolean;
	inOptions?: FadeOptions;
	outOptions?: FadeOptions;
};

export const Fade = ({
	children,
	isIn = false,
	isOut = false,
	inOptions,
	outOptions,
}: FadeProps) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const inDuration = inOptions?.duration ?? 1;
	const outDuration = outOptions?.duration ?? 1;

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
		start: 0,
		end: 0,
		mid: 1,
	});

	const opacity = interpolate(frame, inputRange, outputRange, {
		extrapolateRight: 'clamp',
	});

	return <div style={{opacity}}>{children}</div>;
};

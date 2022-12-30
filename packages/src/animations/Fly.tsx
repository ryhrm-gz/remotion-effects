import { ReactNode } from 'react';
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { createInputRange } from '../utils/createInputRange';
import { createOutputRange } from '../utils/createOutputRange';

export type FlyOptions = {
  /** Seconds the transition lasts
   * @default 1
   */
  duration?: number;

  /** The offset of the element in pixels
   * @default 500
   */
  offset?: number;

  /** The position the element flies from
   * @default 'top'
   */
  position?:
    | 'top'
    | 'top-right'
    | 'right'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left'
    | 'top-left';
};

export type FlyProps = {
  children: ReactNode;
  isIn?: boolean;
  isOut?: boolean;
  inOptions?: FlyOptions;
  outOptions?: FlyOptions;
};

export const Fly = ({
  children,
  isIn = false,
  isOut = false,
  inOptions,
  outOptions,
}: FlyProps) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const inDuration = inOptions?.duration ?? 1;
  const inOffset = inOptions?.offset ?? 500;
  const inPosition = inOptions?.position ?? 'top';
  const outDuration = outOptions?.duration ?? 1;
  const outOffset = outOptions?.offset ?? 500;
  const outPosition = outOptions?.position ?? 'top';

  const inputRange = createInputRange({
    isIn,
    isOut,
    inDuration,
    outDuration,
    fps,
    durationInFrames,
  });

  const translateXOutputRange = createOutputRange({
    isIn,
    isOut,
    start: inPosition.includes('left')
      ? inOffset * -1
      : inPosition.includes('right')
      ? inOffset
      : 0,
    end: outPosition.includes('left')
      ? outOffset * -1
      : outPosition.includes('right')
      ? outOffset
      : 0,
    mid: 0,
  });

  const translateYOutputRange = createOutputRange({
    isIn,
    isOut,
    start: inPosition.includes('top')
      ? inOffset * -1
      : inPosition.includes('bottom')
      ? inOffset
      : 0,
    end: outPosition.includes('top')
      ? outOffset * -1
      : outPosition.includes('bottom')
      ? outOffset
      : 0,
    mid: 0,
  });

  const opacityOutputRange = createOutputRange({
    isIn,
    isOut,
    start: 0,
    end: 0,
    mid: 1,
  });

  const translateX = interpolate(frame, inputRange, translateXOutputRange, {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const translateY = interpolate(frame, inputRange, translateYOutputRange, {
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
        transform: `translate(${translateX}px, ${translateY}px)`,
        opacity,
      }}
    >
      {children}
    </div>
  );
};

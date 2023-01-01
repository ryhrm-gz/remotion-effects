import { ReactNode } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { createInputRange } from '../utils/createInputRange';
import { createOutputRange } from '../utils/createOutputRange';

export type MoveOptions = {
  /** Seconds the transition lasts
   * @default durationInFrames / fps
   */
  duration?: number;

  /** The position the element moves to
   * @default 0
   */
  toX?: number;

  /** The position the element moves to
   * @default 0
   * */
  toY?: number;
};

export type MoveProps = {
  children: ReactNode;
  options?: MoveOptions;
};

export const Move = ({ children, options }: MoveProps) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const duration = options?.duration ?? durationInFrames / fps;
  const toX = options?.toX ?? 0;
  const toY = options?.toY ?? 0;

  const inputRange = createInputRange({
    isIn: true,
    isOut: false,
    inDuration: duration,
    outDuration: 0,
    durationInFrames,
    fps,
  });

  const translateXOutputRange = createOutputRange({
    isIn: true,
    isOut: false,
    start: 0,
    mid: toX,
    end: 0,
  });

  const translateYOutputRange = createOutputRange({
    isIn: true,
    isOut: false,
    start: 0,
    mid: toY,
    end: 0,
  });

  const translateX = interpolate(frame, inputRange, translateXOutputRange, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(frame, inputRange, translateYOutputRange, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        transform: `translate(${translateX}px, ${translateY}px)`,
      }}
    >
      {children}
    </div>
  );
};

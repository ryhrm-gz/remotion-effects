import { AbsoluteFill } from 'remotion';
import { Move } from '../../../../packages/src';
import { Circle } from '../../components/Circle';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefefe',
      }}
    >
      <Move options={{ toX: 100, toY: -100, duration: 2 }}>
        <Circle />
      </Move>
    </AbsoluteFill>
  );
};

export default Example;

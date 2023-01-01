import { AbsoluteFill } from 'remotion';
import { Move } from '../../../../packages/src';
import { Square } from '../../components/Square';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
      }}
    >
      <Move options={{ toX: 100, toY: -100, duration: 2 }}>
        <Square />
      </Move>
    </AbsoluteFill>
  );
};

export default Example;

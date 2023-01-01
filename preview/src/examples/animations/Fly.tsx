import { AbsoluteFill } from 'remotion';
import { Circle } from '../../components/Circle';
import { Fly } from '../../../../packages/src';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefefe',
      }}
    >
      <Fly isIn isOut>
        <Circle />
      </Fly>
    </AbsoluteFill>
  );
};

export default Example;

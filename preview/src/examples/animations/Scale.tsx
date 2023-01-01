import { AbsoluteFill } from 'remotion';
import { Circle } from '../../components/Circle';
import { Scale } from '../../../../packages/src';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefefe',
      }}
    >
      <Scale isIn isOut>
        <Circle />
      </Scale>
    </AbsoluteFill>
  );
};

export default Example;

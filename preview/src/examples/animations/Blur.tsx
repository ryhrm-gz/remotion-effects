import { AbsoluteFill } from 'remotion';
import { Circle } from '../../components/Circle';
import { Blur } from '../../../../packages/src';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefefe',
      }}
    >
      <Blur isIn isOut>
        <Circle />
      </Blur>
    </AbsoluteFill>
  );
};

export default Example;

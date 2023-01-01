import { AbsoluteFill } from 'remotion';
import { Circle } from '../../components/Circle';
import { Fade } from '../../../../packages/src';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefefe',
      }}
    >
      <Fade isIn isOut>
        <Circle />
      </Fade>
    </AbsoluteFill>
  );
};

export default Example;

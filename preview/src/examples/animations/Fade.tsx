import { AbsoluteFill } from 'remotion';
import { Square } from '../../components/Square';
import { Fade } from '../../../../packages/src';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
      }}
    >
      <Fade isIn isOut>
        <Square />
      </Fade>
    </AbsoluteFill>
  );
};

export default Example;

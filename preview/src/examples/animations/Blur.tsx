import { AbsoluteFill } from 'remotion';
import { Square } from '../../components/Square';
import { Blur } from '../../../../packages/src';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
      }}
    >
      <Blur isIn isOut>
        <Square />
      </Blur>
    </AbsoluteFill>
  );
};

export default Example;

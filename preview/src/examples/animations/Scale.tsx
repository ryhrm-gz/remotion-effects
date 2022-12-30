import { AbsoluteFill } from 'remotion';
import { Square } from '../../components/Square';
import { Scale } from '../../../../packages/src';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
      }}
    >
      <Scale isIn isOut>
        <Square />
      </Scale>
    </AbsoluteFill>
  );
};

export default Example;

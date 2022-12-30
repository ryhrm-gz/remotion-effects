import { AbsoluteFill } from 'remotion';
import { Square } from '../../components/Square';
import { Fly } from '../../../../packages/src';

const Example = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
      }}
    >
      <Fly isIn isOut>
        <Square />
      </Fly>
    </AbsoluteFill>
  );
};

export default Example;

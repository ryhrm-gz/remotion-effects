import {AbsoluteFill} from 'remotion';
import {Fly} from '../packages/Fly';
import {Square} from './components/Square';

const Sample = () => {
	return (
		<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
			<Fly isIn isOut>
				<Square />
			</Fly>
		</AbsoluteFill>
	);
};

export default Sample;

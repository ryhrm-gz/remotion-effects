import {AbsoluteFill} from 'remotion';
import {Scale} from '../packages/Scale';
import {Square} from './components/Square';

const Sample = () => {
	return (
		<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
			<Scale isIn isOut>
				<Square />
			</Scale>
		</AbsoluteFill>
	);
};

export default Sample;

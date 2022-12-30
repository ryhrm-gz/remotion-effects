import {AbsoluteFill} from 'remotion';
import {Blur} from '../packages/Blur';
import {Square} from './components/Square';

const Sample = () => {
	return (
		<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
			<Blur isIn isOut>
				<Square />
			</Blur>
		</AbsoluteFill>
	);
};

export default Sample;

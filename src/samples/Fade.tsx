import {AbsoluteFill} from 'remotion';
import {Square} from './components/Square';
import {Fade} from '../packages/Fade';

const Sample = () => {
	return (
		<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
			<Fade isIn isOut>
				<Square />
			</Fade>
		</AbsoluteFill>
	);
};

export default Sample;
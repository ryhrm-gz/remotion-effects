import {AbsoluteFill} from 'remotion';
import {Square} from './components/Square';
import {Fade as F} from '../packages/Fade';

const Fade = () => {
	return (
		<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
			<F isIn isOut inOptions={{duration: 0.2}}>
				<Square />
			</F>
		</AbsoluteFill>
	);
};

export default Fade;

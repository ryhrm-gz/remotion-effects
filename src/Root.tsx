import {Composition} from 'remotion';
import Fade from './samples/Fade';

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="Fade"
				component={Fade}
				durationInFrames={150}
				height={1080}
				width={1920}
				fps={30}
			/>
		</>
	);
};

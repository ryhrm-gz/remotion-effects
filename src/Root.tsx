import {Composition} from 'remotion';
import Blur from './samples/Blur';
import Fade from './samples/Fade';
import Fly from './samples/Fly';

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
			<Composition
				id="Blur"
				component={Blur}
				durationInFrames={150}
				height={1080}
				width={1920}
				fps={30}
			/>
			<Composition
				id="Fly"
				component={Fly}
				durationInFrames={150}
				height={1080}
				width={1920}
				fps={30}
			/>
		</>
	);
};

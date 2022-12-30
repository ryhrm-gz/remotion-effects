import { Composition, Folder } from 'remotion';
import Fade from './examples/animations/Fade';
import Blur from './examples/animations/Blur';
import Fly from './examples/animations/Fly';
import Scale from './examples/animations/Scale';

export const Root = () => {
  return (
    <>
      <Folder name="Animations">
        <Composition
          id="Fade"
          component={Fade}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={90}
        />
        <Composition
          id="Blur"
          component={Blur}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={90}
        />
        <Composition
          id="Fly"
          component={Fly}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={90}
        />
        <Composition
          id="Scale"
          component={Scale}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={90}
        />
      </Folder>
    </>
  );
};

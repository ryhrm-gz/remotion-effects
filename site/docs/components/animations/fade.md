---
sidebar_position: 1
---

# Fade

`Fade` is a component that fades in and out.

## Usage

Example with fade-in and fade-out enabled.

```jsx
import { Fade } from '@ryhrm-gz/remotion-effects';

const Example = () => {
  return (
    <Fade isIn isOut>
      // Your content here
    </Fade>
  );
};
```

<video src="/video/Fade.mp4" controls />

## Options

Separate in and out options are available.

```jsx
import { Fade } from '@ryhrm-gz/remotion-effects';

const Example = () => {
  return (
    <Fade isIn isOut inOptions={{ duration: 4 }} outOptions={{ duration: 0.2 }}>
      // Your content here
    </Fade>
  );
};
```

## FadeProps

Component props

#### isIn?: `boolean`

Enables/disables fade-in. Default is `false`

#### isOut?: `boolean`

Enables/disables fade-out. Default is `false`

#### inOptions?: [`FadeOptions`](#fadeoptions)

Fade-in options

#### outOptions?: [`FadeOptions`](#fadeoptions)

Fade-out options

## FadeOptions

#### duration?: `number`

Fade duration in seconds. Default is `1`

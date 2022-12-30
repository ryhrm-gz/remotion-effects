---
sidebar_position: 4
---

# Scale

`Scale` is a component that scales in and out.

## Usage

Example with scale-in and scale-out enabled.

```jsx
import { Scale } from '@ryhrm-gz/remotion-effects';

const Example = () => {
  return (
    <Scale isIn isOut>
      // Your content here
    </Scale>
  );
};
```

<video src="/video/Scale.mp4" controls />

## Options

Separate in and out options are available.

```jsx
import { Scale } from '@ryhrm-gz/remotion-effects';

const Example = () => {
  return (
    <Scale
      isIn
      isOut
      inOptions={{ duration: 4, scale: 0.5 }}
      outOptions={{ duration: 0.2, scale: 5 }}
    >
      // Your content here
    </Scale>
  );
};
```

## ScaleProps

Component props

#### isIn?: `boolean`

Enables/disables scale-in. Default is `false`

#### isOut?: `boolean`

Enables/disables scale-out. Default is `false`

#### inOptions?: [`ScaleOptions`](#scaleoptions)

Scale-in options

#### outOptions?: [`ScaleOptions`](#scaleoptions)

Scale-out options

## ScaleOptions

#### duration?: `number`

Duration of the animation in seconds. Default is `1`

#### scale?: `number`

Scale factor. Default is `3`

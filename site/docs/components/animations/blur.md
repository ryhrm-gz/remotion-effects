---
sidebar_position: 2
---

# Blur

`Blur` is a component that blurs in and out.

## Usage

Example with blur-in and blur-out enabled.

```jsx
import { Blur } from '@ryhrm-gz/remotion-effects';

const Example = () => {
  return (
    <Blur isIn isOut>
      // Your content here
    </Blur>
  );
};
```

<video src="/video/Blur.mp4" controls />

## Options

Separate in and out options are available.

```jsx
import { Blur } from '@ryhrm-gz/remotion-effects';

const Example = () => {
  return (
    <Blur
      isIn
      isOut
      inOptions={{ duration: 4, amount: 10 }}
      outOptions={{ duration: 0.2, amount: 40 }}
    >
      // Your content here
    </Blur>
  );
};
```

## BlurProps

Component props

#### isIn?: `boolean`

Enables/disables blur-in. Default is `false`

#### isOut?: `boolean`

Enables/disables blur-out. Default is `false`

#### inOptions?: [`BlurOptions`](#bluroptions)

Blur-in options

#### outOptions?: [`BlurOptions`](#bluroptions)

Blur-out options

## BlurOptions

#### duration?: `number`

Duration of the animation in seconds. Default is `1`

#### amount?: `number`

The size of the blur in pixels. Default is `20`

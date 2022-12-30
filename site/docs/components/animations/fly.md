---
sidebar_position: 3
---

# Fly

`Fly` is a component that flies in and out.

## Usage

Example with fly-in and fly-out enabled.

```jsx
import { Fly } from '@ryhrm-gz/remotion-effects';

const Example = () => {
  return (
    <Fly isIn isOut>
      // Your content here
    </Fly>
  );
};
```

## Options

Separate in and out options are available.

```jsx
import { Fly } from '@ryhrm-gz/remotion-effects';

const Example = () => {
  return (
    <Fly
      isIn
      isOut
      inOptions={{ duration: 4, offset: 100, position: 'right' }}
      outOptions={{ duration: 0.2, offset: 600, position: 'top-left' }}
    >
      // Your content here
    </Fly>
  );
};
```

## FlyProps

Component props

#### isIn?: `boolean`

Enables/disables fly-in. Default is `false`

#### isOut?: `boolean`

Enables/disables fly-out. Default is `false`

#### inOptions?: [`FlyOptions`](#flyoptions)

Fly-in options

#### outOptions?: [`FlyOptions`](#flyoptions)

Fly-out options

## FlyOptions

#### duration?: `number`

Duration of the animation in seconds. Default is `1`

#### offset?: `number`

Offset of the animation in pixels. Default is `500`

#### position?: `'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right'`

Position of the animation. Default is `top`

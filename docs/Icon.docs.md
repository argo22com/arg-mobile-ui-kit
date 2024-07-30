# Icon Documentation

UI kit uses [Lucide Icons](https://lucide.dev/guide/packages/lucide-react-native) as icon set of choice and follows its design rules.

The `Icon` component is used to render SVG icons with customizable properties. Is used for custom icons that are not part of [Lucide Icons collection](https://lucide.dev/icons/)

## API (Props)

| Prop Name             | Type      | Description                               | Default Value                                  |
|-----------------------|-----------|-------------------------------------------|------------------------------------------------|
| `SvgIcon`             | component | The SVG icon component to render.         |                                                |
| `size`                | number    | The size of the icon.                     | `DEFAULT_LUCIDE_SIZE` (24)                     |
| `strokeWidth`         | number    | The stroke width of the icon.             | `DEFAULT_LUCIDE_STROKE_WIDTH` (2)              |
| `width`               | number    | The width of the icon.                    | `DEFAULT_LUCIDE_SIZE` (24)                     |
| `height`              | number    | The height of the icon.                   | `DEFAULT_LUCIDE_SIZE` (24)                     |
| `color`               | string    | The color of the icon stroke.             | `DEFAULT_LUCIDE_STROKE_COLOR` ("currentColor") |
| `absoluteStrokeWidth` | boolean   | Whether to use absolute stroke width.     | `false`                                        |
| `...rest`             | SvgProps  | Additional props to pass to the SVG icon. |                                                |

## Usage

Introduce your custom icon as [React Native SVG](https://github.com/software-mansion/react-native-svg) component

Ensure there is `viewBox` specified for enabled scaling

```typescript jsx
const SvgComponent = (props: SvgProps) => (
	<Svg viewBox={"0 0 24 24"} fill="none" {...props}>
		<Path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 2v2m-3 8v9m6-9v9M5 16l4-2m6 0 4 2M9 18h6M10 8v.01M14 8v.01M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z"
		/>
	</Svg>
);

```

Use `Icon` component to wrap SVG Icon - result is an icon that follows the principles of Lucide Icons and can be used as Lucide Icon throughout the UK kit.

```typescript jsx
// Standalone
<Icon SvgIcon={SvgComponent} size={24} absoluteStrokeWidth={true} color={"green"} />

//As part of UI kit
<Button leftSlot={<Icon SvgIcon={SvgComponent} />} />
```
# Loader Documentation

## Props

| Property  | Type                     | Description                                                                                | Required | Default |
|-----------|--------------------------|--------------------------------------------------------------------------------------------|----------|---------|
| `style`   | `object`                 | Additional styles for the animated loader wrapper.                                         | No       | None    |
| `...rest` | `ActivityIndicatorProps` | Additional props passed to the `LucideLoaderCircle` component, such as `size` and `color`. | No       |         |

---

## Description

The `Loader` component displays a circular loading indicator with an animation. It uses the `LucideLoaderCircle` icon
and rotates it continuously to indicate a loading state.

## Usage

**Example:**

```jsx
<Loader size={24} color="blue"/>
```

In the example above, the loader is displayed with a size of 24 and a blue color.

## Context Integration

The `Loader` component utilizes the `UIContext` to inherit styling properties like `size` and `color` from the context,
allowing for consistent theming across the application.

**Note**: If context styles are provided, they will override the default or provided `size` and `color` props.

---

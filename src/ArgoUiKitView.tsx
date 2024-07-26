import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ArgoUiKitViewProps } from './ArgoUiKit.types';

const NativeView: React.ComponentType<ArgoUiKitViewProps> =
  requireNativeViewManager('ArgoUiKit');

export default function ArgoUiKitView(props: ArgoUiKitViewProps) {
  return <NativeView {...props} />;
}

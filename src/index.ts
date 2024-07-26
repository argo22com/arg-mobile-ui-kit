import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ArgoUiKit.web.ts
// and on native platforms to ArgoUiKit.ts
import ArgoUiKitModule from './ArgoUiKitModule';
import ArgoUiKitView from './ArgoUiKitView';
import { ChangeEventPayload, ArgoUiKitViewProps } from './ArgoUiKit.types';

// Get the native constant value.
export const PI = ArgoUiKitModule.PI;

export function hello(): string {
  return ArgoUiKitModule.hello();
}

export async function setValueAsync(value: string) {
  return await ArgoUiKitModule.setValueAsync(value);
}

const emitter = new EventEmitter(ArgoUiKitModule ?? NativeModulesProxy.ArgoUiKit);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ArgoUiKitView, ArgoUiKitViewProps, ChangeEventPayload };

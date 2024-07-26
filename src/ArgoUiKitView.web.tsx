import * as React from 'react';

import { ArgoUiKitViewProps } from './ArgoUiKit.types';

export default function ArgoUiKitView(props: ArgoUiKitViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

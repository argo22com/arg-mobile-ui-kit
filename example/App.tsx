import { StyleSheet, Text, View } from 'react-native';

import * as ArgoUiKit from 'argo-ui-kit';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ArgoUiKit.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

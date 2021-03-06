import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Button } from '../components/Themed';
import SimpleComponent from '../components/SimpleComponent';

const testFunction = () => {
  console.log("Hello. This is a test")
}

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Tab One 👌</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <Text>Hello</Text>
        <SimpleComponent/>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 200, height: 200 }}
        />
        <Image
          source={require('../assets/images/splash.png')}
          style={{ width: 200, height: 200 }}
        />
        <Button
          onPress={() => {
            testFunction();
          }}
          title="Click me"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

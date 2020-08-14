import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, View, Button } from './Themed';

export default function HTTPExample() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Text>
        This is a HTTPExample
      </Text>
      {isLoading ? <ActivityIndicator /> : (
        data.map((item) => <Text key={item.id}>{item.title}, {item.releaseYear}</Text>)
      )}

      <Button
        onPress={() => {
          setLoading(!isLoading);
        }}
        title="Click me"
      />
    </View>
  );
}

import { Text, View, Button } from "react-native";
import React, { useState } from "react";
import styles from "./style.js";

export default function App() {
  const [count, setCount] = useState(0);
  const onclick = () => {
    setCount(count + 1);
  };
  console.log({ count });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header Section</Text>
      </View>
      <View style={styles.Views}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Count: {count}</Text>
        <Button onPress={onclick} title="Click me"></Button>
      </View>
    </View>
  );
}

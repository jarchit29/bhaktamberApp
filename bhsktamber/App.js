import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Screens/Home";
import BStrotraMeaning from "./src/Screens/BStrotraMeaning";

// For navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BStotra from "./src/Screens/BStotra";
import BPath from "./src/Screens/BPath";
import BottomNav from "./src/Components/BottomNav";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home Page" component={Home} />
        <Stack.Screen name="Meaning" component={BStrotraMeaning} />
        <Stack.Screen name="Bhaktamber Storta " component={BStotra} />
        <Stack.Screen name="Bhaktamber Path" component={BPath} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

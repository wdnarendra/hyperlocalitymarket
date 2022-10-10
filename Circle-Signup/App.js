import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/Login";
import Login2 from "./Screens/Login2";
import Login3 from "./Screens/Login3";
import Login4 from "./Screens/Login4";
import Login5 from "./Screens/Login5";
import Login6 from "./Screens/Login6";
import Login7 from "./Screens/Login7";
import Login8 from "./Screens/Login8";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login2" options={{ headerShown: false }}>
          {(props) => <Login2 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login3" options={{ headerShown: false }}>
          {(props) => <Login3 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login4" options={{ headerShown: false }}>
          {(props) => <Login4 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login5" options={{ headerShown: false }}>
          {(props) => <Login5 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login6" options={{ headerShown: false }}>
          {(props) => <Login6 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login7" options={{ headerShown: false }}>
          {(props) => <Login7 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login8" options={{ headerShown: false }}>
          {(props) => <Login8 {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

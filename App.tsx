import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppFeed from "./src/screens/AppFeed";
import Home from "./src/screens/Home";
import UserProfile from "./src/screens/UserProfile";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="AppFeed" component={AppFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

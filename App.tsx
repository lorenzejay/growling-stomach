import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import AppFeed from "./src/screens/AppFeed";
import FoodItem from "./src/screens/FoodItem";
import Home from "./src/screens/Home";
import UserProfile from "./src/screens/UserProfile";
import theme from "./src/theme";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Main"
        >
          <Stack.Screen name="Main" component={Home} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="AppFeed" component={AppFeed} />
          <Stack.Screen name="FoodPage" component={FoodItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

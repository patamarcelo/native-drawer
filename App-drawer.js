import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <Drawer.Navigator screenOptions={{}}> */}
			<Drawer.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: "#3c0a6b" },
					headerTintColor: "white",
					drawerActiveBackgroundColor: "#3c0a6b",
					drawerActiveTintColor: "white",
					drawerStyle: {
						backgroundColor: "#ccc"
					}
				}}
			>
				<Drawer.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						// headerStyle: { backgroundColor: "#3c0a6b" },
						// headerTintColor: "white",
						drawerLabel: "Welcome - Label",
						drawerIcon: ({ color, size }) => (
							<Ionicons name="home" color={color} size={size} />
						)
						// drawerActiveBackgroundColor: "#3c0a6b",
						// drawerActiveTintColor: "green",
						// drawerStyle: {
						// 	backgroundColor: "#ccc"
						// }
					}}
				/>
				<Drawer.Screen
					name="User Screen"
					component={UserScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons name="person" color={color} size={size} />
						)
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

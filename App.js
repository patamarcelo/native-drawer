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
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				{/* <Drawer.Navigator screenOptions={{}}> */}
				<Tab.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#3c0a6b" },
						headerTintColor: "white",
						tabBarActiveTintColor: "#3c0a6b"
					}}
				>
					<Tab.Screen
						name="Welcome"
						component={WelcomeScreen}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons
									name="home"
									color={color}
									size={size}
								/>
							)
						}}
					/>
					<Tab.Screen
						name="User Screen"
						component={UserScreen}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons
									name="person"
									color={color}
									size={size}
								/>
							)
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</>
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

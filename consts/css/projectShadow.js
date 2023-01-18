import { Platform } from "react-native";

export const projectShadow = {
	elevation: 4,
	shadowColor: 'black',
	shadowOpacity: 0.5,
	shadowOffset: { width: 0, height: 2 },
	shadowRadius: 8,
	overflow: Platform.OS === "android" ? 'hidden' : 'visible',
}
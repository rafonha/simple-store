import { Stack } from "expo-router";
import AppProvider from "../contexts/context";

export default function Layout() {
    return(
        <AppProvider>
            <Stack>
                <Stack.Screen name="index" options={{ title: "My store" }} />
                <Stack.Screen name="shopping-cart" options={{ title: "Shopping Cart" }} />
            </Stack>
        </AppProvider>
    )
}
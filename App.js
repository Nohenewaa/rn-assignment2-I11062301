import { StatusBar } from 'expo-status-bar';
import { Stylesheet, Text, View } from 'react-native';

export default function App() {
return (
    <View style={Stylesheet.container}>
        <Text style={Stylesheet.text}>
            My name is Naya <text style={Stylesheet.boldText}>Naya</text>
        </Text>
        <StatusBar style="auto"></StatusBar>
    </View>
);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
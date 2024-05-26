import React from 'react';
import { Stylesheet, Text, View } from 'react-native';

export default function App() {
return (
    <View style={Stylesheet.container}>
        <Text style={Stylesheet.text}>
            My name is Naya <text style={Stylesheet.boldText}>Naya</text>
        </Text>
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
    text: {
        fontSize: 50,   
    },
    boldText: {
        fontWeight: 'bold',
    },


    }
)
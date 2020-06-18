export const IMAGENAME = require('./image.gif');
import React, { Component } from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch'
    }
});

export default class App extends Component {
    render() {
        return (
            <View>
                <Text>12345</Text>
                <Image
                    style={{width: 100, height:100 }}
                    source={require('./image.gif')}
                />
            </View>
        );
    }
}

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/Header';
import Input from './src/Input';
import List from './src/List';
// MOBX Storer
import {Provider} from 'mobx-react/native';
import Store from './src/store';

export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Provider {...Store}>
                <View style={styles.container}>
                    <Header/>
                    <Input/>
                    <List/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

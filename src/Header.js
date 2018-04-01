import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
//import { FontAwesome } from '@expo/vector-icons';
// import

export default class Header extends React.Component {
    constructor() {
        super();
        //this.state = { text: '' }
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
    }

    onSubmitEditing() {
        //let tmpList = this.props.todoStore.list;
        //this.props.onSubmitEditing(this.state.text);
        //this.props.todoStore.list = [this.state.text, ...this.props.todoStore.list];
        this.props.todoStore.addTodo();
        this.props.todoStore.text = '';
    }

    render() {
        return (
            <View style={styles.Header}>
                <Text style={styles.title}> To-Do List </Text>
                <TouchableOpacity onPress={this.onSubmitEditing}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'skyblue',
        padding: 20,

    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff'

    }
});
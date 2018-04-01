import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react/native'

@inject('todoStore')
@observer
export default class List extends React.Component {

    constructor() {
        super();
        //this.state = { list: ['click to remove', 'to do 2', 'to do 3', 'to do 4'] }
        //this.onSubmitEditing = this.onSubmitEditing.bind(this);
        //this.removeTodo = this.removeTodo.bind(this);

    }

    componentDidMount() {
        this.props.todoStore.getTodoList();
    }

    /*
        removeTodo(index) {
            //let tmpList = [...this.props.todoStore.list];
            //tmpList = this.props.todoStore.list.filter((tmp, i) => i != index);
            this.props.todoStore.removeTodo(index);
        }
    */

    render() {
        return (
            <View>
                {this.props.todoStore.list.map(
                    (text, i) => {
                        return (
                            <TouchableOpacity key={i} style={styles.List}
                                              onPress={() => this.props.todoStore.removeTodo(i)}>
                                <Text>{text}</Text>
                            </TouchableOpacity>
                        )
                    }
                )}
            </View>
        )
    }

    renderList(text, i) {
        return (
            <View key={i} style={styles.List}>
                <Text>{text}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    List: {
        backgroundColor: '#ddd',
        padding: 15,
        margin: 5,
    },
})

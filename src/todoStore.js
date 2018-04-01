import {observable} from 'mobx';
import {AsyncStorage} from 'react-native';

export default class ToDoStore {
    @observable list = ['click to remove', 'to do 2', 'to do 3', 'to do 4'];
    @observable text = '';

    async addTodo() {
        if (this.text != '') {
            this.list = [this.text, ...this.list];
            this.text = '';
            await AsyncStorage.setItem("todoList", JSON.stringify(this.list));
        }
    }

    async  removeTodo(index) {
        this.list = this.list.filter((tmp, i) => i != index);
        await AsyncStorage.setItem('todoList', JSON.stringify(this.list));
    }

    async getTodoList() {
        this.list = JSON.parse(await AsyncStorage.getItem("todoList"));
    }
}
//const todoStore = new ToDoStore();
4
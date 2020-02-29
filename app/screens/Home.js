import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { todoActionCreators } from '../../redux/actions';
import TodoItem from '../components/TodoItem';
import Filters from '../components/Filters';

function HomeScreen(props) {
  const { todos } = props;

  const [isEditing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [todoText, setTodoText] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodoHandler = () => {
    if (isEditing) {
      props.editTodo({ index: editIndex, content: todoText });
      setEditing(false);
      setEditIndex(-1);
    } else {
      props.addTodo(todoText);
    }

    setTodoText('');
  };

  const toggleHandler = (index) => {
    props.toggleTodo(index);
  };

  const deleteHandler = (index) => {
    props.deleteTodo(index);
  };

  const editHandler = (index) => {
    setEditing(true);
    setEditIndex(index);
    setTodoText(todos[index].content);
  };

  const filterHandler = (selected) => {
    setFilter(selected);
  };

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTodos(todos.slice());
    } else if (filter === 'completed') {
      setFilteredTodos(todos.filter((value) => value.completed));
    } else if (filter === 'active') {
      setFilteredTodos(todos.filter((value) => !value.completed));
    }
  }, [todos, filter]);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.addTodo}>
        <TextInput
          value={todoText}
          onChangeText={setTodoText}
          style={styles.addTodoInput}
          underlineColorAndroid={'transparent'}
          placeholder={'Input Todo Name'}
        />
        <TouchableOpacity
          style={styles.addTodoBtn}
          onPress={addTodoHandler}
        >
          <Text style={styles.addTodoBtnText}>{isEditing ? 'Save' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
      <Filters selected={filter} onSelect={filterHandler} />
      <FlatList
        data={filteredTodos}
        renderItem={({ item, index }) => <TodoItem
          data={item}
          onPress={() => toggleHandler(index)}
          onDelete={() => deleteHandler(index)}
          onEdit={() => editHandler(index)}
          editable={!isEditing && filter === 'all'}
        />}
        keyExtractor={(item, index) => index.toString()}
        style={styles.todoList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 80,
  },
  addTodo: {
    flexDirection: 'row',
  },
  addTodoInput: {
    width: 200,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  addTodoBtn: {
    alignItems: 'center',
    width: 80,
    backgroundColor: 'black',
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 20,
  },
  addTodoBtnText: {
    color: '#fff',
  },
  todoList: {
    width: '100%',
  },
});

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
});

const mapDispatchToProps = todoActionCreators;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

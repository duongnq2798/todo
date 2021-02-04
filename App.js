import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {data} from './data';

const App = () => {
  const [toDoList, setToDoList] = useState(data);
  const [addItem, setAddItem] = useState('');

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id ? {...task, complete: !task.complete} : {...task};
    });
    console.log('delete');
    setToDoList(mapped);
  };

  const addTask = (item) => {
    Keyboard.dismiss;
    let cloneList = [...toDoList];
    cloneList = [
      ...cloneList,
      {id: toDoList.length + 1, task: item, complete: false},
    ];
    setToDoList(cloneList);
    setAddItem('');
  };

  return (
    <View>
      <StatusBar backgroundColor="blue" />
      <Text style={{fontSize: 20, marginVertical: 20, textAlign: 'center'}}>
        ToDo List
      </Text>
      <TextInput
        style={styles.addTask}
        placeholder="Add Task..."
        value={addItem}
        onChangeText={(item) => setAddItem(item)}
        onSubmitEditing={Keyboard.dismiss}
      />
      <TouchableOpacity
        onPress={() => {
          addTask(addItem);
        }}
        style={styles.submit}>
        <Text style={{color: 'white', fontSize: 20}}>Add</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {toDoList.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                handleToggle(item.id);
              }}
              style={{width: 200}}>
              <Text style={styles.titleTodoItem}>{item.task}</Text>
              {item.complete ? (
                <View style={styles.complete}></View>
              ) : (
                <View></View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  addTask: {
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  submit: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleTodoItem: {
    fontSize: 18,
  },
  complete: {
    width: '100%',
    height: 5,
    backgroundColor: 'red',
    position: 'absolute',
    top: 10,
  },
});
export default App;

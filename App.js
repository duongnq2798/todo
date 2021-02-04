import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import TaskItem from './TaskItem';
import AddButton from './AddButton';
import {data} from './data';
import styles from './styles';

const App = () => {
  const [toDoList, setToDoList] = useState(data);
  const [addItem, setAddItem] = useState('');

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id ? {...task, complete: !task.complete} : {...task};
    });
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
    <ScrollView>
      <StatusBar backgroundColor="blue" />
      <Text style={styles.titleApp}>ToDo List</Text>
      <TextInput
        style={styles.addTask}
        placeholder="Add Task..."
        value={addItem}
        onChangeText={(item) => setAddItem(item)}
        onSubmitEditing={Keyboard.dismiss}
      />
      <AddButton addTask={addTask} addItem={addItem} title="Add Item" />
      <View style={styles.container}>
        {toDoList.map((item, index) => {
          return (
            <TaskItem
              toggleId={item.id}
              title={item.task}
              completed={item.complete}
              handleToggle={handleToggle}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default App;

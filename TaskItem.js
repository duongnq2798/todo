import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const TaskItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        props.handleToggle(props.toggleId);
      }}
      style={{width: 200}}>
      <Text style={styles.titleTodoItem}>{props.title}</Text>
      {props.completed ? <View style={styles.complete}></View> : <View></View>}
    </TouchableOpacity>
  );
};

export default TaskItem;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AddButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        props.addTask(props.addItem);
      }}
      style={styles.submit}>
      <Text style={styles.buttonAdd}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

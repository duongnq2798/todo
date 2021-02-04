import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titleApp: {fontSize: 20, marginVertical: 20, textAlign: 'center'},
  buttonAdd: {color: 'white', fontSize: 20},
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

export default styles;

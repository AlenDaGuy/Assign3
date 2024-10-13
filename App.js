import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';

export default function App() {

  const [tasks, setTasks] = useState([[
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]])

  return (
    <SafeAreaView>
    <ToDoList tasks={tasks}/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

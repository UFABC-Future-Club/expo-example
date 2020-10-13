import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import Constants from 'expo-constants'

function isIos () {
  if (Constants.platform.ios) {
    return 0
  } else {
    return Constants.statusBarHeight
  }
} 

export default function App() {

  const [tarefas, setTarefas] = React.useState([])
  const [value, setValue] = React.useState('');

  const adicionarTarefa = function () {
    if (value) { 
      setTarefas([...tarefas, value])
      setValue('')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
    <TextInput style={styles.input} value={value} onChangeText={e => setValue(e)}  />
    <Button title="Adicionar tarefa" onPress={() => adicionarTarefa()} />

      {tarefas.map(function(item, index) {
        return (
          <Text key={index} style={styles.text}>
              { item }
           </Text>
        )
      })
      }
      <StatusBar backgroundColor="#fff"  style="auto" />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isIos()
  },
  text: {
    color: '#fff',
    fontSize: 32,
    marginVertical: 16,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 16
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    color: '#000',
    margin: 16,
    width: 200,
    paddingHorizontal: 16,
    fontSize: 20
  }
});

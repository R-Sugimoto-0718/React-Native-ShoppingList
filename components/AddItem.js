import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddItem({title, addItem}) {

  const [text, setText] = useState('');

  const onchange = textValue => setText(textValue);

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onchange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => {
        addItem(text)
      }}>
        <Text style={styles.btnText}><Icon name="plus" size={20}/></Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
});

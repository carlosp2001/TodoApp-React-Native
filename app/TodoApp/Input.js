import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({inputValue, inputChange}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      onChangeText={inputChange}
      style={styles.input}
      placeholder={'What needs to be done?'}
      placeholderTextColor={'#CACACA'}

    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Input;

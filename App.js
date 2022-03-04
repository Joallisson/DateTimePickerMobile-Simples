import React, {useState} from 'react'; //Importando o React e o useState
import {View, Button, Platform, StyleSheet, Text} from 'react-native'; //Importando vários componentes do react-native
import DateTimePicker from '@react-native-community/datetimepicker'; //Importando DateTimePicker que é responsável por capturar a data e hora

export default function App() {

  const [date, setDate] = useState(new Date()); //Criando variável de estado que recebe um objeto do tipo data que pega a data e hora atual
  const [mode, setMode] = useState('date'); //Criando variável de estado que recebe um valor 'date' como padrão
  const [show, setShow] = useState(false); //Criando variável de estado que determina se mostra ou não o calendário ou relógio pro usuário escolher

  const onChange = (event, selectedDate) => { //Função que serve para atribuir nas váriaveis criadas a data e hora e se mostra ou esconde o calendário e o relógio
    const currentDate = selectedDate || date; //Criando constante que recebe: ou a data e hora selecionadas, ou a data e hora atual atual
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
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

import React, {useState} from 'react'; //Importando o React e o useState
import {View, Button, Platform, StyleSheet, Text} from 'react-native'; //Importando vários componentes do react-native
import DateTimePicker from '@react-native-community/datetimepicker'; //Importando DateTimePicker que é responsável por capturar a data e hora

export default function App() {

  const [date, setDate] = useState(new Date()); //Criando variável de estado que recebe um objeto do tipo data que pega a data e hora atual
  const [mode, setMode] = useState('date'); //Criando variável de estado que recebe um valor 'date' como padrão
  const [show, setShow] = useState(false); //Criando variável de estado que determina se mostra ou não o calendário ou relógio pro usuário escolher

  const onChange = (event, selectedDate) => { //Função que serve para atribuir nas váriaveis criadas a data e hora e se mostra ou esconde o calendário e o relógio
    const currentDate = selectedDate || date; //Criando constante que recebe: ou a data e hora selecionadas pelo usuário, ou a data e hora atual
    setShow(false); //Quando o usuario escolher a data ou hora, então o componente que seleciona a data e hora não será mais exibido
    setDate(currentDate); //Atribuindo a constante "currentDate" a variável de estado "date" para determinar a data e hora
    //setShow(Platform.OS === 'ios'); //Verificando qual a plataforma do que o app está rodando
  };

  const showMode = (currentMode) => { //Esta função é chamada pelos metódos que "showDatepicker" e "showTimepicker" e determina se o que vai ser mostrado ao usuário é o calendário ou o relógio pro usuário escolher
    setShow(true); //Mostra o calendário ou o relógio
    setMode(currentMode); //Atribui o modo (calendário ou relógio) que o usuário escolheu para a variável de estado "mode"
  };

  const showDatepicker = () => { //Mostra o calendário
    showMode('date'); //Determina o modo calenário para ser exibido ao usuário
  };

  const showTimepicker = () => { //Mostra o relógio
    showMode('time'); //Determina o modo relógio para ser exibido ao usuário
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
        <DateTimePicker //Componente que mostra a data e hora para o usuário
          //PARÂMETROS DE CONFIGURAÇÃO DO COMPONENTE
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

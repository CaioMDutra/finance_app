import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../componentes/Header';
import Balance from '../../componentes/Balance';
import Moviments from '../../componentes/Movimentes'
import Actions from '../../componentes/Actions';

const list = [
{
    id: 1,
    label: "Boleto condominio",
    value: "286,64",
    date:  "03/10/2022",
    type: 0
},
{
    id: 2,
    label: "Pix recebido de Stephanie",
    value: "750,00",
    date:  "04/10/2022",
    type: 1

},
{
    id: 3,
    label: "Conta Claro",
    value: "202,54",
    date:  "06/10/2022",
    type: 0

},
]

export default function Home() {
  return (
    <View style={style.container}>
        <Header name="Caio de Macedo Dutra"/>
        
        <Balance saldo="780.348,93" gastos="-528,56"/>

        <Actions/>

        <Text style={style.title}>Ultimas movimentações</Text>
        <FlatList
         style={style.list}
         data={list}
         keyExtractor={(item)=> String(item.id)}
         showsVerticalScrollIndicator={false}
         renderItem={({item})=><Moviments data={item}/>}
         />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd:14,

  }
});

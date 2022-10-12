import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Movimentes({data}) {

    const [showValue, setShowValue] = useState(false);

 return (
   <TouchableOpacity style={style.conteiner} onPress={()=> setShowValue(!showValue)}>
   <Text style={style.date}>{data.date}</Text>

    <View style={style.content}>
        <Text style={style.label}>{data.label}</Text>

       { showValue ? (
         <Text style={data.type === 1 ? style.value : style.expenses}>
         {data.type === 1 ?  `R$ ${data.value}` : `R$ -${data.value}`}
         </Text>
       ) : (
        <View style={style.skeleton}>
        </View>
       )}
        
    </View>
   </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    conteiner:{
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA",
        

    },
    content:{
        flexDirection:"row",
        marginTop:2,
        marginBottom: 8,        
        justifyContent: "space-between"
    },
    date:{
        color:"#A9A9A9",
        fontWeight:"bold",

    },
    label:{
        fontWeight:"bold",
        fontSize: 16,

    },
    value:{
        fontSize:16,
        fontWeight: "bold",
        color: "#2ecc71",
    },
    expenses:{
        fontSize:16,
        fontWeight: "bold",
        color: "#e74e3c",

    },
    skeleton:{
        marginTop: 6,
        width: 60,
        height: 10,
        backgroundColor:"#DADADA"
    }

})
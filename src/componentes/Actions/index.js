import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView  style={style.conteiner} horizontal={true} showsHorizontalScrollIndicator={false}>

    <TouchableOpacity style={style.Buttom}>
        <View style={style.areaButtom}>
        <AntDesign name="addfolder" size={26} color="#000" />
        
        </View>
        <Text style={style.labelButtom}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={style.Buttom}>
        <View style={style.areaButtom}>
        <AntDesign name="tagso" size={26} color="#000" />
        
        </View>
        <Text style={style.labelButtom}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={style.Buttom}>
        <View style={style.areaButtom}>
        <AntDesign name="creditcard" size={26} color="#000" />
        
        </View>
        <Text style={style.labelButtom}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity style={style.Buttom}>
        <View style={style.areaButtom}>
        <AntDesign name="barcode" size={26} color="#000" />
        
        </View>
        <Text style={style.labelButtom}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={style.Buttom}>
        <View style={style.areaButtom}>
        <AntDesign name="setting" size={26} color="#000" />
        
        </View>
        <Text style={style.labelButtom}>Conta</Text>
    </TouchableOpacity>

    

   </ScrollView >
  );
}

const style = StyleSheet.create({
    conteiner:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,

    },
    Buttom:{
        alignItems: "center",
        marginRight: 32,

    },
    areaButtom:{
        backgroundColor: "#ecf0f1",
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    }, 
    labelButtom:{
        marginTop:4,
        textAlign: "center",
        fontWeight: "bold"
    }
})
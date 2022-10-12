import React from "react";

import{View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

import {Feather} from '@expo/vector-icons'
import {MotiView, MotiText } from "moti"
 
export default function Header({name}){
    return(
        <View style={style.conteiner}>

            <View style={style.content}>
                <Text style={style.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={style.buttomUser}>
                    <Feather name="user" size={27} color="FFF"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    conteiner:{
        backgroundColor: "#8000FF",
        paddingTop: StatusBarHeight,
        flexDirection: "row",   
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    username:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
   },
   buttomUser:{
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 44 / 2,
   }
})
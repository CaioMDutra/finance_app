import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Balance({gastos, saldo}) {
    const [showValue, setShowValue] = useState(false);
 return (
    
    <TouchableOpacity style={style.conteiner} onPress={()=> setShowValue(!showValue)}>

    
<View style={style.item}>
            <Text style={style.itemTitle}>Saldo</Text>
            {showValue ?(
                <View style={style.content}>
                
                    <Text style={style.currencySymbol}>R$</Text>
                    <Text style={style.balance}>{saldo}</Text>
                </View> 
                   
                ) : (
                    <View style={style.skeleton}>
                    </View> 

                )}    
                       
</View>                        
        
        <View style={style.item}>
            <Text style={style.itemTitle}>Gastos</Text>
            {showValue ?(
                <View style={style.content}>
                    <Text style={style.currencySymbol}>R$</Text>
                    <Text style={style.expenses}>{gastos}</Text>   
                </View> 
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
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 6,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,

    },
    item:{

    },
    itemTitle:{
        fontSize:20,
        color: "#708090"

    },
    content:{
        flexDirection:"row",
        alignItems: "center",
    },
    currencySymbol:{
        color: "#696969",
        marginRight: 6.

    },
    balance:{
        fontSize: 17,
        color: "#32CD32"
    },
    expenses:{
        fontSize: 17,
        color: "#FF0000"
    },
    skeleton:{
        marginTop: 6,
        width: 60,
        height: 10,
        backgroundColor:"#DADADA"
    }

})

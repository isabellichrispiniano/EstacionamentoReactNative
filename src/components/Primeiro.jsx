import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import Estilo from "./estilo";

export default ()=>{
    return(
        <View style={estiloPrimeiro.fundoPri}>
            <Text style={Estilo.fontG}>Primeiro componente!!!</Text>
        </View>
    )
}

const estiloPrimeiro = StyleSheet.create(
    {
        fundoPri:{
            backgroundColor: '#EE99C2',
            flex: 1,
            padding: 30
        }
    }
)
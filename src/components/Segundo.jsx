import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import Estilo from "./estilo";

export default ()=>{
    return(
        <View style={estiloSegundo.fundoSeg}>
            <Text style={Estilo.fontG}>Segundo componente!!</Text>
        </View>
    )
}

const estiloSegundo = StyleSheet.create(
    {
        fundoSeg:{
            backgroundColor: '#FFB5DA',
            flex: 1,
            padding: 30
        }
    }
)
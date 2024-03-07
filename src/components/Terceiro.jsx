import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import Estilo from "./estilo";

export default ()=>{
    return(
        <View style={estiloterceiro.fundoTer}>
            <Text style={Estilo.fontG}>Terceiro componente!!!</Text>
        </View>
    )
}

const estiloterceiro = StyleSheet.create(
    {
        fundoTer:{ 
            backgroundColor: '#FF7ED4',
            flex: 1,
            padding: 30
                }
    }
)
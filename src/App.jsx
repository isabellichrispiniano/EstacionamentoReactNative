import React from "react";
import {  View, Text, StyleSheet } from "react-native";

import Primeiro from './components/Primeiro';
import Segundo from "./components/Segundo";
import Terceiro from "./components/Terceiro";

export default () =>(
    <View style={style.fundo}>
        <Text>Tela principal</Text>
        <Primeiro/>
        <Segundo/>
        <Terceiro/>
    </View>
)

const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor:'#344955' , 
            flex: 1 ,
            flexDirection: 'column' ,
            padding: 30                                                                                                                                                                                                                                                                                                                                                                                                        
        },
        txtG:{
            fontSize: 20,
            fontStyle: 'italic',
        },
    }
)
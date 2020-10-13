import React,{Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

export default class SecondTab extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Second Tab</Text>
                <Button title="go Third Tab"></Button>
            </View>
        );
    }

    componentDidMount(){
        this.props.navigation.setOptions({
            tabBarLabel:'두번째',
            tabBarIcon:()=><Image source={require('../icon/dao.png')} style={styles.icon}></Image>,
            tabBarBadge:'new',
        });
    }

}

const styles=StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        padding:8,
        fontWeight:"bold",
        fontSize:20
    },
    icon:{
        width:30,
        height:30,
    }
})
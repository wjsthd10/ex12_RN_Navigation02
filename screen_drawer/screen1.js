import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class screen1 extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>screen #1</Text>
                {/* 버튼 누르면 openDrawer해야함. */}
                <Button title="open drawer" onPress={()=>this.props.navigation.openDrawer()}></Button>
                {/* toggle은 누를때마다 드로어반응 */}
                <Button title="open drawer" onPress={()=>this.props.navigation.toggleDrawer()}></Button>
            </View>
        );
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
    }
})
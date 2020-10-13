import React,{Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import FirstTab from './Screen_topTab/FirstTab';
import SecondTab from './Screen_topTab/SecondTab';
import ThirdTab from './Screen_topTab/ThirdTab';

const TopTab=createMaterialTopTabNavigator();

export default class Main_MaterialTopTab extends Component{
    render(){
        return(
            <NavigationContainer>
                <TopTab.Navigator
                    tabBarPosition='top'
                    swipeEnabled={true}
                    tabBarOptions={{
                        activeTintColor:'blue',
                        inactiveTintColor:'gray',
                        showLabel:true,
                        indicatorStyle:{
                            backgroundColor:'green',
                            height:6
                        },
                        showIcon:true                        
                    }}>
                    <TopTab.Screen name="first" component={FirstTab}></TopTab.Screen>
                    <TopTab.Screen
                        name="second" 
                        component={SecondTab} 
                        options={{
                            tabBarLabel:'두번째',
                            tabBarIcon:()=><Image source={require('./icon/dizni.png')} style={{width:30, height:30}}></Image>
                        }}>

                    </TopTab.Screen>
                    <TopTab.Screen name="third" component={ThirdTab}></TopTab.Screen>
                </TopTab.Navigator>
                
            </NavigationContainer>
        );
    }
}


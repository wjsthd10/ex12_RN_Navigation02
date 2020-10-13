import React,{Component} from 'react';
import {Image, View, StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FirstTab from './Screen_bottomTab/FirstTab';
import SecondTab from './Screen_bottomTab/SecondTab';
import ThirdTab from './Screen_bottomTab/ThirdTab';

const BottomTab=createBottomTabNavigator();

export default class Main_BottomTab extends Component{
    render(){
        return(
            <NavigationContainer>
                <BottomTab.Navigator 
                    initialRouteName="second" // 앱의 시작 페이지를 지정함
                    tabBarOptions={{
                        activeTintColor:"red",
                        inactiveTintColor:'gray',
                        activeBackgroundColor:'gray',
                        showLabel:true,// 글씨 없이 아이콘만 나오게 함
                        labelPosition:'below-icon',// beside-icon : 아이콘 옆에
                    }}>
                    <BottomTab.Screen name="first" component={FirstTab}
                        options={{
                            tabBarLabel:'첫 번째', // 라벨표시
                            tabBarBadge:'new',// icon이 있어야 화면에 표시됨
                            tabBarIcon:()=>{return <Image source={require('./icon/bazzi.png')} style={styles.img}></Image>}
                        }}>

                    </BottomTab.Screen>
                    <BottomTab.Screen name="second" component={SecondTab}></BottomTab.Screen>
                    <BottomTab.Screen name="third" component={ThirdTab}></BottomTab.Screen>
                </BottomTab.Navigator>

            </NavigationContainer>
        );
    }
}

const styles=StyleSheet.create({
    img:{
        width:30,
        height:30,
    }
})
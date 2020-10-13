import React,{Component} from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import screen1 from './screen_drawer/screen1';
import screen2 from './screen_drawer/screen2';
import screen3 from './screen_drawer/screen3';

const Drawer=createDrawerNavigator();

export default class Main_Drawer extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator
                    drawerPosition='right'
                    hideStatusBar={false} // 맨위의 상태바를 숨길것인가? 
                    drawerType='slide'
                    drawerStyle={{
                        backgroundColor:'yellow',
                        width:'40%',

                    }}
                    drawerContentOptions={{
                        activeTintColor:'red',
                        itemStyle:{
                            marginVertical:8
                        }
                    }}
                    openByDefault={true}>
                    <Drawer.Screen 
                        name="screen#1" 
                        component={screen1}
                        options={{
                            drawerLabel:'두번째', 
                            // icon 설정할때 함수에 파라미터로 객체 받을 수 있음 ( 3개 : )
                            drawerIcon:({color,focused,size})=><Image source={require('./icon/bazzi.png')} style={{width:size, height:size}}></Image>
                        }}>
                    </Drawer.Screen>
                    <Drawer.Screen name="screen#2" component={screen2}></Drawer.Screen>
                    <Drawer.Screen 
                        name="screen#3"
                        component={screen3}
                        options={{
                            drawerIcon:({size, color})=><Image source={require('./icon/bazzi.png')} style={{width:size, height:size}}></Image>
                        }}>

                    </Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
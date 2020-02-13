import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image
} from 'react-native'
import { Container, Header, Content, Card, CardItem, Icon, Right, Body, Left, Input, Badge } from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import usericon from '../image/sasuke.jpg'

export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white', height: 40 }}>
                    <View style={{ marginTop: 10, flex: 2, marginHorizontal: 10, borderBottomWidth: 1, borderColor: '#0000FF' }}>
                     
                        <View style={{ position: 'relative', flex: 1, flexDirection: 'row', backgroundColor: '', }}>
                            <View >
                                <Image style={{ height: 80, width: 80, backgroundColor: 'red', borderRadius: 40, left: 10, borderWidth: 2, borderColor: '#43AB4A' }} source={usericon} />
                            </View>
                            <View style={{ flex: 1, left: 30, top: 15 }}>
                                <Text style={{ fontSize: 20, color: 'black' }}>Username</Text>
                                <Text style={{ marginTop: 5, color: 'black' }}>+62 8969 5780 942</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 5, backgroundColor: 'white', marginHorizontal: 10 }}>
                        <Content>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Text>Name</Text>
                                    </Left>
                                    <Body style={{ left: 10, height: 40, borderWidth: 1, borderRadius: 10, marginRight: 35, borderColor: '#ddd' }}>
                                        <Input placeholder='name' />
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Text>Password</Text>
                                    </Left>
                                    <Body style={{ left: 10, height: 40, borderWidth: 1, borderRadius: 10, marginRight: 35, borderColor: '#ddd' }}>
                                        <Input type = 'password' placeholder='password' />
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Text>Address</Text>
                                    </Left>
                                    <Body style={{ left: 10, height: 40, borderWidth: 1, borderRadius: 10, marginRight: 35, borderColor: '#ddd' }}>
                                        <Input  placeholder='Address' />
                                    </Body>
                                </CardItem>
                            </Card>
                            {/* <TouchableOpacity>
                                <CardItem style={{ backgroundColor: '#0000FF', elevation: 10, marginTop: 20, height: 40, borderRadius: 50, marginHorizontal: 100, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>Save</Text>
                                </CardItem>
                            </TouchableOpacity> */}
                        </Content>
                    </View>

                </View>

            </View>
        )
    }
}
import React, { Component } from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import Style from '../styles/Style'

export default class DoctorCard extends Component {
    render() {
        return (
            <SafeAreaView style={Style.container}>
                <Image source={{ uri: this.props.navigation.getParam('thumbnailUrl', 'https://i.ytimg.com/vi/L1tx-wAI6Nw/maxresdefault.jpg') }} style={Style.photoList} />
                <View style={Style.detailsPhoto}>
                    <Text style={Style.photoId}>{this.props.navigation.getParam('id', 'Error: id not found')}</Text>
                    <Text style={Style.photoTitle}>{this.props.navigation.getParam('title', 'Error: title not found')}</Text>
                </View>
            </SafeAreaView>
        );
    }
}
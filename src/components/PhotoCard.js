import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
import Style from '../styles/Style'
import { withNavigation } from 'react-navigation';

class PhotoCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('PhotoDetails',
                    {
                        thumbnailUrl: this.props.thumbnailUrl,
                        id: this.props.id,
                        title: this.props.title,
                    })
            }}>
                <Image source={{ uri: this.props.url }} style={Style.photoList} />
            </TouchableOpacity>
        );
    }
}

export default withNavigation(PhotoCard);
import {
    StyleSheet,
    Dimensions
} from 'react-native'

const screenWidth = Dimensions.get('window').width

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    photoList: {
        width: screenWidth/2 - 20,
        height: screenWidth/2 - 20,
        margin: 10,
        alignSelf: 'center',
    },
    detailsPhoto: {
        margin: 20,
    },
    photoId: {
        fontSize: 40,
        textAlign: 'center',
    },
    photoTitle: {
        textAlign: 'center',
    }
});

export default Style
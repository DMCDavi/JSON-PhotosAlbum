import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import PhotoCard from '../components/PhotoCard'
import PhotoDetails from '../screens/PhotoDetails'
import List from '../screens/List'

const RouteConfigs = {
    List: {
        screen: List,
        navigationOptions: {
            headerBackTitleVisible: false,
            headerShown: false
        }
    },
    PhotoCard: {
        screen: PhotoCard,
        navigationOptions: {
            headerBackTitleVisible: false,
            headerShown: false
        }
    },
    PhotoDetails: {
        screen: PhotoDetails,
        navigationOptions: {
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0,
                borderBottomWidth: 0,
            },
        }
    },

}

const TabNavigatorConfig = {}

const AppStackNavigator = createAppContainer(
    createStackNavigator(RouteConfigs, TabNavigatorConfig)
)

export default AppStackNavigator
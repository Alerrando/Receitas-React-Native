import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/home'
import { Detail } from '../pages/detail'
import { Search } from '../pages/search'

const Stack = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='Search' component={Search} />
        </Stack.Navigator>
    )
}
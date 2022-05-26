import { StatusBar } from 'expo-status-bar'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native'
import { useFonts } from 'expo-font'

import { Home, Details } from './screens'

const Stack = createStackNavigator()
const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
}

const App = () => {
  const loadedFonts = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  })

  if ( ! loadedFonts)
    return null

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
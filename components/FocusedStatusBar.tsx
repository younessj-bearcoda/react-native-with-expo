import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { StatusBarProps } from 'expo-status-bar'


const FocusedStatusBar = (props: StatusBarProps)  => {
    const isFocused = useIsFocused()
    
    return isFocused 
        ? <StatusBar animated={true} {...props}/> 
        : null
}

export default FocusedStatusBar
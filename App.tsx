import { StatusBar, Text, View } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { theme } from './src/theme'

import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>As fontes foram carregadas</Text>
        </View>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  )
}

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, messaging } from './firebaseConfig'
import * as Notifications from 'expo-notifications'
import { getToken } from 'firebase/messaging'
export default function App() {

  const handlePushNotification = async () => {
    const { status } = await Notifications.requestPermissionsAsync()
    if (status === 'granted') {
      const token = await getToken(messaging, {
        vapidKey:
          '{vapidKey}',
      })
      console.log('token', token)
    } else {
      alert('Notification permissions must be granted.')
      return
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={handlePushNotification} title="Notification" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

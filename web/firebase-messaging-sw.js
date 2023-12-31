importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')
import { messaging } from '../firebaseConfig'

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions) // getting 2 times notification issue
})

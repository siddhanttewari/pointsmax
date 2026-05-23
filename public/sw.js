self.addEventListener('push', function(event) {
  const data = event.data?.json() || {}
  const options = {
    body: data.body || 'New update from PointsMax',
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    vibrate: [100, 50, 100],
    data: { url: data.url || 'https://www.pointsmax.in' },
    actions: [
      { action: 'open', title: 'View now' },
      { action: 'dismiss', title: 'Dismiss' }
    ]
  }
  event.waitUntil(
    self.registration.showNotification(data.title || 'PointsMax', options)
  )
})

self.addEventListener('notificationclick', function(event) {
  event.notification.close()
  if (event.action === 'dismiss') return
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || 'https://www.pointsmax.in')
  )
})

importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');

const config = {
	messagingSenderId: "883972514475"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
	const title = payload.title;
	const options = {
		body: payload.body,
		icon: payload.icon
	};

	self.registration.showNotification(title, options);
});
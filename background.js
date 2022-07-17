// // background.js
// console.log('background loaded!')

// chrome.runtime.onInstalled.addListener(function(details) {
//     chrome.storage.sync.set({reset_timer: true});
//     console.log('reset_timer stored as true')
// });


chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {
	// console.log('(background.js) message recieved: '+request.message);
    if( request.message === "reload" ) {
		var opt = {
			iconUrl: "images/refresh-icon16.png",
			type: 'list',
			title: 'Primary Title',
			message: 'Primary message to display',
			priority: 1,
			items: [{ title: 'Item1', message: 'This is item 1.'}]
		};
		chrome.notifications.create(`my-notification-${Date.now()}`, opt, function() { console.log('created!'); });

    }
});

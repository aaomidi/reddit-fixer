chrome.webRequest.onBeforeRequest.addListener((event) => {
	const url = new URL(event.url)
	url.hostname = 'old.reddit.com'
	return {redirectUrl: url.href}
}, {
	urls: ['*://reddit.com/*', '*://www.reddit.com/*'],
	types: ['main_frame', 'sub_frame']
}, ['blocking']);
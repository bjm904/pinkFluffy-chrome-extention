chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request=="get"){
		chrome.storage.sync.get("enabled", function(items){
			sendResponse({enabled: items.enabled});
		});
	} else{
		chrome.storage.sync.set({'enabled': request.val});
		chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs){
			chrome.tabs.reload(arrayOfTabs[0].id);
		});
	}
	return true;
});
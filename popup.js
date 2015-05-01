document.addEventListener('DOMContentLoaded', function (){
	var ele=document.getElementById('cont');
	chrome.runtime.sendMessage("get", function(response){
		ele.checked=response.enabled;
		ele.onchange=function(){
			chrome.runtime.sendMessage({val:ele.checked});
		};
	});
});
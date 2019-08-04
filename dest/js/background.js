var GBFWindowObjectId;
var ToolsWindowObjectReference;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var response = {"status":true};
  switch (request.method){
    case "gbfOpen":
      if(GBFWindowObjectId == null){
        chrome.windows.create({url:request.url,type:"popup"},
            (_window)=>{
              GBFWindowObjectId  = _window.id;
              console.log(GBFWindowObjectId);
            });
        chrome.windows.onRemoved.addListener((GBFWindowObjectId)=>{
          GBFWindowObjectId=null;
        });
      }else{
        chrome.windows.get(GBFWindowObjectId,{populate:true},(_window)=>{
          //console.log(_window);
          if (request.url !== _window.tabs[0].url){
            chrome.tabs.update(_window.tabs[0].id,{url:request.url});
          }else{
            chrome.windows.update(GBFWindowObjectId,{focused:true});
          }
        });
      }
      break;
    case "toolsOpen":
      if(ToolsWindowObjectReference == null || ToolsWindowObjectReference.closed){
        ToolsWindowObjectReference = window.open("dest/tools.html","つーる","status=yes");
      }else{
        ToolsWindowObjectReference.focus();
      } 
      break;
  };
  sendResponse(response);
});


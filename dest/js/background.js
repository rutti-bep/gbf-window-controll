var GBFWindowObjectId;
var GBFWindowUrl = "http://game.granbluefantasy.jp/#top";
var ToolsWindowId;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var response = {"status":true};
  switch (request.method){
    case "gbfOpen":
      GBFOpen();
      break;
    case "toolsOpen":
      ToolsOpen();
      break;
    case "GBFWindowURLSet":
      GBFWindowUrl = request.url;
      GBFOpen();
      break;
  };
  sendResponse(response);
});

function GBFWindowObjectReset(){
  GBFWindowObjectId=null;
      console.log("removed!");
}

function GBFOpen(){
  if(GBFWindowObjectId == null){
    chrome.windows.create({url:GBFWindowUrl,type:"popup"},
        (_window)=>{
          GBFWindowObjectId  = _window.id;
        });
    chrome.windows.onRemoved.addListener((GBFWindowObjectId)=>{
      GBFWindowObjectReset();
    });
  }else{
    chrome.windows.get(GBFWindowObjectId,{populate:true},(_window)=>{
      console.log(_window);
      if (GBFWindowUrl !== _window.tabs[0].url){
        console.log(_window.tabs[0].url)
          chrome.tabs.update(_window.tabs[0].id,{url:GBFWindowUrl});
      }else{
        chrome.windows.update(GBFWindowObjectId,{focused:true});
      }
    });
  }
}

function ToolsOpen(){
  if(ToolsWindowId == null){
    chrome.windows.create({url:"dest/html/tools.html",type:"popup",width:300,height:300},
        (_window)=>{
          ToolsWindowId = _window.id;
        });
    chrome.windows.onRemoved.addListener((ToolsWindowId)=>{
      ToolsWindowId  = null;
    });
  }else{
    chrome.windows.update(ToolsWindowId,{focused:true});
  }
}

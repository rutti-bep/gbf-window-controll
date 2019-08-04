$(function() {
  var gbfPopupButton = $("#gbf-popup-button");
  var toolsPopupButton = $("#tools-popup-button");

  gbfPopupButton.click(()=>{
    chrome.runtime.sendMessage({"method":"gbfOpen","url":"https://twitter.com/home"}); 
  });

  toolsPopupButton.click(()=>{
    chrome.runtime.sendMessage({"method":"toolsOpen"}); 
  });

})

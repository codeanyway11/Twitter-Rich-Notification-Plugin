var options = {
  type: "basic",
  title:"My First Popup With Chrome",
  message: "This is pretty cool!",
  iconUrl:"icon.png"

};

chrome.notifications.create(options, callback);
chrome.notifications.onClicked.addListener(replyBtnClick);

function replyBtnClick {
  alert("Hello!!");
}

function callback(){
  console.log("Popup doneee!!");
}

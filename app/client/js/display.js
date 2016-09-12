
var io = require('socket.io-client');
var socket = io.connect();
var data;
var onConnect = false;

function setContent(content) {
  var iframe = $("#displayout")
  iframe.attr('src',content);
  showContent();
}

/**parses video url**/
function parseVideo(url) {
  console.log(url);
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  var vimeoRegex = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
  var parsed = url.match(vimeoRegex);
  if (match && match[2].length == 11) {
    //parsed youtube link
    return "https://www.youtube.com/embed/"+match[2]+"?autoplay=1";
  } else if(parsed){
    //parsed vimeo link
    return "//player.vimeo.com/video/" + parsed[1]+"?autoplay=1";
  }
  else{
    return url;
  }
}

var urllink = 'http://www.media.mit.edu'


function showContent() {
  $('#landing').hide();
  $('#displayout').show();
}

function showLanding() {
  $('#displayout').hide();
  $('#landing').show();

}
$(document).ready(function(){
  //setContent(urllink);
  showLanding();

  //setContent('display_init.html');
  //console.log('done');
})

socket.on('newContent', function(data) {
  console.log(data.msg);
  if (data.msg == "defaultDisplay"){
    showLanding();

  }else{
    console.log('New content received '+data.msg);
    setContent(parseVideo(data.msg));
    showContent();
  }

})
socket.on

if(!onConnect){
  socket.on('onConnect', function(data){
    console.log('First connection!')
    onConnect = true;
    setContent(data.msg);


  })
}


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/AIzaSyC-neMd6DLWoYPSyOZuQqS_VBiCwXGhPp4";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



var player;
function onYouTubePlayerAPIReady() {
   q = '';
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    channelId: channelId,
    maxResults: 1,
    eventType: 'live',
    type: 'video',
    order: 'date'
  });
}


// var player;
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('ytplayer', {
//     height: '360',
//     width: '640',
//     videoId: 'M7lc1UVf-VE'
//   });
// }
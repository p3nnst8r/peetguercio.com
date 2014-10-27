google.setOnLoadCallback(getMyFeed);
var myService;
var feedUrl = "https://www.google.com/calendar/feeds/g27.net_9ht2e4uhfh602mnen6psa6mun0%40group.calendar.google.com/public/full?futureevents=true"; // singleevents=true
function setupMyService() {
  myService = new google.gdata.calendar.CalendarService('gdata-js-client-samples-simple');
}

function getMyFeed() {
  setupMyService();
  var query = new google.gdata.calendar.CalendarEventQuery(feedUrl);
  //query.setSingleEvents(true);
  myService.getEventsFeed(query, handleMyFeed, handleError);
}

function handleMyFeed(result) {
  // get all calendar entries
  var entries = result.feed.entry.slice(0,10);
  for (var i = 0; i < entries.length; i++) {
      // format with date and title
      var entry = entries[i];
      var date = new Date(entry.getTimes()[0].startTime);
      var title = entry.getTitle().getText();
      var formatted = (date.getMonth()+1) + '/' + date.getDate() + ' - ' + title;
      //console.log(date);
      //console.log(formatted);
      //console.log('---');

      // add to UI.
      $('#shows').append('<h4>' + formatted + '</h4>')
    }
  }

function handleError(err) {
  console.log('calendar error: ', err);
}
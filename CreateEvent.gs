function createEvent(calendarId, minutesId, startTag, endTag) {
  // get only program update text
  var body = DocumentApp.openById(minutesId).getText();
  var events = body.slice(body.indexOf(startTag) + 15, body.lastIndexOf(endTag));
  // convert to array
  var array = events.split("\n");
  var eventAlreadyLogged = false;
  // loop to go through entire array
  for (var i = 0; i < array.length - 2; i++) {
    // checks if line is title of event
    if (array[i].includes("—") && array[i + 2].includes("Time:") && !array[i].includes("TBD")) {
      // gets information on event
      var nameOfEvent = array[i].substring(0, array[i].indexOf("—")).trim();
      Logger.log(nameOfEvent);
      var dateOfEvent = array[i].slice(array[i].indexOf("—") + 1, array[i].lastIndexOf("—")).trim();
      var beginDate = dateOfEvent
      var endDate = dateOfEvent
      // checks if is multi-day event
      if (dateOfEvent.includes("-")) {
        beginDate = dateOfEvent.slice(0, dateOfEvent.indexOf("-")).trim();
        endDate = dateOfEvent.slice(dateOfEvent.indexOf("-"), dateOfEvent.length).trim();
      }
      Logger.log(beginDate);
      Logger.log(endDate);
      var dateMatch = new Date(beginDate);
      Logger.log(dateMatch);
      var eventsOnDay = CalendarApp.getCalendarById(calendarId).getEventsForDay(dateMatch);
      // checks if event already exists
      for (var j = 0; j < eventsOnDay.length; j++) {
        var eventTitle = eventsOnDay[j].getTitle();
        if (eventTitle.includes(nameOfEvent)) {
          eventAlreadyLogged = true;
        }
      }
      // creates event if doesn't exist
      if (eventAlreadyLogged == false) {
        if (array[i + 2].includes("N/A")) {
          CalendarApp.getCalendarById(calendarId).createEvent(nameOfEvent, new Date(beginDate), new Date(endDate), {description: "test"});
          Logger.log("Event created N/A");
        }
        else {
          var locationIndex = i + 1;
          var timeIndex = i + 2; 
          var locationOfEvent = array[locationIndex].substring(array[locationIndex].lastIndexOf(":") + 2, array[locationIndex].length).trim();
          var startTime = array[timeIndex].slice(array[timeIndex].indexOf(":") + 2, array[timeIndex].lastIndexOf("-")).trim();
          var endTime = array[timeIndex].slice(array[timeIndex].indexOf("-") + 2, array[timeIndex].lastIndexOf("M") + 1).trim();
          CalendarApp.getCalendarById(calendarId).createEvent(nameOfEvent, new Date(beginDate + " " + startTime), new Date (endDate + " " + endTime), {location: locationOfEvent, description: "test"});
          Logger.log("Event created");
        }
      }
      eventAlreadyLogged = false;
    }
  }
}

# Calendar-Creation
Run via Google Apps Script. Requires access to Google Docs, Sheets, and Calendar

## sheet-id
Replace sheet-Id with sheet to take Google Doc id's from. Should be formatted like below:
| Event | Link |
| Test Event 1 | https://docs.google.com/document/d/doc-id-1/edit | 
| Test Event 2 | https://docs.google.com/document/d/doc-id-2/edit | 
| Test Event 3 | https://docs.google.com/document/d/doc-id-3/edit | 

Should work as long as the link is in the bottom most right of the sheet.

## calendar-id
Replace calendar-Id with the calendar that needs to be modified. Should end with @group.calendar.google.com or your Google account.

## start-line & end-line
Replace with what you want the program to parse through. Don't want to run loops through an entire document.

## Formatting
To ensure that program doesn't complain, format as like the examples below (Note how some dashes are different):

### Single Day Event w/ Date & Times
Toronto Zoo — July 2, 2022 — Company
Location: 2000 Meadowvale Rd, Toronto, ON M1B 5K7
Time: 10:00 AM - 6:00 PM
Details...

### Single Day Event w/ Date w/o Times
Toronto Zoo — July 2, 2022 — Company
Location: 2000 Meadowvale Rd, Toronto, ON M1B 5K7
Time: N/A
Details...

### Single Day Event w/o Date & Time
Toronto Zoo — July 2, 2022 — Company
Location: N/A
Time: N/A
Details...

### Multi Day Event w/ Date & Times
Toronto Zoo — July 2, 2022 - July 5, 2022 — Company
Location: 2000 Meadowvale Rd, Toronto, ON M1B 5K7
Time: 10:00 AM - 6:00 PM
Details...

### Multi Day Event w/ Date w/o Times
Toronto Zoo — July 2, 2022 - July 5, 2022 — Company
Location: 2000 Meadowvale Rd, Toronto, ON M1B 5K7
Time: N/A
Details...

### Multi Day Event w/o Date & Time
Toronto Zoo — July 2, 2022 - July 5, 2022 — Company
Location: N/A
Time: N/A
Details...

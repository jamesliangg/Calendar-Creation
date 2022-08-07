function getMinutes(sheetId) {
  var spreadsheet = SpreadsheetApp.openById(sheetId);
  var sheet = spreadsheet.getSheets()[0];
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  var lastCell = sheet.getRange(lastRow, lastColumn);
  Logger.log(lastCell.getValue());
  var minutesId = lastCell.getValue().slice(lastCell.getValue().indexOf("/d/") + 3, lastCell.getValue().indexOf("/edit"))
  return minutesId;
}

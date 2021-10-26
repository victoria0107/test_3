function exportTableToExcel(tableID, filname = '') {
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

  // specify file name
  filname = filname ? (filname = '.xls') : 'excel_data.xls';

  // Create downloan link element
  downloadLink = document.createElement('a');

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(['\ufeff', tableHTML], {
      type: dataType,
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = 'data:' + dataType + ',' + tableHTML;

    // Setting the file name
    downloadLink.download = filname;

    // Triggering the function
    downloadLink.click();
  }
}

// Google Apps Script for storing quote requests in Google Sheets
// Instructions:
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Replace the default code with this code
// 4. Deploy as a web app:
//    - Click "Deploy" > "New deployment"
//    - Click "Select type" > "Web app"
//    - Set "Execute as" to "Me"
//    - Set "Who has access" to "Anyone, even anonymous"
//    - Click "Deploy"
// 5. Authorize the app when prompted
// 6. Copy the web app URL and replace GOOGLE_SHEETS_API_URL in emailService.ts

function doPost(e) {
  try {
    // Log incoming request
    console.log('Received POST request');
    console.log('Request parameter:', e);
    
    let data;
    
    // Try to get data from different possible sources
    if (e && e.postData && e.postData.contents) {
      // Regular POST with JSON body
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      // Form submission or URL parameters
      data = e.parameter;
    } else if (typeof e === 'string') {
      // Direct string data
      data = JSON.parse(e);
    } else {
      throw new Error('Invalid request format');
    }
    
    // Log the parsed data
    console.log('Parsed data:', data);
    
    // Validate required fields
    if (!data.firstName || !data.email || !data.service) {
      throw new Error('Missing required fields');
    }
    
    // Get the active spreadsheet
    const spreadsheetId = '1HphuWmKnH2kOafstMi00uQxknx3Unt_yGvBcu9Rd36g';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheets()[0]; // Get first sheet
    
    // Log spreadsheet info
    console.log('Spreadsheet name:', spreadsheet.getName());
    console.log('Sheet name:', sheet.getName());
    
    // Prepare the data for the spreadsheet
    const rowData = [
      new Date(), // Timestamp
      data.fullName || `${data.firstName} ${data.lastName || ''}`,
      data.email,
      data.phone || '',
      data.company || 'Not specified',
      data.service,
      data.message || '',
      data.date || new Date().toLocaleDateString('en-IN'),
      data.time || new Date().toLocaleTimeString('en-IN'),
      data.timestamp || new Date().toISOString()
    ];
    
    // Log the data being written
    console.log('Writing row data:', rowData);
    
    // Append the data to the spreadsheet
    sheet.appendRow(rowData);
    
    // Create the response
    const response = {
      success: true,
      message: 'Data stored successfully',
      timestamp: new Date().toISOString(),
      sheetName: sheet.getName(),
      rowCount: sheet.getLastRow(),
      data: rowData
    };
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error:', error.toString());
    console.error('Stack:', error.stack);
    
    // Create error response
    const response = {
      success: false,
      error: error.toString(),
      errorDetails: error.stack,
      timestamp: new Date().toISOString()
    };
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    // Get the spreadsheet info
    const spreadsheetId = '1HphuWmKnH2kOafstMi00uQxknx3Unt_yGvBcu9Rd36g';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheets()[0];
    
    // Create response
    const response = {
      success: true,
      message: 'Quote submission service is running',
      timestamp: new Date().toISOString(),
      spreadsheetId: spreadsheetId,
      spreadsheetName: spreadsheet.getName(),
      sheetName: sheet.getName(),
      rowCount: sheet.getLastRow(),
      url: spreadsheet.getUrl()
    };
    
    // Return response
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to set up the spreadsheet headers (run this once manually)
function setupSpreadsheet() {
  try {
    console.log('Starting spreadsheet setup...');
    
    const spreadsheetId = '1HphuWmKnH2kOafstMi00uQxknx3Unt_yGvBcu9Rd36g';
    console.log('Opening spreadsheet with ID:', spreadsheetId);
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    console.log('Spreadsheet name:', spreadsheet.getName());
    
    // Get the first sheet
    const sheet = spreadsheet.getSheets()[0];
    console.log('Sheet name:', sheet.getName());
    
    // Set up headers
    const headers = [
      'Timestamp',
      'Full Name',
      'Email',
      'Phone',
      'Company',
      'Service',
      'Message',
      'Date',
      'Time',
      'ISO Timestamp'
    ];
    
    console.log('Setting up headers:', headers);
    
    // Clear existing data
    sheet.clear();
    console.log('Sheet cleared');
    
    // Set headers in the first row
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    console.log('Headers set in first row');
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#4285f4')
               .setFontColor('white')
               .setFontWeight('bold')
               .setHorizontalAlignment('center');
    console.log('Header formatting applied');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
    console.log('Columns auto-resized');
    
    // Freeze the header row
    sheet.setFrozenRows(1);
    console.log('Header row frozen');
    
    // Add filters
    sheet.getRange(1, 1, 1, headers.length).createFilter();
    console.log('Filters added');
    
    // Add timestamp trigger for column A
    const timestampRule = sheet.getRange("A2:A").setNumberFormat('dd/MM/yyyy HH:mm:ss');
    console.log('Timestamp formatting set');
    
    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 150); // Full Name
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 150); // Phone
    sheet.setColumnWidth(5, 150); // Company
    sheet.setColumnWidth(6, 150); // Service
    sheet.setColumnWidth(7, 300); // Message
    sheet.setColumnWidth(8, 100); // Date
    sheet.setColumnWidth(9, 100); // Time
    sheet.setColumnWidth(10, 150); // ISO Timestamp
    console.log('Column widths set');
    
    // Add a test row
    const testData = [
      new Date(), // Timestamp
      'Test User',
      'test@example.com',
      '+91 1234567890',
      'Test Company',
      'Test Service',
      'This is a test row to verify the spreadsheet setup',
      new Date().toLocaleDateString('en-IN'),
      new Date().toLocaleTimeString('en-IN'),
      new Date().toISOString()
    ];
    
    sheet.getRange(2, 1, 1, testData.length).setValues([testData]);
    console.log('Test row added');
    
    console.log('Spreadsheet setup completed successfully!');
    
    return {
      success: true,
      message: 'Spreadsheet setup completed successfully',
      spreadsheetId: spreadsheetId,
      sheetName: sheet.getName(),
      headers: headers,
      url: spreadsheet.getUrl()
    };
    
  } catch (error) {
    console.error('Error in setupSpreadsheet:', error);
    return {
      success: false,
      error: error.toString(),
      spreadsheetId: spreadsheetId
    };
  }
} 
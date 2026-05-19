// ===================================================
// Google Apps Script - Contact Form to Google Sheets
// ===================================================
//
// SETUP INSTRUCTIONS:
//
// 1. Create a new Google Sheet
//    - Go to https://sheets.google.com and create a new spreadsheet
//    - Name it "Lost Coast Contact Form" (or anything you like)
//    - In Row 1, add these headers (exactly):
//      A1: Timestamp | B1: Email | C1: Name | D1: Phone | E1: Company | F1: Source | G1: Updates
//
// 2. Open Apps Script
//    - In Google Sheets, go to Extensions > Apps Script
//    - Delete any existing code in the editor
//    - Paste ALL the code below into the editor
//    - Save the project (Ctrl+S / Cmd+S)
//
// 3. Deploy as Web App
//    - Click "Deploy" > "New deployment"
//    - Click the gear icon next to "Select type" > choose "Web app"
//    - Description: "Contact Form Handler"
//    - Execute as: "Me"
//    - Who has access: "Anyone"
//    - Click "Deploy"
//    - Authorize the app when prompted (click through the "unsafe" warning)
//    - Copy the Web App URL
//
// 4. Add the URL to your .env.local file
//    - Open .env.local in your project
//    - Replace the placeholder with your actual URL:
//      NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec
//
// 5. Restart your dev server (npm run dev)
//
// ===================================================
// IMPORTANT: If you update this script, you must create
// a NEW deployment (Deploy > New deployment) for changes
// to take effect. Editing the existing deployment won't work.
// ===================================================

// The name of the sheet tab (default is "Sheet1")
const SHEET_NAME = "Sheet1";

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

        // Read form-encoded parameters (sent as URLSearchParams from the website)
        const timestamp = e.parameter.timestamp || new Date().toISOString();
        const email = e.parameter.email || "";
        const name = e.parameter.name || "";
        const phone = e.parameter.phone || "";
        const company = e.parameter.company || "";
        const source = e.parameter.source || "";
        const updates = e.parameter.updates || "";

        // Append a new row with the form data
        sheet.appendRow([
            timestamp,   // Column A: Timestamp
            email,       // Column B: Email
            name,        // Column C: Name
            phone,       // Column D: Phone
            company,     // Column E: Company
            source,      // Column F: Source (How did you hear about us)
            updates,     // Column G: Updates preference
        ]);

        // Return success response
        return ContentService
            .createTextOutput(JSON.stringify({ result: "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return error response
        return ContentService
            .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Handle GET requests (for testing)
function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", message: "Contact form API is running" }))
        .setMimeType(ContentService.MimeType.JSON);
}

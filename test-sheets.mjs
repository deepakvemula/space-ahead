// Test script to verify Google Sheets integration
// Run with: node test-sheets.mjs

const SHEET_ID = "11Beqmcp0nY7L0PANlJ4iDzrXePPgk5yH03AlEHNFAs8";
const SHEET_TAB = "Listings";

async function testSheetConnection() {
  console.log("🔍 Testing Google Sheets connection...\n");
  console.log(`📋 Sheet ID: ${SHEET_ID}`);
  console.log(`📑 Tab Name: ${SHEET_TAB}\n`);

  try {
    const url = `https://opensheet.elk.sh/${SHEET_ID}/${SHEET_TAB}`;
    console.log(`📡 Fetching from: ${url}\n`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("✅ Success! Sheet data retrieved.\n");
    console.log(`📊 Total listings found: ${data.length}\n`);

    if (data.length > 0) {
      console.log("📝 First listing preview:");
      console.log("─".repeat(50));
      const first = data[0];
      console.log(`  Project: ${first.Project_Name || "N/A"}`);
      console.log(`  Location: ${first.Location_Area || "N/A"}`);
      console.log(`  Slug: ${first.Page_Slug || "N/A"}`);
      console.log(`  Status: ${first.Project_Status || "N/A"}`);
      console.log(
        `  Price Range: ₹${first.Base_Price_Min_Lakhs}L - ₹${first.Base_Price_Max_Lakhs}L`,
      );
      console.log("─".repeat(50));

      console.log("\n📋 Available columns:");
      Object.keys(first).forEach((key) => {
        console.log(`  - ${key}`);
      });
    }

    console.log(
      "\n✨ Integration test passed! Your Google Sheets CMS is working.\n",
    );
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("\n🔧 Troubleshooting tips:");
    console.error("  1. Make sure the Google Sheet is publicly accessible");
    console.error("  2. Verify the Sheet ID is correct");
    console.error(
      "  3. Check that the tab name matches exactly (case-sensitive)",
    );
    console.error("  4. Ensure you have an internet connection\n");
  }
}

testSheetConnection();

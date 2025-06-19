import React, { useState } from 'react';
import { testGoogleSheetsIntegration } from '../utils/emailService';

const DataCheck: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTest = async () => {
    setIsLoading(true);
    setTestResult('Testing Google Sheets connection...');
    
    try {
      const result = await testGoogleSheetsIntegration();
      if (result) {
        setTestResult('✅ Google Sheets connection successful! Check your spreadsheet for a test row.');
      } else {
        setTestResult('❌ Google Sheets connection failed. Check console for details.');
      }
    } catch (error) {
      setTestResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      console.error('Test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Google Sheets Connection Test</h2>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          Click the button below to test the connection to Google Sheets.
          This will attempt to write a test row to your spreadsheet.
        </p>
        
        <button
          onClick={handleTest}
          disabled={isLoading}
          className={`px-4 py-2 rounded-md text-white font-medium ${
            isLoading 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Testing...
            </span>
          ) : (
            'Test Connection'
          )}
        </button>
      </div>

      {testResult && (
        <div className={`p-3 rounded-md ${
          testResult.includes('✅') 
            ? 'bg-green-50 text-green-800' 
            : 'bg-red-50 text-red-800'
        }`}>
          {testResult}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        <p>Spreadsheet URL:</p>
        <a 
          href="https://docs.google.com/spreadsheets/d/1HphuWmKnH2kOafstMi00uQxknx3Unt_yGvBcu9Rd36g/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline break-all"
        >
          https://docs.google.com/spreadsheets/d/1HphuWmKnH2kOafstMi00uQxknx3Unt_yGvBcu9Rd36g/edit
        </a>
      </div>
    </div>
  );
};

export default DataCheck; 
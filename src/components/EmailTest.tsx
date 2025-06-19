import React, { useState } from 'react';
import { Mail, CheckCircle, XCircle, Loader, Database } from 'lucide-react';
import { testEmailJSConfig, testGoogleSheetsIntegration } from '../utils/emailService';

const EmailTest: React.FC = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState({
    emailjs: null as boolean | null,
    googleSheets: null as boolean | null
  });

  const handleTestEmailJS = async () => {
    setIsTesting(true);
    setTestResults(prev => ({ ...prev, emailjs: null }));
    
    try {
      const result = await testEmailJSConfig();
      setTestResults(prev => ({ ...prev, emailjs: result }));
    } catch (error) {
      console.error('EmailJS test failed:', error);
      setTestResults(prev => ({ ...prev, emailjs: false }));
    } finally {
      setIsTesting(false);
    }
  };

  const handleTestGoogleSheets = async () => {
    setIsTesting(true);
    setTestResults(prev => ({ ...prev, googleSheets: null }));
    
    try {
      const result = await testGoogleSheetsIntegration();
      setTestResults(prev => ({ ...prev, googleSheets: result }));
    } catch (error) {
      console.error('Google Sheets test failed:', error);
      setTestResults(prev => ({ ...prev, googleSheets: false }));
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-center space-x-3 mb-3">
          <Mail className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">System Test</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          Test your EmailJS and Google Sheets configuration.
        </p>
        
        <div className="space-y-3">
          {/* EmailJS Test */}
          <button
            onClick={handleTestEmailJS}
            disabled={isTesting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            {isTesting && testResults.emailjs === null ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                <span>Testing EmailJS...</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                <span>Test EmailJS</span>
              </>
            )}
          </button>

          {/* Google Sheets Test */}
          <button
            onClick={handleTestGoogleSheets}
            disabled={isTesting}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            {isTesting && testResults.googleSheets === null ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                <span>Testing Sheets...</span>
              </>
            ) : (
              <>
                <Database className="h-4 w-4" />
                <span>Test Google Sheets</span>
              </>
            )}
          </button>
        </div>
        
        {/* Test Results */}
        {testResults.emailjs !== null && (
          <div className={`mt-3 p-3 rounded-lg flex items-center space-x-2 ${
            testResults.emailjs ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            {testResults.emailjs ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-800 text-sm">EmailJS is working!</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="text-red-800 text-sm">EmailJS test failed. Check console.</span>
              </>
            )}
          </div>
        )}

        {testResults.googleSheets !== null && (
          <div className={`mt-3 p-3 rounded-lg flex items-center space-x-2 ${
            testResults.googleSheets ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            {testResults.googleSheets ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-800 text-sm">Google Sheets is working!</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="text-red-800 text-sm">Google Sheets test failed. Check console.</span>
              </>
            )}
          </div>
        )}
        
        <div className="mt-3 text-xs text-gray-500">
          <p>EmailJS: service_gb5llk6</p>
          <p>Sheets: AKfycbyq9MZIPcqeneH252dk1Ba7Cd0XlI61qDu9HSVcHNVOLyCF3AuHipkT8lB4KOA3QV_kTA</p>
        </div>
      </div>
    </div>
  );
};

export default EmailTest; 
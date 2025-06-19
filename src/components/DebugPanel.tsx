import React, { useState } from 'react';
import { Bug, CheckCircle, XCircle, AlertCircle, Mail, Database } from 'lucide-react';
import { testEmailJSConfig, testGoogleSheetsIntegration } from '../utils/emailService';

const DebugPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testResults, setTestResults] = useState({
    emailjs: null as boolean | null,
    googleSheets: null as boolean | null
  });
  const [isTesting, setIsTesting] = useState(false);

  const runAllTests = async () => {
    setIsTesting(true);
    setTestResults({ emailjs: null, googleSheets: null });

    // Test Google Sheets
    try {
      const sheetsResult = await testGoogleSheetsIntegration();
      setTestResults(prev => ({ ...prev, googleSheets: sheetsResult }));
    } catch (error) {
      setTestResults(prev => ({ ...prev, googleSheets: false }));
    }

    // Test EmailJS
    try {
      const emailResult = await testEmailJSConfig();
      setTestResults(prev => ({ ...prev, emailjs: emailResult }));
    } catch (error) {
      setTestResults(prev => ({ ...prev, emailjs: false }));
    }

    setIsTesting(false);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
        title="Debug Panel"
      >
        <Bug className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Bug className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Debug Panel</h2>
                  <p className="text-red-100">Diagnose and fix configuration issues</p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-colors duration-300"
              >
                <XCircle className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-6">
              {/* Current Configuration */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Configuration</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">EmailJS Service ID:</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">service_gb5llk6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">EmailJS User ID:</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">zV2Q0vc88vlx-M7pi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Google Sheets URL:</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">AKfycbyq9MZIPcqeneH252dk1Ba7Cd0XlI61qDu9HSVcHNVOLyCF3AuHipkT8lB4KOA3QV_kTA</span>
                  </div>
                </div>
              </div>

              {/* Test Results */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Test Results</h3>
                  <button
                    onClick={runAllTests}
                    disabled={isTesting}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                  >
                    {isTesting ? 'Testing...' : 'Run All Tests'}
                  </button>
                </div>

                {/* Google Sheets Test */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Database className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Google Sheets Integration</span>
                    {testResults.googleSheets === true && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {testResults.googleSheets === false && <XCircle className="h-5 w-5 text-red-500" />}
                    {testResults.googleSheets === null && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                  </div>
                  <p className="text-sm text-gray-600">
                    {testResults.googleSheets === true && '✅ Google Sheets integration is working correctly'}
                    {testResults.googleSheets === false && '❌ Google Sheets integration failed. Check the URL and permissions.'}
                    {testResults.googleSheets === null && '⏳ Click "Run All Tests" to check Google Sheets integration'}
                  </p>
                </div>

                {/* EmailJS Test */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">EmailJS Configuration</span>
                    {testResults.emailjs === true && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {testResults.emailjs === false && <XCircle className="h-5 w-5 text-red-500" />}
                    {testResults.emailjs === null && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                  </div>
                  <p className="text-sm text-gray-600">
                    {testResults.emailjs === true && '✅ EmailJS is configured correctly'}
                    {testResults.emailjs === false && '❌ EmailJS configuration failed. You need to create the "default_template" in EmailJS.'}
                    {testResults.emailjs === null && '⏳ Click "Run All Tests" to check EmailJS configuration'}
                  </p>
                </div>
              </div>

              {/* Common Issues */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Common Issues & Solutions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-yellow-800">EmailJS Template Missing</h4>
                    <p className="text-yellow-700">Create a template named "default_template" in your EmailJS dashboard with:</p>
                    <pre className="bg-yellow-100 p-2 rounded mt-1 text-xs overflow-x-auto">
{`To: {{to_email}}
From: {{from_email}}
Subject: {{subject}}

{{message}}`}
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800">Google Sheets Permission</h4>
                    <p className="text-yellow-700">Make sure your Google Apps Script is deployed as a web app with "Anyone" access.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800">CORS Issues</h4>
                    <p className="text-yellow-700">Check browser console for CORS errors. Ensure Google Apps Script is properly deployed.</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <a
                    href="https://dashboard.emailjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-300"
                  >
                    Open EmailJS Dashboard
                  </a>
                  <a
                    href="https://script.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-300"
                  >
                    Open Google Apps Script
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugPanel; 
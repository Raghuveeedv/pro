import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Settings, Mail, Database } from 'lucide-react';

interface ConfigStatusProps {
  isVisible: boolean;
  onClose: () => void;
}

const ConfigStatus: React.FC<ConfigStatusProps> = ({ isVisible, onClose }) => {
  const [configStatus, setConfigStatus] = useState({
    emailjs: false,
    googleSheets: false,
    companyInfo: false
  });

  useEffect(() => {
    // Check configuration status
    const checkConfig = () => {
      // This would normally check actual configuration values
      // For now, we'll simulate the checks
      const emailjsConfigured = false; // Replace with actual check
      const googleSheetsConfigured = false; // Replace with actual check
      const companyInfoConfigured = false; // Replace with actual check

      setConfigStatus({
        emailjs: emailjsConfigured,
        googleSheets: googleSheetsConfigured,
        companyInfo: companyInfoConfigured
      });
    };

    checkConfig();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full transform transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Configuration Status</h2>
                  <p className="text-blue-100">Check your quote system setup</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-colors duration-300"
              >
                <XCircle className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-6">
              {/* EmailJS Configuration */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">EmailJS Configuration</h3>
                  {configStatus.emailjs ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <p className="text-gray-600 mb-3">
                  Required for sending email notifications to both company and users.
                </p>
                {!configStatus.emailjs && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-yellow-800 font-medium">Setup Required</p>
                        <p className="text-yellow-700 text-sm mt-1">
                          Update <code className="bg-yellow-100 px-1 rounded">EMAILJS_SERVICE_ID</code> and{' '}
                          <code className="bg-yellow-100 px-1 rounded">EMAILJS_USER_ID</code> in{' '}
                          <code className="bg-yellow-100 px-1 rounded">src/utils/emailService.ts</code>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Google Sheets Configuration */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Database className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Google Sheets Integration</h3>
                  {configStatus.googleSheets ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <p className="text-gray-600 mb-3">
                  Required for storing quote requests in a spreadsheet.
                </p>
                {!configStatus.googleSheets && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-yellow-800 font-medium">Setup Required</p>
                        <p className="text-yellow-700 text-sm mt-1">
                          Update <code className="bg-yellow-100 px-1 rounded">GOOGLE_SHEETS_API_URL</code> in{' '}
                          <code className="bg-yellow-100 px-1 rounded">src/utils/emailService.ts</code>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Information */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Settings className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
                  {configStatus.companyInfo ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <p className="text-gray-600 mb-3">
                  Update company details in email templates.
                </p>
                {!configStatus.companyInfo && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-yellow-800 font-medium">Setup Required</p>
                        <p className="text-yellow-700 text-sm mt-1">
                          Update company email, phone, and address in{' '}
                          <code className="bg-yellow-100 px-1 rounded">src/utils/emailService.ts</code>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Setup Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-blue-900 font-semibold mb-2">Quick Setup Guide</h4>
                <ol className="text-blue-800 text-sm space-y-1">
                  <li>1. Follow the <code className="bg-blue-100 px-1 rounded">SETUP_GUIDE.md</code> for detailed instructions</li>
                  <li>2. Set up EmailJS account and get your credentials</li>
                  <li>3. Deploy the Google Apps Script and get the web app URL</li>
                  <li>4. Update configuration values in the email service file</li>
                  <li>5. Test the quote form to ensure everything works</li>
                </ol>
              </div>

              {/* Current Status */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="text-gray-900 font-semibold mb-2">Current Status</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">EmailJS:</span>
                    <span className={`font-medium ${configStatus.emailjs ? 'text-green-600' : 'text-red-600'}`}>
                      {configStatus.emailjs ? 'Configured' : 'Not Configured'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Google Sheets:</span>
                    <span className={`font-medium ${configStatus.googleSheets ? 'text-green-600' : 'text-red-600'}`}>
                      {configStatus.googleSheets ? 'Configured' : 'Not Configured'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Company Info:</span>
                    <span className={`font-medium ${configStatus.companyInfo ? 'text-green-600' : 'text-red-600'}`}>
                      {configStatus.companyInfo ? 'Configured' : 'Not Configured'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Open setup guide or configuration file
                  console.log('Opening setup guide...');
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                View Setup Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigStatus; 
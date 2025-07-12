import React, { useState, useRef } from 'react';
import { Upload, FileText, Eye, Download, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Tesseract from 'tesseract.js';

interface ExtractedData {
  invoiceNumber: string;
  date: string;
  vendor: string;
  amount: string;
  dueDate: string;
  description: string;
  rawText: string;
}

const OCRInvoiceProcessor: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        setExtractedData(null);
        setError('');
      } else {
        setError('Please select a valid image file (PNG, JPG, JPEG)');
      }
    }
  };

  const extractInvoiceData = (text: string): ExtractedData => {
    const lines = text.split('\n').filter(line => line.trim());
    
    // Enhanced regex patterns for better data extraction
    const invoiceNumberPattern = /(?:invoice|inv|#)\s*:?\s*([A-Z0-9-]+)/i;
    const datePattern = /(?:date|issued|created)\s*:?\s*(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i;
    const dueDatePattern = /(?:due|payment due|pay by)\s*:?\s*(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4})/i;
    const amountPattern = /(?:total|amount|sum)\s*:?\s*\$?([0-9,]+\.?\d{0,2})/i;
    const vendorPattern = /(?:from|vendor|company|bill to)\s*:?\s*([A-Za-z\s&.,]+)/i;

    let invoiceNumber = '';
    let date = '';
    let vendor = '';
    let amount = '';
    let dueDate = '';
    let description = '';

    // Extract invoice number
    const invMatch = text.match(invoiceNumberPattern);
    if (invMatch) invoiceNumber = invMatch[1];

    // Extract date
    const dateMatch = text.match(datePattern);
    if (dateMatch) date = dateMatch[1];

    // Extract due date
    const dueDateMatch = text.match(dueDatePattern);
    if (dueDateMatch) dueDate = dueDateMatch[1];

    // Extract amount
    const amountMatch = text.match(amountPattern);
    if (amountMatch) amount = `$${amountMatch[1]}`;

    // Extract vendor (look for company names in first few lines)
    const vendorMatch = text.match(vendorPattern);
    if (vendorMatch) {
      vendor = vendorMatch[1].trim();
    } else {
      // Fallback: use first meaningful line as vendor
      const meaningfulLines = lines.filter(line => 
        line.length > 3 && 
        !line.match(/^\d+$/) && 
        !line.match(/^[\$\d\.,]+$/)
      );
      if (meaningfulLines.length > 0) {
        vendor = meaningfulLines[0];
      }
    }

    // Extract description (look for item descriptions)
    const descriptionLines = lines.filter(line => 
      line.length > 10 && 
      !line.match(/^[\d\/\-\.]+$/) &&
      !line.match(/^\$?[\d,\.]+$/) &&
      !line.toLowerCase().includes('invoice') &&
      !line.toLowerCase().includes('total')
    );
    description = descriptionLines.slice(0, 3).join('; ');

    return {
      invoiceNumber: invoiceNumber || 'Not found',
      date: date || 'Not found',
      vendor: vendor || 'Not found',
      amount: amount || 'Not found',
      dueDate: dueDate || 'Not found',
      description: description || 'Not found',
      rawText: text
    };
  };

  const processImage = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setProgress(0);
    setError('');

    try {
      const result = await Tesseract.recognize(
        selectedFile,
        'eng',
        {
          logger: (m) => {
            if (m.status === 'recognizing text') {
              setProgress(Math.round(m.progress * 100));
            }
          }
        }
      );

      const extractedData = extractInvoiceData(result.data.text);
      setExtractedData(extractedData);
    } catch (err) {
      setError('Failed to process image. Please try again with a clearer image.');
      console.error('OCR Error:', err);
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };

  const downloadData = () => {
    if (!extractedData) return;

    const csvContent = [
      'Field,Value',
      `Invoice Number,${extractedData.invoiceNumber}`,
      `Date,${extractedData.date}`,
      `Vendor,${extractedData.vendor}`,
      `Amount,${extractedData.amount}`,
      `Due Date,${extractedData.dueDate}`,
      `Description,${extractedData.description}`
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice-data-${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI-Powered Invoice Data Extraction
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload your invoice images and let our OCR technology automatically extract key data points 
          including invoice numbers, dates, amounts, and vendor information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
            <div className="p-8 text-center">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Upload Invoice Image
              </h3>
              <p className="text-gray-600 mb-4">
                Drag and drop or click to select an image file
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Choose File
              </button>
            </div>
          </div>

          {/* Image Preview */}
          {previewUrl && (
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Image Preview
              </h4>
              <img
                src={previewUrl}
                alt="Invoice preview"
                className="w-full h-64 object-contain border rounded-lg bg-gray-50"
              />
              <div className="mt-4 flex gap-3">
                <button
                  onClick={processImage}
                  disabled={isProcessing}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing... {progress}%
                    </>
                  ) : (
                    <>
                      <FileText className="h-4 w-4 mr-2" />
                      Extract Data
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          {isProcessing && (
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Processing...</span>
                <span className="text-sm text-gray-500">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-800">Error</h4>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {extractedData && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Extracted Data
                  </h4>
                  <button
                    onClick={downloadData}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download CSV
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Invoice Number
                    </label>
                    <input
                      type="text"
                      value={extractedData.invoiceNumber}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="text"
                      value={extractedData.date}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vendor
                    </label>
                    <input
                      type="text"
                      value={extractedData.vendor}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount
                    </label>
                    <input
                      type="text"
                      value={extractedData.amount}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Due Date
                    </label>
                    <input
                      type="text"
                      value={extractedData.dueDate}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={extractedData.description}
                    readOnly
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Features List */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Automatic Data Extraction</span>
                  <p className="text-gray-600 text-sm">Extract invoice numbers, dates, amounts, and vendor information</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Multiple Format Support</span>
                  <p className="text-gray-600 text-sm">Works with PNG, JPG, and JPEG image formats</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Export to CSV</span>
                  <p className="text-gray-600 text-sm">Download extracted data in CSV format for easy integration</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Real-time Processing</span>
                  <p className="text-gray-600 text-sm">See progress updates as your invoice is being processed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCRInvoiceProcessor;
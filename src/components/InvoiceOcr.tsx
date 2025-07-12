import React from 'react';
import { 
  FileText, 
  CheckCircle, 
  Shield, 
  Zap, 
  Globe, 
  TrendingUp,
  Users,
  CreditCard,
  Database,
  Settings,
  DollarSign,
  BarChart3,
  ShoppingCart,
  Briefcase,
  Slack,
  Lock,
  Building
} from 'lucide-react';

const InvoiceOcr = () => {
  const features = [
    { icon: Users, title: 'Supplier Management', description: 'Centralized vendor onboarding and management' },
    { icon: FileText, title: 'Invoice Management', description: 'Automated invoice processing and approval workflows' },
    { icon: Shield, title: 'Tax and Regulatory Compliance', description: 'Ensure compliance with global tax regulations' },
    { icon: CreditCard, title: 'Payments Network', description: 'Secure global payment processing network' },
    { icon: DollarSign, title: 'FX Solution', description: 'Multi-currency foreign exchange management' },
    { icon: Globe, title: 'Global', description: 'Worldwide payment and compliance coverage' },
    { icon: BarChart3, title: 'Reconciliation and Reporting', description: 'Real-time financial reporting and analytics' },
    { icon: ShoppingCart, title: 'Procurement', description: 'Streamlined procurement and purchasing workflows' },
    { icon: CreditCard, title: 'Cards', description: 'Corporate card management and expense tracking' },
    { icon: Briefcase, title: 'Expense Management', description: 'Automated expense reporting and reimbursement' }
  ];

  const integrations = [
    { icon: Database, title: 'ERPs', description: 'SAP, Oracle, NetSuite, and more' },
    { icon: Lock, title: 'SSO', description: 'Single sign-on integration' },
    { icon: Settings, title: 'Accounting systems', description: 'QuickBooks, Xero, Sage' },
    { icon: Slack, title: 'Slack', description: 'Team collaboration integration' },
    { icon: CreditCard, title: 'Credit cards', description: 'All major card providers' },
    { icon: Building, title: 'HRIS', description: 'Human resources systems' }
  ];

  const benefits = [
    'Advanced OCR invoice scanning',
    '2 & 3 way PO matching',
    'Secure and comprehensive global payments',
    'Real-time ERP and accounting integrations'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Automate your invoice management today
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Streamline your accounts payable process with cutting-edge automation technology
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-300 mx-auto mb-3" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transform Business Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Transform your business with one automated AP solution
            </h1>
            <h2 className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Game-changing payables automation that enables you to rapidly scale, 
              accelerate visibility, and strengthen fraud, and financial controls.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Scaling</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale your operations effortlessly with automated workflows that grow with your business needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Visibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Get real-time insights into your financial processes with comprehensive reporting and analytics.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fraud Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Strengthen your financial controls with advanced security measures and fraud detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Features we provide</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of tools to manage every aspect of your accounts payable process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Connect with your existing software</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrate with your current tech stack for a unified workflow experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <integration.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{integration.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to automate your invoice management?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their accounts payable process with our solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceOcr;
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
  Building,
  ArrowRight
} from 'lucide-react';

const InvoiceOcr = () => {
  const features = [
    { icon: Users, title: 'Supplier Management', description: 'Centralized vendor onboarding and management' },
    { icon: FileText, title: 'Invoice Management', description: 'Automated invoice processing and approval workflows' },
    { icon: Shield, title: 'Tax & Compliance', description: 'Ensure compliance with global tax regulations' },
    { icon: CreditCard, title: 'Payments Network', description: 'Secure global payment processing network' },
    { icon: DollarSign, title: 'FX Solution', description: 'Multi-currency foreign exchange management' },
    { icon: Globe, title: 'Global Coverage', description: 'Worldwide payment and compliance coverage' },
    { icon: BarChart3, title: 'Reconciliation', description: 'Real-time financial reporting and analytics' },
    { icon: ShoppingCart, title: 'Procurement', description: 'Streamlined procurement and purchasing workflows' },
    { icon: CreditCard, title: 'Corporate Cards', description: 'Corporate card management and expense tracking' },
    { icon: Briefcase, title: 'Expense Management', description: 'Automated expense reporting and reimbursement' }
  ];

  const integrations = [
    { icon: Database, title: 'ERPs', description: 'SAP, Oracle, NetSuite, and more' },
    { icon: Lock, title: 'SSO', description: 'Single sign-on integration' },
    { icon: Settings, title: 'Accounting', description: 'QuickBooks, Xero, Sage' },
    { icon: Slack, title: 'Slack', description: 'Team collaboration integration' },
    { icon: CreditCard, title: 'Credit Cards', description: 'All major card providers' },
    { icon: Building, title: 'HRIS', description: 'Human resources systems' }
  ];

  const benefits = [
    'Advanced OCR invoice scanning',
    '2 & 3 way PO matching',
    'Secure global payments',
    'Real-time ERP integrations'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section - Aligned with App.js Dark Theme */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
         {/* Background Effects */}
         <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 opacity-95"></div>
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
         
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Financial Automation
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Automate your invoice <br className="hidden sm:block" />
              <span className="text-cyan-400">management today.</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-slate-300 max-w-3xl mx-auto font-light">
              Streamline your accounts payable process with cutting-edge AI automation technology designed for scale.
            </p>
            
            {/* Benefits Grid - Glassmorphism style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-center gap-3 shadow-lg">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-slate-200 font-medium text-sm text-left">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transform Business Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Transform your business with <br/> one automated AP solution
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Game-changing payables automation that enables you to rapidly scale, 
              accelerate visibility, and strengthen fraud and financial controls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Zap className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Scaling</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale your operations effortlessly with automated workflows that grow with your business needs.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <TrendingUp className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Visibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Get real-time insights into your financial processes with comprehensive reporting and analytics.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Shield className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fraud Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Strengthen your financial controls with advanced security measures and fraud detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Styling matched to "Services" in App.js */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Features We Provide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of tools to manage every aspect of your accounts payable process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  {/* Icon Style Matched to App.js (Dark BG + Cyan Icon) */}
                  <div className="bg-slate-900 w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with your existing software stack for a unified workflow experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-colors">
                 <div className="mx-auto bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center mb-3">
                   <integration.icon className="h-6 w-6 text-slate-700" />
                 </div>
                 <h3 className="font-bold text-gray-900 text-sm">{integration.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matches Footer Area of App.js */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-gray-800 text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to automate your invoice management?</h2>
          <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
            Join thousands of companies that have transformed their accounts payable process with our solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <button className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-lg font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </button>
            {/* Secondary Button */}
            <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceOcr;
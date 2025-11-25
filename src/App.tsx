import React, { useState } from 'react';
import { ArrowRight, Users, Award, Globe, TrendingUp, Heart, CheckCircle, FileText, Menu, X, Code, Smartphone, Cloud, Database, Shield, Zap, Building, Factory, ShoppingCart, MapPin, Mail, Phone } from 'lucide-react';

// Assuming these components are in the correct relative paths
import InvoiceOcr from './components/InvoiceOcr';
import Hero from './components/Hero';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'industries' | 'services' | 'careers' | 'ocr'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data structure remains the same
  const industries = [
    {
      title: 'Financial Services',
      description: 'Digital transformation solutions for banks, fintech, and financial institutions',
      icon: Building,
      features: ['Digital Banking', 'Payment Solutions', 'Risk Management', 'Compliance Systems']
    },
    {
      title: 'Healthcare',
      description: 'Innovative healthcare technology solutions for better patient outcomes',
      icon: Heart,
      features: ['Patient Management', 'Telemedicine', 'Health Analytics', 'Medical Records']
    },
    {
      title: 'E-commerce & Retail',
      description: 'Comprehensive e-commerce platforms and retail technology solutions',
      icon: ShoppingCart,
      features: ['Online Stores', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce']
    },
    {
      title: 'Manufacturing',
      description: 'Smart manufacturing solutions with IoT and automation technologies',
      icon: Factory,
      features: ['Process Automation', 'Quality Control', 'Supply Chain', 'Predictive Maintenance']
    }
  ];

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements',
      icon: Code,
      technologies: ['React', 'Node.js', '.NET', 'Python', 'Java']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      icon: Database,
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      technologies: ['Penetration Testing', 'Security Audits', 'Compliance', 'Monitoring']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      technologies: ['Strategy', 'Process Optimization', 'Change Management', 'Training']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* --- REVISED HEADER: Sticky, Blur, and Consistent Cyan Branding --- */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Globe className="h-7 w-7 text-cyan-500 mr-2" /> 
                <span className="text-2xl font-extrabold text-gray-900">Aarambhly</span>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'industries', 'services', 'careers', 'ocr'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`relative px-1 py-1 text-sm font-medium transition-all group ${
                      activeTab === tab ? 'text-cyan-600' : 'text-gray-700 hover:text-cyan-600'
                    }`}
                  >
                    {tab === 'ocr' ? (
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        Invoice OCR
                      </span>
                    ) : (
                      <span className="capitalize">{tab}</span>
                    )}
                    {/* Modern active indicator underline */}
                    <span className={`absolute bottom-0 left-0 h-[3px] bg-cyan-500 transform transition-all duration-300 ${activeTab === tab ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuMenuOpen)}
                className="text-gray-900 hover:text-cyan-600 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-2">
                {['home', 'industries', 'services', 'careers', 'ocr'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab as any);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-3 py-2 text-sm font-medium transition-colors capitalize ${
                      activeTab === tab ? 'text-cyan-600' : 'text-gray-900 hover:text-cyan-600'
                    }`}
                  >
                    {tab === 'ocr' ? 'Invoice OCR' : tab}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      {activeTab === 'home' && (
        <>
          {/* Hero component (Uses your dark design) */}
          <Hero onExploreServices={() => setActiveTab('services')} />

          {/* Services Preview Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Core Solutions</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  We bridge the gap between complex engineering needs and powerful, automated technology.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.slice(0, 3).map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="text-center">
                      <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="h-8 w-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-700 transition-colors"
                >
                  View All Services
                </button>
              </div>
            </div>
          </section>

          {/* Industries Preview */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Specialized solutions tailored to industry-specific challenges and requirements
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="text-center">
                      <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                      <p className="text-gray-600 text-sm">{industry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section - Consistent use of Cyan */}
          <section className="py-20 bg-gradient-to-r from-slate-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Construction Business?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Join hundreds of companies that trust Aarambhly to deliver exceptional AI-powered automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="bg-cyan-500 text-slate-950 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30"
                >
                  Get Started
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Industries Page */}
      {activeTab === 'industries' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver specialized technology solutions across various industries, 
                understanding the unique challenges and requirements of each sector.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{industry.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">Key Solutions:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {industry.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services Page */}
      {activeTab === 'services' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology services designed to accelerate your digital transformation 
                and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="p-8">
                    <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Careers Page */}
      {activeTab === 'careers' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of a dynamic team that's shaping the future of technology. 
                We offer exciting opportunities for growth and innovation.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 mb-16 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                  <p className="text-gray-600">Continuous learning and career advancement in cutting-edge technologies</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
                  <p className="text-gray-600">Work with talented professionals in a supportive environment</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                  <p className="text-gray-600">Comprehensive benefits package and flexible work arrangements</p>
                </div>
              </div>
            </div>

            {/* Job Listings placeholder */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
              {/* You can map job postings here */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center text-gray-500">
                No open positions currently listed. Please check back soon!
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gray-100 rounded-xl p-10 text-center shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See the Right Position?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let us know how you'd like to contribute.
              </p>
              <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invoice OCR Page */}
      {activeTab === 'ocr' && (
        <div className="py-8">
          <InvoiceOcr/>
        </div>
      )}

      {/* --- REVISED FOOTER: Darker and Consistent Branding --- */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1: Contact Info */}
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-cyan-400 mr-2" />
                <span className="text-xl font-bold">Aarambhly</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Building tomorrow's digital solutions today.
              </p>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                  <a
                    href="mailto:director@aarambhly.com"
                    className="hover:text-cyan-200 transition-colors"
                  >
                    director@aarambhly.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                  <a
                    href="tel:+15513289945"
                    className="hover:text-cyan-200 transition-colors"
                  >
                    +1 (551) 328-9945
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-cyan-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            {/* Column 2: Company */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => setActiveTab('careers')} className="hover:text-cyan-200 transition-colors">Careers</button></li>
                <li><a href="#" className="hover:text-cyan-200 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-200 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-200 transition-colors">All Services</button></li>
                <li><button onClick={() => setActiveTab('ocr')} className="hover:text-cyan-200 transition-colors">Invoice OCR</button></li>
                <li><a href="#" className="hover:text-cyan-200 transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-cyan-200 transition-colors">Data Analytics</a></li>
              </ul>
            </div>
            
            {/* Column 4: Industries */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Industries</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => setActiveTab('industries')} className="hover:text-cyan-200 transition-colors">All Industries</button></li>
                <li><a href="#" className="hover:text-cyan-200 transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-cyan-200 transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-cyan-200 transition-colors">Manufacturing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Aarambhly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
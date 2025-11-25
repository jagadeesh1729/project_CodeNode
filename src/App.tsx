import React, { useState } from 'react';
import { ArrowRight, Users, Award, Globe, TrendingUp, Heart, CheckCircle, FileText, Menu, X, Code, Smartphone, Cloud, Database, Shield, Zap, Building, Factory, ShoppingCart,  MapPin, Mail, Phone } from 'lucide-react';
import InvoiceOcr from './components/InvoiceOcr';
import Hero from './components/Hero';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'industries' | 'services' |  'careers' |  'ocr'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Globe className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Aarambhly</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'home' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setActiveTab('industries')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'industries' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Industries
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'services' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => setActiveTab('careers')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'careers' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Careers
                </button>

                <button
                  onClick={() => setActiveTab('ocr')}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                    activeTab === 'ocr' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  <FileText className="h-4 w-4 mr-1" />
                  Invoice OCR
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 hover:text-blue-600 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
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
                      activeTab === tab ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
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
        <Hero onExploreServices={() => setActiveTab('services')}  />
          {/* Hero Section */}
          {/* <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Building Tomorrow's 
                  <span className="text-blue-200"> Digital Solutions</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  We are a forward-thinking technology company dedicated to creating innovative solutions 
                  that drive digital transformation and empower businesses to thrive in the modern world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setActiveTab('services')}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>

                </div>
              </div>
            </div>
          </section> */}

          {/* Stats Section */}
        { /* <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Services Preview */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology solutions to accelerate your digital transformation
                </p>
              </div> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.slice(0, 3).map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
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
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View All Services
                </button>
              </div>
            </div>
          </section>

          {/* Industries Preview */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Specialized solutions tailored to industry-specific challenges and requirements
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
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

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join hundreds of companies that trust Aarambhly to deliver exceptional 
                technology solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </button>

              </div>
            </div>
          </section>
        </>
      )}

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
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
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
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
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
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                  <p className="text-gray-600">Continuous learning and career advancement in cutting-edge technologies</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
                  <p className="text-gray-600">Work with talented professionals in a supportive environment</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                  <p className="text-gray-600">Comprehensive benefits package and flexible work arrangements</p>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>

            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See the Right Position?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let us know how you'd like to contribute.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ocr' && (
        <div className="py-8">
          <InvoiceOcr/>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">Aarambhly</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building tomorrow's digital solutions today.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                   <a
      href="mailto:director@aarambhly.com"
      className="hover:text-gray-200 underline-offset-2 hover:underline"
    >
      director@aarambhly.com
    </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                 <a
      href="tel:+15513289945"
      className="hover:text-gray-200 underline-offset-2 hover:underline"
    >
      +1 (551) 328-9945
    </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveTab('careers')} className="hover:text-white transition-colors">Careers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors">All Services</button></li>
                <li><button onClick={() => setActiveTab('ocr')} className="hover:text-white transition-colors">Invoice OCR</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveTab('industries')} className="hover:text-white transition-colors">All Industries</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
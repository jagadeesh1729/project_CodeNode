import React, { useState } from 'react';
import { ArrowRight, Users, Target, Lightbulb, Award, Globe, TrendingUp, Heart, Star, CheckCircle, FileText, Menu, X, Code, Smartphone, Cloud, Database, Shield, Zap, Building, Factory, ShoppingCart, Briefcase, GraduationCap, Calendar, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';
import OCRInvoiceProcessor from './components/OCRInvoiceProcessor';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'industries' | 'services' | 'company' | 'careers' | 'insights' | 'ocr'>('home');
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

  const insights = [
    {
      title: 'The Future of AI in Business Applications',
      excerpt: 'Exploring how artificial intelligence is reshaping business processes and creating new opportunities for innovation.',
      date: '2024-01-15',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      title: 'Cloud Migration Best Practices for Enterprises',
      excerpt: 'A comprehensive guide to successful cloud migration strategies and common pitfalls to avoid.',
      date: '2024-01-10',
      category: 'Cloud',
      readTime: '8 min read'
    },
    {
      title: 'Cybersecurity Trends to Watch in 2024',
      excerpt: 'Key cybersecurity trends and threats that organizations need to prepare for in the coming year.',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read'
    },
    {
      title: 'Building Scalable E-commerce Platforms',
      excerpt: 'Technical insights into creating e-commerce solutions that can handle high traffic and growth.',
      date: '2023-12-28',
      category: 'E-commerce',
      readTime: '7 min read'
    }
  ];

  const careers = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Join our engineering team to build cutting-edge web applications using modern technologies.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us scale our infrastructure and improve our deployment processes.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user experiences for our clients and products.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Lead cross-functional teams to deliver successful projects on time and within budget.'
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
                <span className="text-2xl font-bold text-gray-900">CodeNode</span>
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
                  onClick={() => setActiveTab('company')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'company' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Company
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
                  onClick={() => setActiveTab('insights')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'insights' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Insights
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
                {['home', 'industries', 'services', 'company', 'careers', 'insights', 'ocr'].map((tab) => (
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
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
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
                  <button 
                    onClick={() => setActiveTab('company')}
                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gray-50">
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
          </section>

          {/* Services Preview */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology solutions to accelerate your digital transformation
                </p>
              </div>
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
                Join hundreds of companies that trust CodeNode to deliver exceptional 
                technology solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => setActiveTab('company')}
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More
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

      {activeTab === 'company' && (
        <>
          {/* About Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    About CodeNode
                  </h1>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Founded in 2008, CodeNode has been at the forefront of digital innovation, 
                    helping businesses transform their operations through cutting-edge technology solutions. 
                    We combine deep technical expertise with creative problem-solving to deliver results 
                    that exceed expectations.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our team of passionate professionals brings together diverse skills and perspectives 
                    to tackle complex challenges and create solutions that make a real difference in 
                    our clients' success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Industry Leaders</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Proven Results</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Global Reach</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                    <div className="text-center">
                      <TrendingUp className="h-16 w-16 mx-auto mb-4 text-white" />
                      <h3 className="text-2xl font-bold mb-4">Our Growth Story</h3>
                      <p className="text-blue-100 leading-relaxed">
                        From a small startup to a global technology leader, our journey has been 
                        marked by continuous innovation and unwavering commitment to excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  These fundamental principles guide everything we do and shape our culture
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We constantly push boundaries and embrace new technologies to deliver 
                      cutting-edge solutions that drive progress.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We build trust through transparency, honesty, and ethical practices in 
                      every interaction and decision we make.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We strive for excellence in everything we do, from code quality to 
                      client service, never settling for mediocrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage in an ever-evolving digital landscape. 
                    We are committed to delivering exceptional value through our expertise, 
                    creativity, and unwavering dedication to client success.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To be the global leader in digital transformation, recognized for our ability 
                    to turn complex challenges into elegant solutions. We envision a future where 
                    technology seamlessly integrates with human potential to create extraordinary 
                    possibilities for businesses and communities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our experienced leadership team brings decades of industry expertise and vision
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: 'Sarah Johnson', role: 'CEO & Founder' },
                  { name: 'Michael Chen', role: 'CTO' },
                  { name: 'Emma Rodriguez', role: 'VP of Operations' },
                  { name: 'David Thompson', role: 'VP of Engineering' },
                  { name: 'Lisa Wang', role: 'VP of Marketing' },
                  { name: 'James Miller', role: 'VP of Sales' }
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
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
              {careers.map((job, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 mr-4">{job.title}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span className="mr-4">{job.department}</span>
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        Apply Now
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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

      {activeTab === 'insights' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights & Resources</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest trends, insights, and best practices in technology and digital transformation.
              </p>
            </div>

            {/* Featured Article */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white mb-16">
              <div className="max-w-3xl">
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured Article
                </span>
                <h2 className="text-3xl font-bold mb-4">The Future of AI in Business Applications</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Exploring how artificial intelligence is reshaping business processes and creating new opportunities for innovation across industries.
                </p>
                <div className="flex items-center text-blue-100 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">January 15, 2024</span>
                  <span>5 min read</span>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Read Article
                </button>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.slice(1).map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                        Read More
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest insights, industry trends, 
                and technology updates directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ocr' && (
        <div className="py-8">
          <OCRInvoiceProcessor />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">CodeNode</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building tomorrow's digital solutions today.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hello@codenode.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
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
                <li><button onClick={() => setActiveTab('company')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => setActiveTab('careers')} className="hover:text-white transition-colors">Careers</button></li>
                <li><button onClick={() => setActiveTab('insights')} className="hover:text-white transition-colors">News</button></li>
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeNode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
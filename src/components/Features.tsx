import React from 'react';
import { Bot, BarChart3, Users, MessageCircle, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Interactive Teaching",
      description: "Advanced multimodal AI assistant that adapts to different learning styles and provides personalized educational content in real-time.",
      benefits: ["Personalized learning paths", "Voice and visual interactions", "Adaptive content delivery"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Performance Tracking",
      description: "Comprehensive analytics dashboard providing insights into student progress, engagement levels, and learning outcomes.",
      benefits: ["Performance analytics", "Learning pattern recognition", "Predictive insights"]
    },
    {
      icon: Users,
      title: "Automated Attendance Management",
      description: "Advanced CCTV system with facial recognition that automatically tracks student attendance with 99% accuracy and real-time updates.",
      benefits: ["Live facial recognition", "Automated attendance marking", "Real-time parent notifications"]
    },
    {
      icon: MessageCircle,
      title: "Parent Communication Hub",
      description: "Automated communication system that keeps parents informed about their child's progress, attendance, and achievements.",
      benefits: ["Instant notifications", "Progress reports", "Two-way communication"]
    },
    {
      icon: Clock,
      title: "Intelligent Scheduling",
      description: "AI-driven scheduling system that optimizes class timings, resource allocation, and curriculum planning for maximum efficiency.",
      benefits: ["Optimized time management", "Resource allocation", "Curriculum planning"]
    },
    {
      icon: Shield,
      title: "Data Security & Privacy",
      description: "Enterprise-grade security measures ensuring student data protection and compliance with educational privacy regulations.",
      benefits: ["End-to-end encryption", "GDPR compliance", "Secure cloud infrastructure"]
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful AI-Driven Capabilities
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Discover how Smart Thinkers transforms traditional education with cutting-edge AI technology
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-200 hover:border-blue-200 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white mb-4 group-hover:bg-blue-700 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Classroom?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of educational institutions already using Smart Thinkers to revolutionize their teaching experience.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors transform hover:scale-105 duration-200"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
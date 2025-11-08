import React from 'react';
import { Upload, Brain, BarChart3, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Upload,
      title: "Setup & Integration",
      description: "Easy installation and seamless integration with your existing classroom infrastructure and learning management systems.",
      details: ["Quick 30-minute setup", "Zero disruption to current workflows", "Compatible with existing tech"]
    },
    {
      icon: Brain,
      title: "AI Learning & Adaptation",
      description: "Our AI assistant learns your teaching style, student preferences, and classroom dynamics to provide personalized experiences.",
      details: ["Continuous learning algorithm", "Personalized content generation", "Adaptive teaching methods"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Optimization",
      description: "Real-time insights and performance analytics help optimize teaching strategies and improve student outcomes.",
      details: ["Real-time performance dashboards", "Predictive analytics", "Automated reporting to parents"]
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple 3-Step Process
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Get started with Smart Thinkers in just three easy steps and transform your classroom experience
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    {/* Step number */}
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4 shadow-lg relative z-10">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6 group-hover:bg-blue-100 transition-colors">
                      <step.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      
                      {/* Details */}
                      <ul className="space-y-2 text-sm">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center justify-center text-gray-500">
                            <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <ArrowRight className="h-6 w-6 text-blue-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Day 1</div>
                <p className="text-gray-600">Installation & Basic Setup</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Week 1</div>
                <p className="text-gray-600">AI Training & Customization</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Month 1</div>
                <p className="text-gray-600">Full Optimization & Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
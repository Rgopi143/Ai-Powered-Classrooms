import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pioneering the Future of Education
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto leading-relaxed">
            RANBRIDGE Services Pvt. Ltd is at the forefront of educational technology innovation, 
            developing cutting-edge AI solutions that transform traditional classroom experiences.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We envision a world where AI seamlessly integrates with education to create 
                personalized, engaging, and effective learning environments. Our Smart Thinkers 
                platform represents a paradigm shift in how educators teach and students learn.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Targeted Innovation</h4>
                    <p className="text-gray-600">Developing solutions that address real classroom challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Creative Solutions</h4>
                    <p className="text-gray-600">Leveraging cutting-edge AI for educational transformation</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Smart Thinkers?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Traditional classroom management faces numerous challenges: inconsistent attendance tracking, 
                limited parent engagement, and difficulty in personalizing education. Smart Thinkers addresses 
                these pain points with intelligent automation and AI-driven insights.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Community Impact</h4>
                    <p className="text-gray-600">Connecting educators, students, and parents in meaningful ways</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Proven Excellence</h4>
                    <p className="text-gray-600">Research-backed methodologies and measurable outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are committed to democratizing quality education through technology. By making advanced 
              AI tools accessible to educational institutions worldwide, we're building a future where 
              every student receives personalized attention and every educator is empowered with intelligent insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
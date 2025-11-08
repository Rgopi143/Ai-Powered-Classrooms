import React from 'react';
import { TrendingUp, Clock, Users, Award, BookOpen, MessageSquare } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "85%",
      label: "Increase in Student Engagement",
      description: "Students show higher participation rates"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Time Saved on Administrative Tasks",
      description: "Teachers can focus more on actual teaching"
    },
    {
      icon: Users,
      value: "90%",
      label: "Parent Satisfaction Rate",
      description: "Improved communication and transparency"
    },
    {
      icon: Award,
      value: "75%",
      label: "Improvement in Learning Outcomes",
      description: "Better academic performance across metrics"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Enhanced Learning Experience",
      points: [
        "Personalized learning paths for each student",
        "Interactive AI-driven content delivery",
        "Multi-modal learning support (visual, audio, kinesthetic)",
        "Real-time doubt resolution and feedback"
      ]
    },
    {
      icon: MessageSquare,
      title: "Improved Communication",
      points: [
        "Automated parent-teacher communication",
        "Real-time progress updates and alerts",
        "Transparent attendance tracking",
        "Collaborative learning environment"
      ]
    }
  ];

  return (
    <section id="impact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Results & Impact</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Measurable Transformation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            See the real-world impact Smart Thinkers has on educational institutions worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center border border-gray-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white mx-auto mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-900 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white mr-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <ul className="space-y-3">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Preview */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                <p className="text-lg opacity-90 mb-4 leading-relaxed">
                  "Smart Thinkers transformed our teaching methodology completely. Student engagement 
                  increased by 85%, and we saw a significant improvement in learning outcomes within 
                  just two months of implementation."
                </p>
                <div className="text-sm opacity-75">
                  — Dr. Sarah Johnson, Principal at Lincoln Elementary School
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2">2 Months</div>
                  <div className="text-sm opacity-90">Implementation Time</div>
                  <div className="text-3xl font-bold mb-2 mt-4">500+</div>
                  <div className="text-sm opacity-90">Students Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your ROI</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Smart Thinkers typically pays for itself within 6 months through improved efficiency, 
              reduced administrative costs, and better student outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-gray-600">Reduction in Administrative Costs</p>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">25%</div>
                <p className="text-gray-600">Increase in Teacher Productivity</p>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">6 Months</div>
                <p className="text-gray-600">Average ROI Timeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
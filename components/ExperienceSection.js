export default function ExperienceSection() {
  const experiences = [
    {
      title: "Research Lead",
      company: "Bina Labs",
      period: "Nov 2024 - Present",
      description: [
        "Architect and optimize end-to-end computer-vision/ML workflows for post-disaster assessment, harnessing V7 Darwin and LabelBox to annotate and preprocess a fleet of 30,000+ UAV imagery frames.",
        "Developing Python-based algorithms for damage assessment using computer vision and semantic segmentation.",
      ]
    },
    {
      title: "Biostatistics and Programming Intern",
      company: "Incyte Corporation",
      period: "Jun 2025 - Jul 2025",
      description: [
        "Developed a statistical tool in R for projecting event timing in clinical trials to support interim and final analysis planning.",
        "Built and validated Weibull mixture survival models; benchmarked against Kaplan-Meier estimates and visualized results using ggplot2.",
        "Engineered a custom R function to generate time-locked survival plots across different cutoff points, automating exploratory workflows."
      ]
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-gray-900" id="experience">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Professional Experience
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-purple-500 rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Period Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center mb-4">
                      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

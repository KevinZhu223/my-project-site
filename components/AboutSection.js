export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-4">
            👨‍💻 About Me
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get to Know Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl w-full">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-gray-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Background
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base">
                I&apos;m a passionate software engineer and data scientist with a strong foundation in 
                building scalable applications and extracting meaningful insights from complex datasets. 
                My journey in technology combines analytical thinking with creative problem-solving.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                I enjoy working on projects that bridge the gap between technical innovation and 
                real-world impact, whether it&apos;s developing web applications or implementing machine 
                learning solutions.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-green-100 dark:border-gray-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education & Skills
                </h3>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="mr-2"></span> Education
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  Lehigh University, Junior pursuing a B.S. in Computer Science with a minor in Data Science
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="mr-2"></span> Technical Skills
                </h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                      <span className="mr-2"></span> Software Engineering
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'React/Next.js', 'Node.js', 'Python', 'Java', "C/C++", "SQL"].map((skill, index) => (
                        <span key={index} className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-lg font-medium border border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                      <span className="mr-2"></span> Data Science
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['R', 'Biostatistics/Clinical Trials','Machine Learning', 'Data Analysis', 'Statistical Modeling', 'Data Visualization'].map((skill, index) => (
                        <span key={index} className="px-3 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-lg font-medium border border-green-200 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

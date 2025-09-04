import Link from 'next/link';

export default function ProjectCard({ title, description, techStack, liveUrl, githubUrl }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-gray-100 dark:border-gray-700 group relative overflow-hidden flex flex-col items-center text-center max-w-md w-full">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
        {description}
      </p>
      
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 text-slate-700 dark:text-slate-300 text-sm rounded-lg font-medium border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3">
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>🚀</span> Live Demo
          </Link>
        )}
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-4 py-3 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>💻</span> GitHub
          </Link>
        )}
      </div>
    </div>
  );
}

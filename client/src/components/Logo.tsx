export default function Logo() {
  return (
    <a href="/" className="flex items-center space-x-3 group">
      <div className="relative w-10 h-10 transform transition-transform duration-300 group-hover:scale-110">
        <svg 
          viewBox="0 0 24 24" 
          className="w-full h-full text-primary dark:text-secondary transition-colors duration-300"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 5v7l5 5"/>
        </svg>
        <div className="absolute inset-0 bg-primary/10 dark:bg-secondary/10 rounded-full blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
      <span className="text-2xl font-bold text-primary dark:text-white transition-colors duration-300">
        Acros
      </span>
    </a>
  );
}
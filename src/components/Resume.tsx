import { useState } from "react";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const resumeViewUrl = "https://drive.google.com/file/d/1ney5h5zUvC2bUkmph89_GuTitQmjhgC5/preview"; 

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center relative">
     {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Loading resume...</p>
          </div>
        </div>
      )}

      {/* PDF Viewer */}
      <div className="w-full  h-[90vh]">
        <iframe
          src={resumeViewUrl}
          className="w-[95%] h-[90%]  border-0"
          title="Resume"
          allow="autoplay"
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>

    </div>
  );
};
export default Resume;

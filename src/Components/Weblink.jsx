import React from "react";

const WebLinks = () => {
  return (
    <section id="weblinks" className="py-8">
    <div className="w-full sm:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Social links</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <span className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Github-Search
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            avisrabon22.github.io/Github-Search
          </p>
        </span>

        <span className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Scaler
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            scaler.com/academy/profile/6feaadf2bef4/
          </p>
        </span>
        <span className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
          LinkedIn
          </h3>
          <p  className="mt-1 max-w-2xl text-sm text-gray-500">
          linkedin.com/in/avisrabon22
          </p>
        </span>
        {/* Add more web links as needed */}
      </div>
    </div>
    </section>
  );
};

export default WebLinks;

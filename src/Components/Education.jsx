import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
      
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              Bachelor's Degree in Information Technology
            </h3>
            <b>Sikkim Manipal University, Graduated in April 2021</b>
            <p>CGPA: 6.7</p>
          </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Course</h2>
          <h3 className="text-lg font-semibold mb-2">
             Software Development
          </h3>
          <b>Scaler Academy in April 2023</b>
      </div>
    </section>
  );
};

export default Education;

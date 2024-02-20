// src/components/Projects.jsx

import React from 'react';
const Projects = () => {
  return (
    <section id="projects" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">RK Infonet Website( rkinfonet.com )</h3>
            
            <p>• Developed a website where we can find electronic products to buy.</p>
            <p>• Implemented react js and springboot(with JPA).</p>
            <p>• Deployed on AWS ec2 with MySQL self-configured and managed.</p>
            <p>• Reduce 60% price of hosting to use ec2 intance.</p>
            <p>• Managed with docker and containerized the server.</p>
            <p>• Configured https with Apache2 and nginix.</p>
               <b>Team Size: 2</b>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">INVENTORY MANAGEMENT SYSTEM</h3>
            <p>• Developed a scalable Inventory Management System using Spring Boot, MySQL, and Hibernate.</p>
            <p>• Reduced inventory discrepancies by 30% through real-time tracking.</p>
            <p>• Improved system response time by 20% through optimization techniques.</p>
            <p>• Centralized data increased by more than 30% of work productivity.</p>
            <p>• Implemented cache technique to reduce response time to fetch details of products.</p>
            <p>• Develop microservices to minimize centralized shutdown and 40% cost reduction with dockerize those services</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">EMPLOYEE MANAGEMENT SYSTEM </h3>
        <p>• Developed with Servlet, JSP, HTML and CSS.</p>
        <p>• Implemented MySQL database to store data using JDBC.</p>
        <p>• Created frontend with JSP to 100% Java-based project.</p>
          
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

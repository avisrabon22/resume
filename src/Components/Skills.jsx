// src/components/Skills.jsx

import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
               <li>Tailwind</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Vit</li>
             
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>AWS</li>
              <li>GIT</li>
              <li>Docker</li>
              <li>Microservices</li>
              <li>REST API</li>
              <li>Linux</li>
            </ul>
          </div>
          {/* Add more sections for other skills */}
        </div>
      </div>
    </section>
  );
};

export default Skills;

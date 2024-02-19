// src/components/Experience.jsx

import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">System Administrator</h3>
            <b>IIMI | Kolkata West Bengal | 2023 - Present</b>
            <p>
              • Installed, configured, and maintained enterprise-level Linux and
              Windows server systems
            </p>
            <p>
              • Managed and maintained network infrastructure, including
              switches, routers, and firewalls
            </p>
            <p>
              • Developed and deployed a virtualized server environment that
              reduced server costs by 60%
            </p>
            <p>
              • Designed and implemented a highly available and fault-tolerant
              system architecture, resulting in 99.999% uptime
            </p>
            <p>
              • Developed a web-based application that is a basic notice board
              for all employees
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">System Administrator</h3>
            <b>PCITS | Kolkata West Bengal | 2020 - 2023</b>
            <p>
              • Installed, configured and maintained enterprise-level Linux and
              Windows server systems
            </p>
            <p>
              • Implemented a virtualization strategy that allowed multiple
              applications and operating systems to run on a single server,
              resulting in improved hardware utilization and cost savings
            </p>
            <p>
              • Monitored system performance and identified and resolved
              performance issues, resulting in a 50% improvement
            </p>
            <p>
              • Monitored system performance and identified and resolved
              performance issues, resulting in a 50% improvement in overall
              system performance
            </p>
            <p>
              • Troubleshot and resolved hardware and software issues, resulting
              in a 70% more productive to the organization
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">IT Engineer</h3>
            <b>Sterling Infoways | Gurgaon Haryana|2016 - 2019</b>
            <p>• Designed and implemented a network architecture that improved system performance by 40%</p>
            <p>• Developed a backup and disaster recovery plan that enabled the company to recover from a system outage in less than an hour and no data loss security</p>
            <p>• Installed and configured virtualization technology(VMWare) that increased server utilization by 80%</p>
            <p>• Installed, configured, and maintained servers, routers, firewalls, and other network devices that extended the company's productivity by 30% more</p>
            </div>
          {/* Add more job experience cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;

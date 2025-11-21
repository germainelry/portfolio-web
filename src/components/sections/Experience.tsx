import { useState } from 'react';
import Window from '../Window';
import Tooltip from '../Tooltip';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'DBS Bank',
      role: 'Software Engineer',
      period: '2025 June - Present',
      achievements: [
        'Developed Python automation for privileged ID lifecycle management and CyberArk PAM integration (onboarding, rotation, decommissioning)',
        'Enhanced SecretHub (FastAPI) secret management system with CyberArk & HashiCorp Vault integrations and comprehensive audit logging',
        'Built FastAPI reporting server delivering automated compliance reports and audit dashboards with scheduled email alerts',
        'Automated Active Directory user/group management with PowerShell, strengthening security compliance and access control'
      ],
      tech: [
        { name: 'Python', role: 'Core language', use: 'Automation & backend' },
        { name: 'FastAPI', role: 'Backend framework', use: 'REST APIs & reporting' },
        { name: 'CyberArk', role: 'PAM solution', use: 'Privileged access management' },
        { name: 'Pandas', role: 'Data library', use: 'Data processing & analysis' },
        { name: 'PowerShell', role: 'Scripting language', use: 'AD automation' },
        { name: 'Active Directory', role: 'Identity service', use: 'User/group management' }
      ]
    },
    {
      company: 'UOB Bank',
      role: 'Automation Engineer',
      period: '2024 July - 2025 June',
      achievements: [
        'Automated daily infrastructure tasks with Python through advanced logging, scheduling, and validation workflows',
        'Implemented Infrastructure as Code (IaC) with Chef for server provisioning, config management, and automated deployments',
        'Managed Jenkins CI/CD pipelines and validated regression/compliance test suites across multiple OS platforms',
        'Leveraged Chef and IBM BigFix for OS hardening, compliance monitoring, and vulnerability remediation'
      ],
      tech: [
        { name: 'Python', role: 'Core language', use: 'Automation scripts' },
        { name: 'Chef', role: 'Configuration management', use: 'Infrastructure as Code' },
        { name: 'Jenkins', role: 'CI/CD platform', use: 'Pipeline automation' },
        { name: 'Ruby', role: 'Scripting language', use: 'Chef cookbooks' },
        { name: 'IBM BigFix', role: 'Endpoint management', use: 'OS hardening & compliance' },
        { name: 'Bash', role: 'Shell scripting', use: 'System automation' },
        { name: 'Linux', role: 'Operating system', use: 'Linux 7.x, 8.x, 9.x platforms' },
        { name: 'Unix', role: 'Operating system', use: 'AIX, Solaris platforms' }
      ]
    },
    {
      company: 'Micron Technology',
      role: 'Process Engineer',
      period: '2022 July - 2024 June',
      achievements: [
        'Analyzed semiconductor data using JMP & Yield3, building visualizations (wafer maps, trends) driving 20% process efficiency improvement',
        'Applied SPC & DOE methodologies to minimize variability; automated data workflows with Python increasing analytical productivity',
        'Led cross-functional initiatives reducing defect rates by 20%, recovering ~$1M value (~450 wafers/day) per fab line',
        'Streamlined reporting processes improving accuracy and timeliness by 30%, enhancing data-driven decision-making'
      ],
      tech: [
        { name: 'Python', role: 'Core language', use: 'Data analysis & automation' },
        { name: 'JMP', role: 'Statistical software', use: 'Process analysis' },
        { name: 'Yield3', role: 'Yield analysis', use: 'Manufacturing data' },
        { name: 'SPC', role: 'Methodology', use: 'Statistical process control' },
        { name: 'DOE', role: 'Methodology', use: 'Design of experiments' },
        { name: 'Data Visualization', role: 'Skill', use: 'Wafer maps & charts' }
      ]
    }
  ];

  return (
    <Window title="EXPERIENCE.DOC" width="max-w-3xl">
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-retro-grey-dark mb-6 -mt-2">
        {experiences.map((exp, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 font-mono text-sm border-2 border-b-0 transition-all duration-150 relative ${
                isActive
                  ? 'bg-white border-retro-grey-dark -mb-0.5 z-10 cursor-default text-retro-charcoal' 
                  : 'bg-retro-grey border-retro-grey-dark text-retro-grey-dark hover:bg-retro-grey-light hover:-translate-y-0.5 cursor-pointer'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 bg-pink-500" style={{ height: '3px' }} />
              )}
              Level {experiences.length - index}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="font-mono text-retro-charcoal mb-1" style={{ fontSize: '24px' }}>
              {experiences[activeTab].company}
            </h2>
            <p className="font-mono text-lg text-pink-600">
              {experiences[activeTab].role}
            </p>
          </div>
          <div className="bg-retro-grey border-2 border-retro-grey-dark px-4 py-2">
            <span className="font-mono text-sm text-retro-charcoal">
              {experiences[activeTab].period}
            </span>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white border-2 border-retro-grey-dark p-6">
          <div className="absolute inset-0 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)] pointer-events-none" />
          <h3 className="font-mono text-sm text-retro-grey-dark mb-3">Achievements:</h3>
          <ul className="space-y-2">
            {experiences[activeTab].achievements.map((achievement, index) => (
              <li key={index} className="flex gap-3 font-mono text-sm text-retro-charcoal">
                <span className="text-retro-grey-dark">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-mono text-sm text-retro-grey-dark mb-3">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {experiences[activeTab].tech.map((tech, index) => {
              return (
                <Tooltip
                  key={index}
                  title={tech.name}
                  details={[
                    tech.role,
                    `Used for: ${tech.use}`
                  ]}
                >
                  <span
                    className="px-2 py-1 font-mono bg-[#E5E5E5] border-2 border-[#808080] text-[#3C3C3C] shadow-[1px_1px_0px_rgba(0,0,0,0.15)] hover:bg-[#F0F0F0] hover:border-[#00D9FF] hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_rgba(0,217,255,0.3)] transition-all duration-200 cursor-default inline-block"
                    style={{
                      fontSize: '12px',
                      height: '28px',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                  >
                    {tech.name}
                  </span>
                </Tooltip>
              );
            })}
          </div>
        </div>

        {/* Achievement Progress */}
        <div className="bg-retro-grey border-2 border-retro-grey-dark p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-sm text-retro-charcoal">Career Progress</span>
            <span className="font-mono text-sm text-retro-charcoal">
              Level {experiences.length - activeTab} / {experiences.length}
            </span>
          </div>
          <div className="h-4 bg-white border-2 border-retro-grey-dark overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500"
              style={{ width: `${((experiences.length - activeTab) / experiences.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </Window>
  );
}
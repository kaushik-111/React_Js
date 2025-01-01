import React from 'react';
import './Skills.css'; // Import the CSS file

const skillsData = [
  { name: 'HTML', percentage: 95, barClass: 'htmlBar' },
  { name: 'CSS3', percentage: 70, barClass: 'cssBar' },
  { name: 'jQuery', percentage: 85, barClass: 'jsBar' },
  { name: 'Bootstrap', percentage: 90, barClass: 'javaBar' },
  { name: 'JavaScript', percentage: 75, barClass: 'ccpBar' },
  { name: 'React js', percentage: 80, barClass: 'reactBar' },
  { name: 'Node.js', percentage: 60, barClass: 'nodeBar' },
  { name: 'Express.js', percentage: 70, barClass: 'sqlBar' },
  { name: 'MySQL', percentage: 85, barClass: 'sqlBar' },
  { name: 'MongoDB', percentage: 80, barClass: 'sqlBar' },
];

export default function Skills() {
  return (
    <div className="skills">
      <p className="skl">MY SKILLS :</p>
      <p className="skl sklLine">_________</p>
      {skillsData.map((skill, index) => (
        <div key={index} className={`ProgWidth`}>
          <div className="p">
            <p>{skill.name}</p>
          </div>
          <div className="pp">
            <div className="skillDiv">
              <span
                className={`skillBar ${skill.barClass}`}
                style={{ width: `${skill.percentage}%` }}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

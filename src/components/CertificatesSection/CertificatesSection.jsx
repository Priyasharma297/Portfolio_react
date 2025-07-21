import React from 'react';
import CertificateCard from './CertificateCard';
import './CertificateSection.css';

const CertificatesSection = () => {
  const certificates = [
    {
      title: 'HackOn With Amazon - Season 4',
      organization: 'Amazon',
      imageSrc: 'images/amazon.jpg',
      altText: 'HackOn Certificate',
      description: 'Participated in Season 4 of HackOn with Amazon focusing on cloud solutions and problem-solving.'
    },
    {
      title: 'IBM SkillsBuild Summer Internship',
      organization: 'IBM',
      imageSrc: 'images/ibm.jpg',
      altText: 'IBM SkillsBuild Internship Certificate',
      description: 'Completed virtual internship with modules on AI, Soft Skills, and Project Development.'
    },
    {
  title: 'SQL (Advanced) Certificate',
  organization: 'HackerRank',
  imageSrc: 'images/sql_advance.png',
  altText: 'SQL Advanced Certificate',
  description: 'Completed the SQL (Advanced) assessment on HackerRank, demonstrating strong query skills.'
},

   {
  title: 'Extended Contributor - GirlScript Summer of Code',
  organization: 'GirlScript Foundation',
  imageSrc: 'images/girlScript.jpg',
  altText: 'GirlScript Summer of Code Certificate',
  description: 'Contributed actively to open-source projects during GSSoC, receiving the Extended Contributor recognition.'
}
  ];

  return (
    <section id="certificates">
      <br /><br />
      <div className='ac'>
        <h2>ACHIEVEMENTS</h2>
        <p>Recognitions and certificates earned along my learning journey</p>
      </div>
      <br />
      <div className="cert">
        {certificates.map((certificate, index) => (
          <CertificateCard 
            key={index}
            title={certificate.title}
            organization={certificate.organization}
            imageSrc={certificate.imageSrc}
            altText={certificate.altText}
            description={certificate.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;

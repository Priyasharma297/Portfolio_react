import React from 'react';

const ProjectItem = ({ imageSrc, projectName, description, frontend, backend, githubLink, liveLink }) => {
  const renderTechnologies = (label) => {
    if (!label) return null;
    const techs = label.replace(/^Frontend: |^Backend: /, '').split(',').map(tech => tech.trim());
    return (
      <div className="tech-badges">
        {techs.map((tech, idx) => (
          <span key={idx} className="tech-pill">{tech}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="project-container">
      <div className="project-header">
        <img src={imageSrc} alt={`${projectName} Image`} className="project-image" />
        <h2 className="project-name">{projectName}</h2>
      </div>

      <div className="project-details">
        <p className="description">{description}</p>

        {frontend && (
          <div className="tech-section">
            <strong style={{ color: '#2d5092ff' }}>Frontend:</strong> {renderTechnologies(frontend)}
          </div>
        )}

        {backend && (
          <div className="tech-section">
            <strong style={{ color: '#2d5092ff' }}>Backend:</strong> {renderTechnologies(backend)}
          </div>
        )}

        <div className="project-links" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="btn-link" style={{ textDecoration: 'none', color: '#d1d8e5ff', fontWeight: '500' }}>🔗 GitHub</a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer" className="btn-link live" style={{ textDecoration: 'none', color: '#d1d8e5ff', fontWeight: '500' }}>🚀 Live Project</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

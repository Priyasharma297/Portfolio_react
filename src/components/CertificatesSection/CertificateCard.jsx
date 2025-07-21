import React, { useState } from 'react';

const CertificateCard = ({ title, organization, imageSrc, altText, description }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <div className="certificate-card" onClick={openPopup}>
        <h3>{title}</h3>
        <p><strong>Organised by:</strong> {organization}</p>
        <p className="desc">{description}</p>
        <img src={imageSrc} alt={altText} />
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src={imageSrc} alt={altText} className="popup-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;

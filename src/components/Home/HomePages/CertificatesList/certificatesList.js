import React from 'react';
import './certificatesList.css'
import certificates from '../../../../settings/certificates.json';

const CertificatesList = () => {
  return (
    <div className="certicates-list">
        {certificates.map((c) => {
            return( <Certificate {...c} />)
        })}
    </div>
  );
}

const Certificate = ( {name, date, certificateBy, url } ) =>{
    return(
        <div className="certificate">
            <p className="certificate-name">{name}</p>
            <div className="certificate-info">
            <p className="certificate-by">por {certificateBy}</p>
                <p className="certificate-date">{date}</p>
                <a className="certificate-link" href={url} target='_blank'  rel="noreferrer">
                    Ver Certificado
                </a>
            </div>
        </div>
    )
}

export default CertificatesList;
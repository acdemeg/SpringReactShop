import React from 'react';
import './InfoCardRequest.css';

function InfoCardRequest() {
  return (
    <div className="info-request-form">
      <div className="image-place-request">
        <img src="/upload/products/phone.png" width="120px" height="120px" />
      </div>

      <div style={{ marginBottom: '6px' }}>
        <p>OnePlace</p>
      </div>

      <div style={{ marginBottom: '6px' }}>
        <p style={{ float: 'left' }}>Price &emsp; </p>
        <div className="info-request-form-field"> &nbsp;&nbsp;&nbsp; 500$ </div>
      </div>

      <div style={{ marginBottom: '6px' }}>
        <p style={{ float: 'left' }}>Client &emsp; </p>
        <div className="info-request-form-field">name &nbsp; +7 XXX XXX XX-XX</div>
      </div>

      <div>
        <p style={{ float: 'left' }}>Status &emsp; </p>
        <div className="info-request-form-field" style={{ float: 'left' }}>
          &nbsp; delivered &emsp;
        </div>
        <div>
          <p>
            <button className="button is-rounded is-small action-button" type="submit">
              <p style={{ fontSize: '11pt' }}>action</p>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCardRequest;

import React from 'react';

const Footer = () => {

  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              © {new Date().getFullYear()} SMARTAcres<span className="d-none d-sm-inline-block"> - Crafted with <i className="mdi mdi-heart text-danger"></i> by MikeGh.</span>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
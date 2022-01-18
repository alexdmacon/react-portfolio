import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer font-small special-color-dark pt-4">
                  <div className="container">
        
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a href="https://github.com/alexdmacon" target="_blank" className="btn-floating mx-1">
                  <i className="fab fa-github fa-2x"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/alexdmacon/" target="_blank" className="btn-floating mx-1">
                  <i className="fab fa-linkedin-in fa-2x"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.clippings.me/alexmacon" target="_blank" className="btn-floating mx-1">
                  <i className="far fa-newspaper fa-2x"> </i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
    )
};

export default Footer
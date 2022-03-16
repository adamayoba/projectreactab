import React from 'react';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
     <div class="footer">
       <h3>Adama Bayo</h3>
        <a href='https://github.com/adamayoba' target='_blank' rel="noopener noreferrer"><FaGithub className='github'/></a>
      </div>
  );
};

export default Footer;
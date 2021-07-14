import React from 'react';
import styled from 'styled-components';

const ConteFooter = styled.div`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    border-top: 1px solid #d1d1d1;
`;

const FooterDiv = styled.div`
    /* padding: 1em; */
    /* text-align: center; */
`;

const H5 = styled.h5`
    font-size: 15px;
    padding: 0;
`;

const Footer = () => {
    return (
    
        <ConteFooter>
          <FooterDiv>
          <H5> My unsplash por @codigoBitmx 2021</H5>
          </FooterDiv>
        </ConteFooter>

     );
}
 
export default Footer;
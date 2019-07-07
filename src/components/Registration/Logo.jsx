import React from 'react';
import styled from 'styled-components';

const Logo = ({ designCuts }) => {
  return (
    <CodeUnite props={designCuts}>
      <span>C</span>U
    </CodeUnite>
  );
};

export default Logo;

const CodeUnite = styled.div`
  font-size: ${({ props }) => props.fontSize};
  position: relative;

  span::before {
    content: '';
    display: block;
    background-color: ${({ props }) => props.sudoColor || '#ff6384'};
    width: 20px;
    height: 20px;
    position: absolute;
    top: ${({ props }) => props.beforeCut};
    left: 12px;
    border-bottom-right-radius: 20px;
  }

  span::after {
    content: '';
    display: block;
    background-color: ${({ props }) => props.sudoColor || '#ff6384'};
    width: 20px;
    height: 20px;
    position: absolute;
    top: ${({ props }) => props.afterCut}
    left: -4px;
    border-bottom-right-radius: 20px;
  }

  &::after {
    content: '';
    display: block;
    background-color: #a24848;
    width: 55px;
    height: ${({ props }) => props.afterHeight || '0.5px'};
    position: absolute;
    top: 100px;
    left: 30px;
    z-index: 1;
    border-radius: 2rem;
    -webkit-box-shadow: 0px 0px 15px 4px rgba(34, 34, 34, 1);
    -moz-box-shadow: 0px 0px 15px 4px rgba(34, 34, 34, 1);
    box-shadow: ${({ props }) =>
      props.afterShadow || '0px 0px 15px 4px rgba(34, 34, 34, 1)'};
  }
`;

// .logo {
//
// }

// .logo span::before {
//   content: '';
//   display: block;
//   background-color: #ff6384;
//   width: 20px;
//   height: 20px;
//   position: absolute;
//   top: 10px;
//   left: 12px;
//   border-bottom-right-radius: 20px;
// }

// .logo span::after {
//   content: '';
//   display: block;
//   background-color: #ff6384;
//   width: 20px;
//   height: 20px;
//   position: absolute;
//   top: 22px;
//   left: -4px;
//   border-bottom-right-radius: 20px;
// }

// .logo::after {
//   content: '';
//   display: block;
//   background-color: #a24848;
//   width: 55px;
//   height: 0.5px;
//   position: absolute;
//   top: 90px;
//   left: 30px;
//   z-index: 1;
//   border-radius: 2rem;
//   -webkit-box-shadow: 0px 0px 15px 4px rgba(34, 34, 34, 1);
//   -moz-box-shadow: 0px 0px 15px 4px rgba(34, 34, 34, 1);
//   box-shadow: 0px 0px 15px 4px rgba(34, 34, 34, 1);
// }

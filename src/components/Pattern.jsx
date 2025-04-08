/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return <AnimatedBackground />;
};

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;

  background: 
    radial-gradient(circle at 100% 50%, #ff00cc 0% 2%, #00ffcc 3% 5%, transparent 6%),
    radial-gradient(circle at 0% 50%, #ff00cc 0% 2%, #00ffcc 3% 5%, transparent 6%),
    radial-gradient(ellipse at 50% 0%, #3300ff 0% 3%, transparent 4%) 10px 10px,
    radial-gradient(circle at 50% 50%, #00ffcc 0% 1%, #ff00cc 2% 3%, #3300ff 4% 5%, transparent 6%) 20px 20px,
    repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 10px, #242424 10px, #242424 20px);

  background-size:
    50px 50px,
    50px 50px,
    40px 40px,
    60px 60px,
    100% 100%;

  animation: shift 15s linear infinite;

  @keyframes shift {
    0% {
      background-position:
        0 0,
        0 0,
        10px 10px,
        20px 20px,
        0 0;
    }
    100% {
      background-position:
        50px 50px,
        -50px -50px,
        60px 60px,
        80px 80px,
        0 0;
    }
  }
`;

export default Pattern;

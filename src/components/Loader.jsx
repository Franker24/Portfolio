import React from 'react';

const Loader = () => {
  return (
    <div style={fullScreenContainer}>
      <style>
        {`
          .hacker-loader {
            position: relative;
            width: 24em;
            height: 6em;
            background-color: #050505;
            border: 0.2em solid #5B42F3; /* Color Purple principal */
            border-radius: 0.8em;
            padding: 1.2em;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(91, 66, 243, 0.3);
          }

          .loader-text {
            text-align: center;
            margin-bottom: 1em;
          }

          .text-glitch {
            color: #AF40FF; /* Color Purple/Pink */
            font-family: 'Courier New', monospace;
            font-size: 1.5em;
            font-weight: bold;
            position: relative;
            display: inline-block;
          }

          .text-glitch::before,
          .text-glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            clip: rect(0, 0, 0, 0);
          }

          .text-glitch::before {
            left: -0.1em;
            text-shadow: 0.1em 0 #00ffff;
            animation: glitch-effect 3s infinite linear alternate-reverse;
          }

          .text-glitch::after {
            left: 0.1em;
            text-shadow: -0.1em 0 #5B42F3;
            animation: glitch-effect 2s infinite linear alternate-reverse;
          }

          .loader-bar {
            width: 100%;
            height: 0.6em;
            background-color: rgba(91, 66, 243, 0.1);
            border-radius: 0.25em;
            position: relative;
            overflow: hidden;
          }

          .bar-fill {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: linear-gradient(90deg, #5B42F3, #AF40FF);
            box-shadow: 0 0 10px #AF40FF;
            animation: bar-fill-animation 2.5s infinite ease-in-out;
          }

          .bar-glitch {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              45deg,
              transparent,
              rgba(175, 64, 255, 0.3),
              transparent
            );
            background-size: 200% 200%;
            animation: bar-glitch-animation 2s infinite linear;
          }

          .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .particle {
            position: absolute;
            width: 0.3em;
            height: 0.3em;
            background-color: #AF40FF;
            border-radius: 50%;
            opacity: 0;
            animation: particle-animation 2s infinite linear;
          }

          .particle:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
          .particle:nth-child(2) { top: 30%; left: 60%; animation-delay: 0.5s; }
          .particle:nth-child(3) { top: 70%; left: 30%; animation-delay: 1s; }
          .particle:nth-child(4) { top: 90%; left: 90%; animation-delay: 1.5s; }
          .particle:nth-child(5) { top: 50%; left: 50%; animation-delay: 2s; }

          @keyframes glitch-effect {
            0% { clip: rect(42px, 9999px, 44px, 0); }
            10% { clip: rect(48px, 9999px, 29px, 0); }
            20% { clip: rect(63px, 9999px, 27px, 0); }
            30% { clip: rect(86px, 9999px, 73px, 0); }
            40% { clip: rect(26px, 9999px, 60px, 0); }
            50% { clip: rect(57px, 9999px, 98px, 0); }
            60% { clip: rect(82px, 9999px, 31px, 0); }
            70% { clip: rect(28px, 9999px, 99px, 0); }
            80% { clip: rect(23px, 9999px, 85px, 0); }
            90% { clip: rect(45px, 9999px, 47px, 0); }
            100% { clip: rect(4px, 9999px, 91px, 0); }
          }

          @keyframes bar-fill-animation {
            0%, 100% { width: 0; left: 0; }
            50% { width: 100%; left: 0; }
          }

          @keyframes bar-glitch-animation {
            0% { background-position: 0 0; }
            100% { background-position: 200% 0; }
          }

          @keyframes particle-animation {
            0% { opacity: 0; transform: translate(0, 0); }
            50% { opacity: 0.8; }
            100% { opacity: 0; transform: translate(3em, -3em); }
          }
        `}
      </style>

      <div className="hacker-loader">
        <div className="loader-text">
          <span data-text="Initializing System..." className="text-glitch">Initializing System...</span>
        </div>
        <div className="loader-bar">
          <div className="bar-fill"></div>
          <div className="bar-glitch"></div>
        </div>
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
    </div>
  );
};

const fullScreenContainer = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#020617', // Match con tu App
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 10000,
};

export default Loader;
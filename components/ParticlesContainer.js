import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  // Initialize the particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Load the particles
  const particlesLoaded = useCallback(async () => {
    // console.log("Particles successfully loaded");
  }, []);

  // Return the Particles component with the necessary options
  return (
    <Particles
      className="max-w-[1400px] h-screen absolute translate-z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },

            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          links: {
            color: "#fff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,

            outModes: {
              default:'bounce'
            },
            random: false,
            speed: 1,
            straight:false
          },
          number: {
            density: {
              enable: true,
              area:800
            },
            value:80
          },
          opacity: {
            value:0.2
          },
          shape: {
            type:"circle"
          },
          size: {
            value:{min:1,max:5}
          },

        },
        detectRetina:true
      }}
    />
  );
};

export default ParticlesContainer;

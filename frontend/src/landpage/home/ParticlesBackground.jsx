import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      className="absolute inset-0"
      options={{
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { speed: 0.5 },
          opacity: { value: 0.5 },
        },
        background: { color: "transparent" }
      }}
    />
  );
}
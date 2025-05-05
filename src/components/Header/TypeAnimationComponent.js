import { TypeAnimation } from "react-type-animation";

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Founder & Developer - ResumeXpert AI",
        1000,
        "Full-Stack Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Frontend Developer",
        1000,
        "Backend Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "1em",
        display: "inline-block",
        color: "var(--color-primary)",
      }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimationComponent;

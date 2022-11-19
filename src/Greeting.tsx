import React, { FC } from "react";

interface GreetingProps {
  greeting: string;
}

const Greeting: FC<GreetingProps> = ({ greeting }) => {
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
};

export default Greeting;

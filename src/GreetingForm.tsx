import React, { FC } from "react";
import Greeting from "./Greeting";

interface GreetingFormProps {
}

const GreetingForm: FC<GreetingFormProps> = () => {
  return (
    <>
      <form>
        <label htmlFor="name">Enter name:</label>
      </form>
      <Greeting greeting="" />
    </>
  );
};

export default GreetingForm;

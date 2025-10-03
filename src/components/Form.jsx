import { useState } from "react";
import { TAB } from "../utils/constants";

const Form = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (index) => {
    setTab(index);
  };

  const ActiveTabComponent = TAB[tab].component;
  return (
    <>
      <div>
        {TAB.map((c, index) => (
          <div
            key={index}
            className="border border-black p-3 m-2 inline-block hover:bg-gray-300 shadow-neutral-400"
          >
            <button
              className="cursor-pointer"
              onClick={() => handleChange(index)}
            >
              {c.name}
            </button>
          </div>
        ))}
      </div>
      <div>
        <ActiveTabComponent />
      </div>
    </>
  );
};

export default Form;

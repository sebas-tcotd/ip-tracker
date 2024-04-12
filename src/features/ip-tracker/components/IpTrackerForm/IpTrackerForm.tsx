import { FormEventHandler, useState } from "react";
import { useIpTrackerContext } from "../../context";

export const IpTrackerForm = () => {
  const { searchByInternetIdentifier } = useIpTrackerContext();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    searchByInternetIdentifier(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center | w-full lg:w-1/2 xl:w-1/3 rounded-2xl overflow-hidden"
    >
      <input
        id="identifier"
        type="text"
        value={inputValue}
        placeholder="Search for any IP address or domain"
        onChange={(event) => setInputValue(event.target.value)}
        className="truncate h-full flex-grow | px-4 border-none focus:outline-none focus:shadow-inner | transition-all"
      />
      <button
        type="submit"
        title="Search"
        className="h-14 w-14 | flex items-center justify-center flex-shrink | bg-black hover:bg-[#202020] active:bg-[#3f3f3f] | transition-all"
      >
        <img src="img/icon-arrow.svg" alt="Search" />
      </button>
    </form>
  );
};

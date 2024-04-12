import { FormEventHandler, useState } from "react";
import { useIpTrackerContext } from "../../context";

export const IpTrackerForm = () => {
  const { searchByInternetIdentifier } = useIpTrackerContext();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    searchByInternetIdentifier(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center | w-full rounded-2xl overflow-hidden"
    >
      <input
        id="identifier"
        type="text"
        value={inputValue}
        placeholder="Search for any IP address or domain"
        onChange={(event) => setInputValue(event.target.value)}
        className="truncate h-full flex-grow | px-4"
      />
      <button
        type="submit"
        title="Search"
        className="h-14 w-14 | flex items-center justify-center flex-shrink | bg-black"
      >
        <img src="img/icon-arrow.svg" alt="Search" />
      </button>
    </form>
  );
};

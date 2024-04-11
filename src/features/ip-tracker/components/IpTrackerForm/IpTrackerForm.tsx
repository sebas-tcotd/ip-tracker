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
    <form onSubmit={handleSubmit}>
      <input
        id="identifier"
        type="text"
        value={inputValue}
        placeholder="Search for any IP address or domain"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">
        <img src="images/icon-arrow.svg" alt="Search" title="Search" />
      </button>
    </form>
  );
};

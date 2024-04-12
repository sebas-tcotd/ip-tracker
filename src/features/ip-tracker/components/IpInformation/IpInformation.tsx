import { useIpTrackerContext } from "../../context";
import { InformationItem } from "./InformationItem";

export const IpInformation = () => {
  const { keyInformation } = useIpTrackerContext();

  return (
    <div className="bg-white | w-[calc(100%-3rem)] | absolute top-[54%] md:top-[37%] | flex flex-col md:flex-row gap-4 |  rounded-2xl | p-6 | shadow-2xl">
      {Object.entries(keyInformation).map(([key, value]) => (
        <InformationItem item={value} title={key} key={key} />
      ))}
    </div>
  );
};

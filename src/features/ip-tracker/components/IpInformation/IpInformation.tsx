import { useIpTrackerContext } from "../../context";
import { InformationItem } from "./InformationItem";

export const IpInformation = () => {
  const { keyInformation } = useIpTrackerContext();

  return (
    <div className="bg-white md:min-h-40 | w-[calc(100%-3rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-26rem)] | absolute top-[54%] md:top-[75%] | flex flex-col md:flex-row md:justify-between gap-4 | rounded-2xl | p-6 md:px-7 md:py-8 | shadow-2xl">
      {Object.entries(keyInformation).map(([key, value]) => (
        <InformationItem item={value} title={key} key={key} />
      ))}
    </div>
  );
};

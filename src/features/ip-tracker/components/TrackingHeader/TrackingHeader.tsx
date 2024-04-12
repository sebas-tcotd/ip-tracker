import { IpInformation } from "../IpInformation";
import { IpTrackerForm } from "../IpTrackerForm";

export const TrackingHeader = () => {
  return (
    <header className="p-6 | relative | flex flex-col items-center gap-4 flex-grow-[25] sm:flex-grow-[175] md:flex-grow-[9] | bg-mobile-header-texture md:bg-desktop-header-texture bg-cover">
      <h1 className="text-3xl font-medium text-white">IP Address Tracker</h1>
      <IpTrackerForm />
      <IpInformation />
    </header>
  );
};

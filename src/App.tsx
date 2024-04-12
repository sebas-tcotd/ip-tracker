import { Map, TrackingHeader } from "./features/ip-tracker/components";
import { IpTrackerProvider } from "./features/ip-tracker/context";
import { createApiIpRepository } from "./modules/ip-tracker/infrastructure";

function App() {
  const repository = createApiIpRepository();

  return (
    <main className="h-dvh flex flex-col">
      <IpTrackerProvider repository={repository}>
        <TrackingHeader />
        <Map />
      </IpTrackerProvider>
    </main>
  );
}

export default App;

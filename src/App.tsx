import "./App.css";
import { IpTrackerForm } from "./features/ip-tracker/components";
import { IpInformation } from "./features/ip-tracker/components/IpInformation";
import { IpTrackerProvider } from "./features/ip-tracker/context";
import { createApiIpRepository } from "./modules/ip-tracker/infrastructure";

function App() {
  const repository = createApiIpRepository();

  return (
    <IpTrackerProvider repository={repository}>
      <h1>Ip Address Tracker</h1>

      <IpTrackerForm />
      <IpInformation />
    </IpTrackerProvider>
  );
}

export default App;

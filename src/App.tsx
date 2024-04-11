import "./App.css";
import { IpTrackerProvider } from "./features/ip-tracker/IpTrackerContext";
import { createApiIpRepository } from "./modules/ip-tracker/infrastructure";

function App() {
  const repository = createApiIpRepository();

  return (
    <IpTrackerProvider repository={repository}>
      <h1>Ip Address Tracker</h1>

      <form action="">
        <input type="text" />
        <button>
          <img src="images/icon-arrow.svg" alt="search" />
        </button>
      </form>

      <div>
        <h2>Ip Address</h2>
      </div>
    </IpTrackerProvider>
  );
}

export default App;

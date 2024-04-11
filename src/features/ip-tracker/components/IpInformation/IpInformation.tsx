import { useIpTrackerContext } from "../../context";

export const IpInformation = () => {
  const { keyInformation } = useIpTrackerContext();

  return (
    <div>
      <section>
        <h2>Ip Address</h2>
        <p>{keyInformation.ipAddress}</p>
      </section>

      <section>
        <h2>Location</h2>
        <p>{keyInformation.location}</p>
      </section>

      <section>
        <h2>Timezone</h2>
        <p>{keyInformation.timezone}</p>
      </section>

      <section>
        <h2>ISP</h2>
        <p>{keyInformation.isp}</p>
      </section>
    </div>
  );
};

import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

import SimpleAlerts from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts";

import simpleAlertsCode from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts/code";

function Alerts() {
  return (
    <BaseLayout
      title="Alerts"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/alerts" },
        { label: "Alerts" },
      ]}
    >
      <View title="Simple alerts" code={simpleAlertsCode}>
        <SimpleAlerts />
      </View>
    </BaseLayout>
  );
}

export default Alerts;

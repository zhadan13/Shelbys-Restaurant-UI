import MKBox from "components/MKBox";

import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

import TabsSimple from "layouts/sections/navigation/nav-tabs/components/TabsSimple";

import tabsSimpleCode from "layouts/sections/navigation/nav-tabs/components/TabsSimple/code";

function NavTabs() {
  return (
    <BaseLayout
      title="Nav Tabs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
        { label: "Nav Tabs" },
      ]}
    >
      <View title="Tabs simple" code={tabsSimpleCode}>
        <MKBox bgColor="white" py={6}>
          <TabsSimple />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default NavTabs;

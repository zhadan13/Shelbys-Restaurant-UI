import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Page Headers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "Page Headers" },
      ]}
    >
      <View title="Header 1" code={headerOneCode} height="40rem">
        <HeaderOne />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;

import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";

import featuresOneCode from "layouts/sections/page-sections/featuers/components/FeaturesOne/code";

function Features() {
  return (
    <BaseLayout
      title="Features"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/features" },
        { label: "Features" },
      ]}
    >
      <View title="Features 1" code={featuresOneCode}>
        <FeaturesOne />
      </View>
    </BaseLayout>
  );
}

export default Features;

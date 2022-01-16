import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

import formSimpleCode from "layouts/sections/input-areas/forms/components/FormSimple/code";

function Forms() {
  return (
    <BaseLayout
      title="Forms"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/forms" },
        { label: "Forms" },
      ]}
    >
      <View title="Form Simple" code={formSimpleCode}>
        <FormSimple />
      </View>
    </BaseLayout>
  );
}

export default Forms;

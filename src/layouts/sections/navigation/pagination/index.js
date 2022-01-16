import MKBox from "components/MKBox";

import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

import PaginationSimple from "layouts/sections/navigation/pagination/components/PaginationSimple";

import paginationSimpleCode from "layouts/sections/navigation/pagination/components/PaginationSimple/code";

function Pagination() {
  return (
    <BaseLayout
      title="Pagination"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/pagination" },
        { label: "Pagination" },
      ]}
    >
      <View title="Pagination simple" code={paginationSimpleCode}>
        <MKBox py={3}>
          <PaginationSimple />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Pagination;

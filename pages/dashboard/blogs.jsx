import React from 'react';

import DashboardLayout from '../../components/dashboard/DashboardLayout';
import PaginatedBlogTable from "../../components/Table/PaginatedBlogTable";
import { mockBlogData } from "../../constants";
import { columns } from '../../constants';

const BlogManagement = () => {
    const finalData = React.useMemo(() => mockBlogData, []);
    const finalColumnDef = React.useMemo(() => columns, []);
  return (
    <DashboardLayout>
        <PaginatedBlogTable data={finalData} columns={finalColumnDef} />
    </DashboardLayout>
  );
};

export default BlogManagement;
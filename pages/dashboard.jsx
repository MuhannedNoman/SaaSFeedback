import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import EmptyPlan from '@/components/EmptyPlan';
import  Table, { TableSkeleton } from '@/components/Table';
import DashboardWrapper from '@/components/DashboardWrapper';
import fetcher from '@/utils/fetcher';

export default function Dashboard() {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);

  if (!data) {
    return (
      <DashboardWrapper>
        <TableSkeleton />
      </DashboardWrapper>
    );
  }

  return (
    <DashboardWrapper>
      {data.sites ? <Table sites={data.sites} /> : <EmptyPlan />}
    </DashboardWrapper>
  );
}

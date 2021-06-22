import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import EmptyPlan from '@/components/EmptyPlan';
import { SiteTable, TableSkeleton } from '@/components/Table';
import DashboardWrapper from '@/components/DashboardWrapper';
import fetcher from '@/utils/fetcher';

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardWrapper>
        <TableSkeleton />
      </DashboardWrapper>
    );
  }

  return (
    <DashboardWrapper>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyPlan />}
    </DashboardWrapper>
  );
}

import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import EmptyPlan from '@/components/EmptyPlan';
import { FeedbackTable, TableSkeleton } from '@/components/Table';
import DashboardWrapper, {
  FeedbackHeader
} from '@/components/DashboardWrapper';
import fetcher from '@/utils/fetcher';

const Feedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardWrapper>
        <FeedbackHeader />
        <TableSkeleton />
      </DashboardWrapper>
    );
  }

  return (
    <DashboardWrapper>
      <FeedbackHeader />

      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyPlan />
      )}
    </DashboardWrapper>
  );
};

export default Feedback;

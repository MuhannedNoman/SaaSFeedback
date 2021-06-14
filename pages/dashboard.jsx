import { useAuth } from '@/lib/auth';
import EmptyPlan from '@/components/EmptyPlan';

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return <EmptyPlan />;
}

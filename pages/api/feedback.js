import { getUserUserFeedback } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  const { token } = req.headers;

  try {
    const { uid } = await auth.verifyIdToken(token);
    const feedback = await getUserUserFeedback(uid);

    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error });
  }
};

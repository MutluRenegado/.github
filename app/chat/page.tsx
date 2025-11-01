import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import ChatInterface from '@/components/ChatInterface';

export default async function ChatPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/signin');
  }

  return <ChatInterface user={session.user} />;
}

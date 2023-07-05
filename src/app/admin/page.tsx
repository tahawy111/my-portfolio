import { getAuthSession } from '@/lib/auth';
import {} from 'react';

export default async function page() {
    const session = await getAuthSession()

    return (
        <div>Hi: {session?.user.name}</div>
    )
}

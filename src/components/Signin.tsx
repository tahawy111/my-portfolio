import { } from 'react';
import { Icons } from './Icons';
import Link from 'next/link';
import UserAuthForm from './UserAuthForm';

export default function SignIn() {
    
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className="flex flex-col space-y-2 text-center">
                <Icons.logo className='mx-auto h-6 w-6' />
                <h1 className='text-2xl font-semibold tracking-tight'>Welcome Back</h1>
                <p className="text-sm max-w-xs mx-auto text-black/80">
                    By continuing, You will login to Portfolio admin dashboard, only creator can login
                </p>

                {/* sign in form */ }
                <UserAuthForm  />

            </div>
        </div>
    );
}
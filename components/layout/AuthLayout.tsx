import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '../assets/logo/Logo';

interface IAuthLayout {
  children: React.ReactNode;
  noLogo?: boolean;
}

const AuthLayout: React.FC<IAuthLayout> = ({ children, noLogo = false }) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col min-h-screen relative px-5 pt-11 pb-5 gap-5 md:flex-row md:items-center md:justify-center ${
        noLogo ? 'justify-center' : ''
      }`}
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 z-0">
        <Image
          src="/bg-auth.jpeg"
          alt="background"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 overlay-gradient-mobile md:overlay-gradient-desktop"></div>
      </div>
      <section
        className={`flex items-center justify-center z-10 md:w-1/2 ${
          noLogo ? 'hidden' : ''
        }`}
      >
        <div
          className="max-w-[300px] min-w-[120px] w-1/4 md:w-1/2"
          onClick={() => router.push('/')}
        >
          <Logo variant="yellow" className="w-full cursor-pointer" />
        </div>
      </section>
      <main className={`flex justify-center z-10 md:w-1/2`}>
        {/* w-1/2 */} {children}
      </main>
    </div>
  );
};

export default AuthLayout;

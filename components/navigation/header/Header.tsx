import Link from 'next/link';
import IconLogo from '../../assets/logo/IconLogo';
import Plus from '../../assets/svg/Plus';

const Header = () => {
  return (
    <div className="bg-[#1A1E2E] text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <Link href="/">
        <IconLogo className="cursor-pointer" />
      </Link>
      <div className="flex gap-4">
        <Link className="flex gap-2 items-center" href="/create-event/">
          <Plus />
          <span className="text-[#1B4DB1] font-medium">Crear publicación</span>
        </Link>
        <Link href="/log-in" className="font-medium">
          Log In
        </Link>{' '}
        <Link href="/sign-up" className="font-medium">
          Sign Up
        </Link>{' '}
      </div>
    </div>
  );
};

export default Header;

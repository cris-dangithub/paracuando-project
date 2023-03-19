import { useState } from 'react';
import useInputSearch from '../../../lib/hooks/useInputSearch';
import SearchIcon from '../../assets/svg/Search';

export function Footer() {
  const [inputValue, setInputValue] = useState<string>('');

  const { handleSubmit } = useInputSearch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full bg-[url('/footer-banner-mobile.jpg')] h-[480px] bg-center bg-no-repeat bg-cover flex justify-center items-center p-6">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mt-40 relative">
          <input
            className="text-sm py-3 px-6 w-full rounded-full"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
            onChange={handleChange}
            value={inputValue}
            name="search"
          />
          <button className="absolute right-6 top-0 bottom-0 my-auto cursor-pointer outline-none">
            <SearchIcon isActive={inputValue} />
          </button>
        </div>
      </form>
    </div>
  );
}

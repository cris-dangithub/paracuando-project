import { useRouter } from 'next/router';
import React from 'react';

const useInputSearch = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputElement = form.elements.namedItem('search') as HTMLInputElement;
    const inputValue: string = inputElement.value;

    router.push(`/search/${inputValue.replace(/[?/&/=]/g, '')}`);
  };

  return { handleSubmit };
};

export default useInputSearch;

import SearchInput from '../../searchInput/SearchInput';

interface IFooter {
  disableInput?: boolean;
}

export const Footer: React.FC<IFooter> = ({ disableInput = false }) => {
  const variantsIfInput = (): string => {
    if (disableInput) return "h-44 bg-[url('/footer-banner.png')]";
    return "h-[480px] bg-[url('/footer-banner-mobile.jpg')] sm:bg-[url('/footer-banner.png')]";
  };

  return (
    <div
      className={`w-full bg-center bg-no-repeat bg-cover flex justify-center items-center p-6 ${variantsIfInput()}`}
    >
      <div
        className="w-full flex justify-center"
        style={disableInput ? { display: 'none' } : {}}
      >
        <SearchInput />
      </div>
    </div>
  );
};

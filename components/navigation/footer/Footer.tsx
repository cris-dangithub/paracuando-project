import SearchInput from '../../searchInput/SearchInput';

interface IFooter {
  disableInput?: boolean;
}

export const Footer: React.FC<IFooter> = ({ disableInput = false }) => {
  const height = () => {
    if (disableInput) return '!h-44';
    return 'h-[480px] ';
  };

  return (
    <div
      className={`w-full bg-[url('/footer-banner-mobile.jpg')] bg-center bg-no-repeat bg-cover flex justify-center items-center p-6 sm:bg-[url('/footer-banner.png')] ${height()}`}
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

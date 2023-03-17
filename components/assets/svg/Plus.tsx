interface IPlus extends React.ComponentPropsWithRef<'svg'> {
  variant?: 'blue';
}

const Plus: React.FC<IPlus> = ({ variant = 'blue' }) => {
  const color = {
    blue: '#1B4DB1',
  };

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z"
        fill={color[variant]}
      />
    </svg>
  );
};

export default Plus;

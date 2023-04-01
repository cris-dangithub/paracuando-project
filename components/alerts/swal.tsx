import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

interface ISwal2 {
  title: string;
  icon?: SweetAlertIcon;
  props?: SweetAlertOptions;
}

const selectIconColor = (icon: SweetAlertIcon) => {
  if (icon === 'success') return '#f3f243';
  if (icon === 'error') return '#ef3f47';
};

const customSwalAlert = ({ icon = 'success', title, props }: ISwal2) =>
  Swal.fire({
    icon,
    title,
    iconColor: selectIconColor(icon),
    color: '#f8f7fa',
    background: '#1a1e2e',
    buttonsStyling: false,
    customClass: {
      confirmButton: 'bg-[#f3f243] p-3 text-black font-semibold rounded-lg',
    },
    ...props,
  });

export default customSwalAlert;

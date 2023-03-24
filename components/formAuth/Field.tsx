import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ValuesForm } from '../../lib/interfaces/auth.interface';
import { FormFields } from './FormAuthCard';

interface IFields {
  type: HTMLInputTypeAttribute;
  name: ValuesForm;
  label: string;
  register: UseFormRegister<FormFields>;
  placeholder?: string;
}

const Field: React.FC<IFields> = ({
  type,
  name,
  label,
  register,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full ">
      <label htmlFor={name} className="font-semibold text-sm">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(`${name}`)}
        placeholder={placeholder}
        className="w-full p-4 bg-transparent border-2 border-app-grayLight rounded-lg"
      />
    </div>
  );
};

export default Field;

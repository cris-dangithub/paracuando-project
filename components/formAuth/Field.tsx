import React, { HTMLInputTypeAttribute, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ILogin, ValuesForm } from '../../lib/interfaces/auth.interface';
import EyePassIconOculted from '../assets/svg/EyePassIconOculted';
import EyePassIconShowed from '../assets/svg/EyePassIconShowed';

interface IFields {
  type: HTMLInputTypeAttribute;
  name: ValuesForm;
  label: string;
  register: UseFormRegister<ILogin>;
  placeholder?: string;
  dynamicPass?: boolean;
}

const Field: React.FC<IFields> = (props) => {
  const { type, name, label, register, placeholder, dynamicPass } = props;

  const [dynamicType, setDynamicType] =
    useState<HTMLInputTypeAttribute>('password');

  const showPassword = () => {
    if (dynamicType === 'password') return setDynamicType('text');
    setDynamicType('password');
  };
  return (
    <div className="flex flex-col gap-1 w-full ">
      <label htmlFor={name} className="font-semibold text-sm">
        {label}
      </label>
      <div className="relative">
        <input
          type={dynamicPass ? dynamicType : type}
          id={name}
          {...register(`${name}`)}
          placeholder={placeholder}
          className="w-full p-4 bg-transparent border-2 border-app-grayLight rounded-lg"
        />
        <div className="absolute top-0 right-5 bottom-0 flex items-center">
          {dynamicPass ? (
            <button type="button" className="" onClick={showPassword}>
              {dynamicType === 'password' ? (
                <EyePassIconOculted />
              ) : (
                <EyePassIconShowed />
              )}
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Field;

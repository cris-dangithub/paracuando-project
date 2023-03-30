import React, { HTMLInputTypeAttribute, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import {
  ILogin,
  StatusIcon,
  ValuesForm,
} from '../../lib/interfaces/auth.interface';
import ErrorForm from '../assets/svg/ErrorForm';
import EyePassIconOculted from '../assets/svg/EyePassIconOculted';
import EyePassIconShowed from '../assets/svg/EyePassIconShowed';
import SuccessForm from '../assets/svg/SuccessForm';

interface IFields {
  type: HTMLInputTypeAttribute;
  name: ValuesForm;
  label: string;
  register: UseFormRegister<ILogin>;
  placeholder?: string;
  dynamicPass?: boolean;
  statusErrPass?: StatusIcon;
  statusErrEmail?: StatusIcon;
  title?: string;
  onChange?: (_data: string) => void;
}

const Field: React.FC<IFields> = (props) => {
  const {
    type,
    name,
    label,
    register,
    placeholder,
    dynamicPass,
    statusErrPass,
    statusErrEmail,
    title,
    onChange,
  } = props;

  const [dynamicType, setDynamicType] =
    useState<HTMLInputTypeAttribute>('password');

  const [inputValue, setInputValue] = useState<string>('');

  const showPassword = () => {
    if (dynamicType === 'password') return setDynamicType('text');
    setDynamicType('password');
  };

  const handleIcon = () => {
    if (statusErrPass && inputValue) {
      if (statusErrPass === 'error') return <ErrorForm title={title} />;
      return <SuccessForm />;
    }
    if (statusErrEmail && inputValue) {
      console.log(statusErrEmail);
      if (statusErrEmail === 'error') return <ErrorForm title={title} />;
      return <SuccessForm />;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (onChange) onChange(inputValue);
  }, [inputValue]);

  return (
    <div className="flex flex-col gap-1 w-full ">
      <label htmlFor={name} className="font-semibold text-sm">
        {label}
      </label>
      <div className="relative">
        <input
          value={inputValue}
          type={dynamicPass ? dynamicType : type}
          id={name}
          {...register(`${name}`)}
          placeholder={placeholder}
          className="w-full p-4 bg-transparent border-2 border-app-grayLight rounded-lg"
          onChange={handleChange}
          required
        />
        <div className="absolute top-0 right-5 bottom-0 flex items-center gap-2">
          {dynamicPass ? (
            <button
              title={
                dynamicType === 'password'
                  ? 'Ver contraseña'
                  : 'Ocultar contraseña'
              }
              type="button"
              className=""
              onClick={showPassword}
            >
              {dynamicType === 'password' ? (
                <EyePassIconOculted />
              ) : (
                <EyePassIconShowed />
              )}
            </button>
          ) : (
            ''
          )}
          {handleIcon()}
        </div>
      </div>
    </div>
  );
};

export default Field;

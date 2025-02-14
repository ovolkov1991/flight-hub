import React from 'react';

type InputProps = {
  labelText: string;
  name: string;
  placeholder: string;
  errorMessage: string;
  required: boolean;
  type?: string;
};

const TextInput: React.FC<InputProps> = ({
  labelText,
  name,
  placeholder,
  errorMessage,
  required,
  type = 'text',
  ...props
}) => {
  const inputClasses = ['input'];

  if (errorMessage) {
    inputClasses.push('input-border');
  }

  return (
    <div className='mt-4'>
      <label htmlFor={name} className='label'>
        {labelText}
        {required && <span className='text-red-400'> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={inputClasses.join(' ')}
        {...props}
      />
      {errorMessage && <div className='input-error'>{errorMessage}</div>}
    </div>
  );
};

export default TextInput;

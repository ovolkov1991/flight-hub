import { ChangeEvent } from 'react';

type InputProps = {
  labelText: string;
  name: string;
  value: string;
  placeholder: string;
  errorMessage: string;
  required: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const TextInput: React.FC<InputProps> = ({
  labelText,
  name,
  value,
  placeholder,
  errorMessage,
  required,
  onChange,
  type = 'text',
}) => (
  <div className='mt-4'>
    <label htmlFor={name} className='label'>
      {labelText}
      {required && <span className='text-red-400'> *</span>}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      className='input'
      onChange={onChange}
    />
    {errorMessage && <div className='input-error'>{errorMessage}</div>}
  </div>
);

export default TextInput;

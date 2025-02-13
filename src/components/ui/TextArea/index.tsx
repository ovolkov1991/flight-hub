import { ChangeEvent } from 'react';

type TextAreaProps = {
  labelText: string;
  name: string;
  value: string;
  placeholder: string;
  errorMessage: string;
  required: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  type?: string;
  rows?: number;
};

const TextArea: React.FC<TextAreaProps> = ({
  labelText,
  name,
  value,
  placeholder,
  errorMessage,
  required,
  rows = 7,
  onChange,
}) => (
  <div className='mt-4'>
    <label htmlFor={name} className='label'>
      {labelText}
      {required && <span className='text-red-400'> *</span>}
    </label>
    <textarea
      rows={rows}
      name={name}
      placeholder={placeholder}
      required={required}
      className='text-area'
      value={value}
      onChange={onChange}
    />
    {errorMessage && <div className='input-error'>{errorMessage}</div>}
  </div>
);

export default TextArea;

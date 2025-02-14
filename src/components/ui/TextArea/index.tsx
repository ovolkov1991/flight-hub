type TextAreaProps = {
  labelText: string;
  name: string;
  placeholder: string;
  errorMessage: string;
  required: boolean;
  type?: string;
  rows?: number;
};

const TextArea: React.FC<TextAreaProps> = ({
  labelText,
  name,
  placeholder,
  errorMessage,
  required,
  rows = 7,
  ...props
}) => {
  const inputClasses = [
    'text-area',
    errorMessage ? 'ring-red-500' : 'ring-gray-200',
  ];

  return (
    <div className='mt-4'>
      <label htmlFor={name} className='label'>
        {labelText}
        {required && <span className='text-red-400'> *</span>}
      </label>
      <textarea
        rows={rows}
        name={name}
        placeholder={placeholder}
        className={inputClasses.join(' ')}
        {...props}
      />
      {errorMessage && <div className='input-error'>{errorMessage}</div>}
    </div>
  );
};

export default TextArea;

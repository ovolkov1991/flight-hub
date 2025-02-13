type BoxProps = {
  header: string;
  children: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ header, children }) => (
  <div className='border border-gray-200 rounded-md p-4 shadow-sm'>
    <div className='text-gray-500 font-medium text-l'>{header}</div>
    {children}
  </div>
);

export default Box;

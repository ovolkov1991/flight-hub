import Box from '../Box';

type EmptyStateProps = {
  text: string;
  children: React.ReactNode;
};

const EmptyState: React.FC<EmptyStateProps> = ({ text, children }) => (
  <Box header={text}>{children}</Box>
);

export default EmptyState;

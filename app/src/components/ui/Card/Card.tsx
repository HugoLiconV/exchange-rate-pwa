type CardProps = {
  children?: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="bg-white py-4 px-3 rounded-lg">{children}</div>;
}

export default Card;

type ButtonProps = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-black hover:bg-gray-900 text-white py-4 px-4 rounded-lg w-full"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
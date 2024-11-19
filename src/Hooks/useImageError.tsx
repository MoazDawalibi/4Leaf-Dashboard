const useImageError = ({ currentTarget }: any) => {
  currentTarget.onerror = null;
  currentTarget.src = `/Image/user_fake.png`;
};

export default useImageError;

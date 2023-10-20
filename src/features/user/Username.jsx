import { useSelector } from 'react-redux';

function Username() {
  //get some value from global storage
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;

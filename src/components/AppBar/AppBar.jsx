import { useSelector } from "react-redux";

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <div className="flex jc-sb">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;

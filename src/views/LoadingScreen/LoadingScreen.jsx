import Logo from "../../assets/images/loading2.png";
import "./loadingScreen.scss"
const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
      <img alt='logo' src={Logo} />
    </div>
  );
};

export default LoadingScreen;

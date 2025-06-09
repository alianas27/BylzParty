import Logo from '../assets/bylz-party-logo.svg';

const Header = () => {
  return (
    <header className="w-full px-4 py-3 flex justify-center">
      <img src={Logo} alt="Bylz Party Logo" className="h-16 w-auto" />
    </header>
  );
};

export default Header;

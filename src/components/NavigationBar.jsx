import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className='flex fixed top-0 left-0 right-0 z-20 justify-between px-20 py-8 bg-[#f4f6fb]'>
      <h2 className='text-secondary font-semibold text-2xl'>
        Brainly <span className='text-primary'>Reborn</span>
      </h2>

      <ul className='flex font-medium text-xs gap-8'>
        <Link
          to='/beranda'
          className='active:text-secondary hover:text-secondary transition-all duration-500 ease-in-out'>
          Beranda
        </Link>

        <Link
          to='/profil'
          className='active:text-secondary hover:text-secondary transition-all duration-500 ease-in-out'>
          Profil
        </Link>

        <Link
          to='/tentang'
          className='active:text-secondary hover:text-secondary transition-all duration-500 ease-in-out'>
          Tentang
        </Link>

        <Link
          to='/pertanyaan'
          className='active:text-secondary hover:text-secondary transition-all duration-500 ease-in-out'>
          Pertanyaan
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;

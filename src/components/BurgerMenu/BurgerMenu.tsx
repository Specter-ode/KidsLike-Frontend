import UserInfo from '../UserInfo/UserInfo';
import sprite from '../../assets/icons/sprite.svg';
import UserNav from '../UserNav/UserNav';
import { createPortal } from 'react-dom';
import { useAppSelector } from '../../redux/hooks';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

interface IProps {
  onClose: () => void;
}
const BurgerMenu: React.FC<IProps> = ({ onClose }) => {
  const { isAuth } = useAppSelector(store => store.auth);
  const justify = isAuth ? 'justify-between' : 'justify-end';
  return createPortal(
    <div className="fixed top-0 left-0 z-[100] flex h-screen w-screen justify-end  bg-black/30 sLaptop:hidden">
      <aside className="w-[274px] bg-accent-color pt-[14px] lessLaptop:h-full">
        <div className={`flex px-[20px] sTablet:justify-end ${justify}`}>
          {isAuth && (
            <div className="sTablet:hidden">
              <UserInfo />
            </div>
          )}
          <button
            type="button"
            className=" flex h-[26px] w-[26px] items-center justify-center border-none bg-transparent text-main-bg outline-none transition duration-500 hover:scale-125 hover:text-main-color focus:scale-125 focus:text-main-color"
            onClick={onClose}
            aria-label="navigation menu"
          >
            <svg className="fill-current" width={14} height={14}>
              <use href={sprite + '#modal-close'}></use>
            </svg>
          </button>
        </div>
        <div className="mt-[40px] ml-[20px]">
          <LanguageSelector />
        </div>
        <div className="mt-[40px] sTablet:mt-[60px]">
          <UserNav onClose={onClose} />
        </div>
      </aside>
    </div>,
    modalRoot
  );
};

export default BurgerMenu;

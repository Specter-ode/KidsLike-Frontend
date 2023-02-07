import { handleLogout } from '../../redux/auth/auth-operations';
import { useAppDispatch } from '../../redux/hooks';

const UserInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    console.log('logout');
    dispatch(handleLogout());
  };

  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center border-r-2 border-main-bg pr-[16px] sTablet:border-second-color">
          <p className="mr-[8px] flex h-[24px] w-[24px] items-center justify-center rounded-full  bg-third-color text-[16px] font-bold text-main-bg">
            V
          </p>
          <p className=" text-[12px] font-bold text-main-bg sTablet:text-second-color">Email</p>
        </div>
        <button className="pl-[16px] transition duration-500 hover:scale-125" type="button" onClick={() => onLogout()}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px] text-main-bg hover:text-main-color sTablet:text-second-color sTablet:hover:text-third-color"
          >
            <path
              d="M12.6914 13.7812V15.1875C12.6914 16.7384 11.4298 18 9.87891 18H2.8125C1.26164 18 0 16.7384 0 15.1875V2.8125C0 1.26164 1.26164 0 2.8125 0H9.87891C11.4298 0 12.6914 1.26164 12.6914 2.8125V4.21875C12.6914 4.60712 12.3766 4.92188 11.9883 4.92188C11.5999 4.92188 11.2852 4.60712 11.2852 4.21875V2.8125C11.2852 2.03714 10.6543 1.40625 9.87891 1.40625H2.8125C2.03714 1.40625 1.40625 2.03714 1.40625 2.8125V15.1875C1.40625 15.9629 2.03714 16.5938 2.8125 16.5938H9.87891C10.6543 16.5938 11.2852 15.9629 11.2852 15.1875V13.7812C11.2852 13.3929 11.5999 13.0781 11.9883 13.0781C12.3766 13.0781 12.6914 13.3929 12.6914 13.7812ZM17.4852 7.79219L15.9107 6.21771C15.636 5.94305 15.1908 5.94305 14.9163 6.21771C14.6416 6.49223 14.6416 6.93745 14.9163 7.21198L16.0362 8.33203H7.59375C7.20538 8.33203 6.89062 8.64679 6.89062 9.03516C6.89062 9.42352 7.20538 9.73828 7.59375 9.73828H16.0362L14.9163 10.8583C14.6416 11.1329 14.6416 11.5781 14.9163 11.8526C15.0536 11.9899 15.2335 12.0586 15.4134 12.0586C15.5934 12.0586 15.7733 11.9899 15.9107 11.8526L17.4852 10.2781C18.1706 9.59271 18.1706 8.4776 17.4852 7.79219Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default UserInfo;
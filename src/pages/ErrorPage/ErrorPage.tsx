import error404 from '../../assets/img/error404.jpg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section role="alert" className="flex min-h-[100vh] flex-col items-center justify-center">
      <img src={error404} alt="Error 404" className="rounded-[10px]" width={280} height={280} />
      <Link to="/">
        <p className="text-[20px] font-medium text-main-color hover:border-b-[3px] hover:border-accent-color hover:text-accent-color">
          Go to home page
        </p>
      </Link>
    </section>
  );
};

export default ErrorPage;

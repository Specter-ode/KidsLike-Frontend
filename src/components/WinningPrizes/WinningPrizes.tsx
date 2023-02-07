import React from 'react';
import { IAward } from '../../types/Award';
import imageURL from '../../assets/img/hero/img-1.png';

interface IProps {
  awards: IAward[];
}

const WinningPrizes: React.FC<IProps> = ({ awards }) => {
  return (
    <>
      <div className="py-[60px] px-[20px] sTablet:w-[600px] sTablet:py-[52px] sTablet:px-[60px] sTablet:pt-[130px] sTablet:pb-[40px] ">
        {
          <img
            className="lesTablet:w-[132px] absolute left-[50%] top-0 block -translate-x-[50%] sTablet:w-[200px]"
            src={imageURL}
            alt="Congratulations"
          />
        }
        <h2 className="mb-[24px] text-center text-[18px] font-semibold text-main-color sTablet:mb-[32px] sTablet:text-[28px] sLaptop:text-[32px] lessTablet:max-w-[240px]">
          Поздравляем! Ты получаешь:
        </h2>

        <ul className="mx-auto grid w-full grid-cols-award gap-[20px]">
          {awards.map(award => (
            <li key={award.name} className="flex flex-col items-center">
              <img className="mb-[16px] block w-[90px] " src={award.image} alt={award.name} />
              <p className="max-w-[100px] text-center text-[12px] font-bold text-main-color ">{award.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WinningPrizes;
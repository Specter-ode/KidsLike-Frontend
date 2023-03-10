import { getScoreString } from '../../services/helpers/getScoreString';
import OpenCardFormBtn from '../OpenCardFormBtn/OpenCardFormBtn';
import Container from '../Container/Container';
import { useAppSelector } from '../../redux/hooks';
import { getFormattedDateRange } from '../../services/helpers/date';
import text from './text.json';
import useWindowDimensions from '../../services/hooks/useDimensions';

const PlanningPoints: React.FC = () => {
  const { width } = useWindowDimensions();
  const { rewardsPlanned } = useAppSelector(store => store.info.currentChild);
  const { startWeekDate, endWeekDate, lang } = useAppSelector(store => store.auth);
  const week = getFormattedDateRange(startWeekDate, endWeekDate);
  const rewardsString = getScoreString(rewardsPlanned);
  return (
    <>
      <Container>
        <div className="mb-[32px] sTablet:mb-[40px] sLaptop:flex sLaptop:items-center sLaptop:justify-between">
          <div className="text-center sTablet:mb-[20px] sTablet:flex sTablet:justify-center sLaptop:mb-0 sLaptop:items-center">
            <p className="text-[18px] font-normal tracking-widest text-main-color sTablet:mr-[10px] lessTablet:mb-[8px]">
              {text[lang].planAtWeek}
            </p>
            <p className="inline-block rounded-[6px] border border-accent-color px-[15px] py-[6px] text-[12px] font-bold tracking-widest text-main-color">
              {week}
            </p>
          </div>
          <div className="hidden sTablet:mb-[10px] sTablet:flex sTablet:items-center sTablet:justify-center sLaptop:mb-0">
            <p className="text-[14px] font-medium text-second-color">{text[lang].tasksFor}</p>
            <p className="mx-[5px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-fourth-color text-[16px] font-semibold text-main-bg">
              {rewardsPlanned || 0}
            </p>
            <p className="text-[14px] font-medium text-second-color">{rewardsString}</p>
          </div>
          <div className="hidden sTablet:flex sTablet:items-center sTablet:justify-center">
            <p className="mr-[20px] text-[14px] font-medium text-second-color">{text[lang].wantAwardsAddTasks}</p>
            <OpenCardFormBtn />
          </div>
        </div>
      </Container>
      <div className="fixed left-0 bottom-0 z-50 mx-auto h-[66px] w-full bg-second-bg-color py-[14px] sTablet:hidden">
        <Container>
          <div className="relative">
            <div className="relative mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-fourth-color">
              <p
                className={`${
                  width < 400 ? 'left-[-90px] max-w-[100px]' : 'left-[-156px]'
                } absolute  text-[12px] font-medium text-second-color`}
              >
                {text[lang].tasksFor}
              </p>
              <p className="inline text-[16px] font-semibold text-main-bg">{rewardsPlanned || 0}</p>
              <p className="absolute right-[-53px]  text-[12px] font-medium text-second-color">{rewardsString || 0}</p>
            </div>
            <div className="absolute right-[0] top-[-6px] sTablet:hidden">
              <OpenCardFormBtn />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PlanningPoints;

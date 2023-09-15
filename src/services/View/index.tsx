import { theme } from '@constants/theme';
import { getDateData } from '@utils/helpers/getDateData';
import { ThemeProvider } from 'styled-components';
import arrowLeftIcon from '@assets/arrow-left.png';
import arrowRightIcon from '@assets/arrow-right.png';
import { IView } from './types';
import {
  Body,
  CurrentDay,
  CurrentMonthDay,
  DateButton,
  Day,
  Days,
  Month,
  Navigation,
  Week,
  WeekDay,
  Calendar,
} from './styled';
import { IRenderData } from 'src/services/Controller/types';
import { IDecorator } from '@appTypes/index';
import { GlobalStyles, Wrapper } from '@styles/index';
import { DateInput } from '@components/DateInput';

export class View implements IView {
  getView(renderData: IRenderData, decorators: IDecorator) {
    const { calendarDays, currentDate, currentMonth, getNextMonth, getPrevMonth, weekDays, setUserDate } =
      renderData;

    const { date: todayDate, month: todayMonth, year: todayYear } = getDateData(new Date());
    const { datePicker } = decorators;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          {datePicker && <DateInput handlerOnSubmit={setUserDate} />}
          <Calendar>
            <Navigation>
              <DateButton src={arrowLeftIcon} onClick={getPrevMonth} />
              <Month>{currentDate}</Month>
              <DateButton src={arrowRightIcon} onClick={getNextMonth} />
            </Navigation>
            <Body>
              <Week>
                {weekDays.map((day) => (
                  <WeekDay key={day}>{day}</WeekDay>
                ))}
              </Week>
              <Days>
                {calendarDays.map(({ day, month, year }, index) => {
                  let Component;

                  if (day === todayDate && month === todayMonth && year === todayYear) Component = CurrentDay;
                  else if (month === currentMonth) Component = Day;
                  else Component = CurrentMonthDay;

                  return <Component key={String(index)}>{day}</Component>;
                })}
              </Days>
            </Body>
          </Calendar>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

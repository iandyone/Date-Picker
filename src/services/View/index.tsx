import { theme } from '@constants/theme';
import { ThemeProvider } from 'styled-components';
import arrowLeftIcon from '@assets/arrow-left.png';
import arrowRightIcon from '@assets/arrow-right.png';
import { IView } from './types';
import { Body, DateButton, Title, Navigation, Calendar } from './styled';
import { IDecorator, IRenderData } from '@appTypes/index';
import { GlobalStyles, Wrapper } from '@styles/index';
import { DateInput } from '@components/DateInput';
import { DaysView } from '@components/DaysView';
import { MonthsView } from '@components/MonthView';
import { YearsView } from '@components/YearsView';
import { Todos } from '@components/Todos';

export class View implements IView {
  getView(renderData: IRenderData, decorators: IDecorator) {
    const { currentDateString, getNextDate, getPrevDate, setUserDate, titleHandler, currentDate } =
      renderData;
    const { datePicker, view } = decorators;
    const title = getCalendarTitle();

    function getCalendarTitle() {
      if (view === 'decade') {
        const currentYear = currentDateString.slice(-4);
        const startDecade = Math.trunc(+currentYear / 10) * 10;
        const endDecade = startDecade + 10;

        return `${startDecade} — ${endDecade}`;
      }

      if (view === 'year') {
        return currentDateString.slice(-4);
      }

      if (view === 'day') {
        const day = currentDate.getDate();

        return `${day} ${currentDateString}`;
      }

      return currentDateString;
    }

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          {datePicker && <DateInput handlerOnSubmit={setUserDate} />}
          <Calendar>
            <Navigation>
              <DateButton src={arrowLeftIcon} onClick={getPrevDate} />
              <Title onClick={titleHandler}>{title}</Title>
              <DateButton src={arrowRightIcon} onClick={getNextDate} />
            </Navigation>
            <Body>
              {view === 'decade' && <YearsView {...renderData} />}
              {view === 'year' && <MonthsView {...renderData} />}
              {(!view || view === 'month') && <DaysView {...renderData} />}
              {view === 'day' && <Todos {...renderData} />}
            </Body>
          </Calendar>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

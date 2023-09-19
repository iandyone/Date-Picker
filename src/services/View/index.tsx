import { theme } from '@constants/theme';
import { ThemeProvider } from 'styled-components';
import arrowLeftIcon from '@assets/arrow-left.png';
import arrowRightIcon from '@assets/arrow-right.png';
import { IView } from './types';
import { Body, DateButton, Month, Navigation, Calendar } from './styled';
import { IDecorator, IRenderData } from '@appTypes/index';
import { GlobalStyles, Wrapper } from '@styles/index';
import { DateInput } from '@components/DateInput';
import { DaysView } from '@components/DaysView';
import { MonthsView } from '@components/MonthView';
import { YearsView } from '@components/YearsView';

export class View implements IView {
  getView(renderData: IRenderData, decorators: IDecorator) {
    const { currentDate, getNextDate, getPrevDate, setUserDate, titleHandler } = renderData;
    const { datePicker, view } = decorators;
    const title = getCalendarTitle();

    function getCalendarTitle() {
      if (view === 'year') {
        return currentDate.slice(-4);
      }

      if (view === 'decade') {
        const currentYear = currentDate.slice(-4);
        const startDecade = Math.trunc(+currentYear / 10) * 10;
        const endDecade = startDecade + 10;

        return `${startDecade} — ${endDecade}`;
      }

      return currentDate;
    }

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          {datePicker && <DateInput handlerOnSubmit={setUserDate} />}
          <Calendar>
            <Navigation>
              <DateButton src={arrowLeftIcon} onClick={getPrevDate} />
              <Month onClick={titleHandler}>{title}</Month>
              <DateButton src={arrowRightIcon} onClick={getNextDate} />
            </Navigation>
            <Body>
              {view === 'decade' && <YearsView {...renderData} />}
              {view === 'year' && <MonthsView {...renderData} />}
              {(!view || view === 'month') && <DaysView {...renderData} />}
            </Body>
          </Calendar>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

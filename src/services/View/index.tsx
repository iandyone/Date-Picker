import { theme } from '@constants/theme';
import { ThemeProvider } from 'styled-components';
import arrowLeftIcon from '@assets/arrow-left.png';
import arrowRightIcon from '@assets/arrow-right.png';
import { IView } from './types';
import { Body, DateButton, Title, Navigation, Calendar } from './styled';
import { CustomTheme, IDecorator, IRenderData, ITheme } from '@appTypes/index';
import { GlobalStyles, Wrapper } from '@styles/index';
import { DateInput } from '@components/DateInput';
import { DaysView } from '@components/DaysView';
import { MonthsView } from '@components/MonthView';
import { YearsView } from '@components/YearsView';
import { Todos } from '@components/Todos';
import { DateRange } from '@components/DateRange';

export class View implements IView {
  getView(renderData: IRenderData, decorators: IDecorator) {
    const {
      currentDateString,
      getNextDate,
      getPrevDate,
      setUserDate,
      titleHandler,
      currentDate,
      handlerOnContextNextDate,
      handlerOnContextPrevDate,
      minDate,
      maxDate,
      theme: customTheme,
      handlerOnDateRange,
      rangeStart,
      rangeEnd,
    } = renderData;
    const { datePicker, view, range: rangeDecorator } = decorators;
    const title = getCalendarTitle();
    const styles = getStyles(customTheme);

    function getStyles(customTheme: CustomTheme): CustomTheme {
      const styles: CustomTheme = theme;

      if (customTheme) {
        for (const styleKey in theme) {
          if (styleKey in theme) {
            const style = styleKey as keyof ITheme;
            styles[style] = customTheme[style] ?? theme[style];
          }
        }
      }
      return styles;
    }

    function getCalendarTitle() {
      if (view === 'decade') {
        const currentYear = currentDateString.slice(-4);
        const startDecade = Math.max(Math.trunc(+currentYear / 10) * 10, minDate.getFullYear());
        const endDecade = Math.min(startDecade + 10, maxDate.getFullYear());

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
      <ThemeProvider theme={styles}>
        <GlobalStyles />
        <Wrapper>
          {datePicker && <DateInput handlerOnSubmit={setUserDate} maxDate={maxDate} minDate={minDate} />}

          {rangeDecorator && (
            <DateRange
              handlerRange={handlerOnDateRange}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              minDate={minDate}
              maxDate={maxDate}
            />
          )}

          <Calendar>
            <Navigation>
              <DateButton
                src={arrowLeftIcon}
                onClick={getPrevDate}
                onContextMenu={handlerOnContextPrevDate}
              />
              <Title onClick={titleHandler}>{title}</Title>
              <DateButton
                src={arrowRightIcon}
                onClick={getNextDate}
                onContextMenu={handlerOnContextNextDate}
              />
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

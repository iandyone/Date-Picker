import { IDecorator, IRenderData, ITheme } from '@appTypes';
import { CustomTheme, ViewType } from '@appTypes/types';
import arrowLeftIcon from '@assets/arrow-left.png';
import arrowRightIcon from '@assets/arrow-right.png';
import { DateInput } from '@components/DateInput';
import { DateRange } from '@components/DateRange';
import { DayView } from '@components/DaysView';
import { MonthView } from '@components/MonthView';
import { Todos } from '@components/Todos';
import { YearView } from '@components/YearView';
import { theme } from '@constants/theme';
import { GlobalStyles, Wrapper } from '@styles';
import { ThemeProvider } from 'styled-components';

import { Body, Calendar, DateButton, Navigation, RangeClearButton, Title } from './styled';
import { IView } from './types';

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
      hadnlerOnClickClearDateRange,
      minDate,
      maxDate,
      theme: customTheme,
      handlerOnDateRange,
      rangeStart,
      rangeEnd,
    } = renderData;

    const { datePicker: datePickerDecorator, range: rangeDecorator, view } = decorators;
    const title = this.getCalendatTitle(view, currentDateString, minDate, maxDate, currentDate);
    const styles = this.getStyles(customTheme);
    const clearRangeButtonVisability = !(rangeStart || rangeEnd);

    return (
      <ThemeProvider theme={styles}>
        <GlobalStyles />
        <Wrapper>
          {datePickerDecorator && (
            <DateInput
              handlerOnSubmit={setUserDate}
              maxDate={maxDate}
              minDate={minDate}
              data-testid='date-picker'
            />
          )}

          {rangeDecorator && (
            <DateRange
              handlerRange={handlerOnDateRange}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              minDate={minDate}
              maxDate={maxDate}
              data-testid='date-range'
            />
          )}

          <Calendar
            $withRangeDecorator={rangeDecorator!}
            $withClearRangeButton={clearRangeButtonVisability}
            data-testid='date-picker'>
            <Navigation>
              <DateButton
                src={arrowLeftIcon}
                onClick={getPrevDate}
                onContextMenu={handlerOnContextPrevDate}
                data-testid='prev-date-button'
              />
              <Title onClick={titleHandler} data-testid='current-date'>
                {title}
              </Title>
              <DateButton
                src={arrowRightIcon}
                onClick={getNextDate}
                onContextMenu={handlerOnContextNextDate}
                data-testid='next-date-button'
              />
            </Navigation>
            <Body>
              {view === 'decade' && <YearView {...renderData} data-testid='years-view' />}
              {view === 'year' && <MonthView {...renderData} data-testid='month-view' />}
              {(!view || view === 'month') && <DayView {...renderData} data-testid='days-view' />}
              {view === 'day' && <Todos {...renderData} data-testid='todos' />}
            </Body>
          </Calendar>
          {rangeDecorator && (
            <RangeClearButton
              onClick={hadnlerOnClickClearDateRange}
              $visability={clearRangeButtonVisability}
              data-testid='range-clear-button'>
              Clear
            </RangeClearButton>
          )}
        </Wrapper>
      </ThemeProvider>
    );
  }

  private getStyles(customTheme?: CustomTheme): ITheme {
    const styles: ITheme = theme;

    if (customTheme) {
      styles.font = { ...styles.font, ...customTheme.font };
      styles.colors = { ...styles.colors, ...customTheme.colors };
      styles.spaces = { ...styles.spaces, ...customTheme.spaces };
      styles.animation = { ...styles.animation, ...customTheme.animation };
    }

    return styles;
  }

  private getCalendatTitle(
    view: ViewType,
    currentDateString: string,
    minDate: Date,
    maxDate: Date,
    currentDate: Date,
  ) {
    if (view === 'decade') {
      const currentYear = currentDateString.slice(-4);
      const startDecade = Math.trunc(Number(currentYear) / 10) * 10;
      const titleDateFrom = Math.max(startDecade, minDate.getFullYear());
      const endDecade = Math.min(startDecade + 9, maxDate.getFullYear());

      return `${titleDateFrom} — ${endDecade}`;
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
}

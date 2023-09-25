import { CustomTheme, WeekDays } from '@appTypes/index';
import { theme } from '@constants/theme';
import { MAX_DATE, MIN_DATE } from '@constants/variables';
import { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const customTheme: CustomTheme = {
  // fontSize: '14px',
  // textColor: '#000',
  // transition: 'all .3s ease',
  // padding: '5px',
  // hoverColor: '#f1f1f1',
  otherDateColor: '#aaaaaa',
  borderColor: 'red',
  // activeCollor: '#2f80ed',
  // borderRadius: '8px',
  // transformActive: 'scale(0.85)',
};

export const Default: Story = {
  args: {
    // noWeekends: false,
    // weekStart: WeekDays.MONDAY,
    // datePicker: true,
    range: true,
    // todos: true,
    // view: 'month',
    // minDate: new Date(1997, 8),
    // maxDate: new Date(2039, 8),
    customTheme: customTheme,
  },
  argTypes: {
    weekStart: {
      defaultValue: WeekDays.MONDAY,
    },
    datePicker: {
      defaultValue: false,
    },
    view: {
      defaultValue: 'month',
    },
    todos: {
      defaultValue: true,
    },
    minDate: {
      defaultValue: MIN_DATE,
    },
    maxDate: {
      defaultValue: MAX_DATE,
    },
    customTheme: {
      defaultValue: theme,
    },
  },
};

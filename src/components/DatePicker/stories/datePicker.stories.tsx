import { CustomTheme, WeekDays } from '@appTypes/index';
import { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from '..';

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const customTheme: CustomTheme = {
  fontSize: '18px',
  textColor: 'green',
  transition: 'all .3s ease',
  padding: '10px',
  hoverColor: '#f1f1f1',
  otherDateColor: '#aaaaaa',
  borderColor: 'green',
  activeCollor: 'green',
  borderRadius: '16px',
  transformActive: 'scale(0.85)',
  width: '340px',
  height: '340px',
};

export const Default: Story = {};

export const CustomWeekStart: Story = {
  args: {
    weekStart: WeekDays.SUNDAY,
  },
  argTypes: {
    weekStart: {
      defaultValue: WeekDays.SUNDAY,
      description: 'Select the beginning of the week when displaying the month',
    },
  },
};

export const WithNoWeekends: Story = {
  args: {
    noWeekends: true,
  },
  argTypes: {
    noWeekends: {
      defaultValue: false,
      description: 'Enables/disables weekends',
    },
  },
};

export const WithDatePicker: Story = {
  args: {
    datePicker: true,
  },
  argTypes: {
    datePicker: {
      defaultValue: false,
      description: 'Select the start week day for month view',
    },
  },
};

export const WithTodos: Story = {
  args: {
    todos: true,
  },
  argTypes: {
    todos: {
      defaultValue: false,
      describe: 'Enable/disable todos in the day date-picker view',
    },
  },
};

export const WithRange: Story = {
  args: {
    range: true,
  },
  argTypes: {
    range: {
      description:
        'Enable/disable the ability to set the date range. When activated, additional input fields are displayed on the UI for the possibility to enter range boundaries',
    },
  },
};

export const DayView: Story = {
  args: {
    view: 'day',
  },
  argTypes: {
    range: {
      description:
        'Adds new types of calendar view: day, month, year, decade and allows to select the default view',
    },
  },
};

export const MonthView: Story = {
  args: {
    view: 'month',
  },
  argTypes: {
    range: {
      description:
        'Adds new types of calendar view: day, month, year, decade and allows to select the default view',
    },
  },
};

export const YearView: Story = {
  args: {
    view: 'year',
  },
  argTypes: {
    range: {
      description:
        'Adds new types of calendar view: day, month, year, decade and allows to select the default view',
    },
  },
};

export const DecadeView: Story = {
  args: {
    view: 'decade',
  },
  argTypes: {
    range: {
      description:
        'Adds new types of calendar view: day, month, year, decade and allows to select the default view',
    },
  },
};

export const WithDateLimit: Story = {
  args: {
    minDate: new Date(2020, 8, 13),
    maxDate: new Date(2030, 8, 13),
  },
  argTypes: {
    range: {
      description: 'Allows you to set maximum and minimum possible date ',
    },
  },
};

export const WithCustomStyle: Story = {
  args: {
    customTheme: customTheme,
  },
  argTypes: {
    range: {
      description: 'Pass an object with properties to override the component styles',
    },
  },
};

export const CustomWithAllProperties: Story = {
  args: {
    datePicker: true,
    noWeekends: true,
    range: true,
    todos: true,
    view: 'month',
    weekStart: WeekDays.SUNDAY,
    minDate: new Date(2020, 8, 13),
    maxDate: new Date(2030, 8, 13),
    customTheme: customTheme,
  },
};

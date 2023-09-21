import { WeekDays } from '@appTypes/index';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '.';
import { MAX_DATE, MIN_DATE } from '@constants/variables';

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weekStart: WeekDays.MONDAY,
    datePicker: true,
    view: 'month',
    todos: true,
    minDate: new Date(1997, 8),
    maxDate: new Date(2025, 8),
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
  },
};

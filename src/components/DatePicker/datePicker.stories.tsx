import { WeekDays } from '@appTypes/index';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // weekStart: WeekDays.MONDAY,
    // datePicker: false,
    // view: 'month',
  },
  argTypes: {
    weekStart: {
      defaultValue: WeekDays.MONDAY,
    },
    datePicker: {
      defaultValue: false,
    },
    view: {
      defaultValue: null,
    },
  },
};

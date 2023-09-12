import { WeekDays } from '@appTypes/index';
import { Calendar } from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weekStart: WeekDays.MONDAY,
  },
  argTypes: {
    weekStart: {
      defaultValue: WeekDays.MONDAY,
    },
  },
};

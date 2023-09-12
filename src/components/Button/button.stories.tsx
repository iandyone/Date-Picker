import { Button } from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'MyComponent',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      defaultValue: 'red',
      description: 'some description',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'red',
    children: 'Default',
  },
};
export const Secondary: Story = {
  args: {
    color: 'black',
    children: 'Secondary',
  },
};

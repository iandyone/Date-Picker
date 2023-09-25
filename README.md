<h1 align="center">Date-Picker Library</h1>
<p align="center">A simple react date picker component with custom settings</p>

## Demo
[Storybook deploy link](https://date-picker-pdz1jhuln-iandyone.vercel.app/)


## Installation

```sh
npm install date-picker-iandyone
```

<p>or</p>

```sh
yarn add date-picker-iandyone
```

## Usage

<p>Import the DatePicker components from date-picker-iandyone</p>

```sh
import { DatePicker } from 'date-picker-iandyone'
```

<p>Now you can render it like a normal react component</p>


```sh
import { DatePicker } from 'date-picker-iandyone';

const YourComponent = () => {

  ...

  return <DatePicker />
}

```

![image](https://github.com/Date-Picker-iandyone/assets/84668094/a9410bdc-e487-475c-8598-31f752d6a4da)

<p>In the basic version, the component displays the current month.</p>
<p>You can move to the next or previous month by clicking the corresponding buttons located at the top of the component.</p>

<p>By default you can click on any of the days to change the date picker view mode. You also can return to the previous view by clicking on the current date header</p>

<p>Also in the basic variant it is possible to switch to the maximum or minimum date of the calendar. By default, the calendar is limited to the time range from January 1, 1990 to January 1, 2100. You can switch to the boundary values by right-clicking on the buttons at the top of the component.</p>

<p>Marking of holidays is also available by default. You can mark any of day by right-clicking on it</p>

## Instance options

<p>You can customize your date-picker by passing props. The list of supported properties and their descriptions are in the table below</p>


| Option         | Type                                | Default   | Description                                                                                                    |
| -------------- | ----------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| `noWeekends?`  | `boolean`                           | `false`   | Enables/disables weekends                                                                                    |
| `weekStart?`   | `'Monday' \| 'Sunday'`              | `'Monday'`| Select the beginning of the week when displaying the month                                                  |
| `datePicker?`  | `boolean`                           | `false`   | Select the start week day for month view                                                                     |
| `range?`       | `boolean`                           | `false`   | Enable/disable the ability to set the date range. When activated, additional input fields are displayed on the UI for the possibility to enter range boundaries |
| `todos?`       | `boolean`                           | `false`   | Enable/disable todos in the day date-picker view                                                            |
| `view?`        | `day \| month \| year \| decade`    | `false`   | Adds new types of calendar view: day, month, year, decade and allows to select the default view   |
| `minDate?`     | Date \| timestamp                   |           | Allows you to set the minimum possible date for the calendar                                   |
| `maxDate?`     | Date \| timestamp                   |           | Allows you to set the maximum possible date for the calendar                                    |
| `customTheme?` | object                              |           | Pass an object with properties to override the component's styles                                    |

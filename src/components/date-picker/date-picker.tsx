import { Component, State, h } from '@stencil/core';
import moment from 'moment';
import { getCalendarDays } from './days';

@Component({
  tag: 'date-picker',
  styleUrl: 'date-picker.css',
  shadow: true
})
export class DatePicker {
  @State() selectedDate: Date;
  @State() month: number;
  @State() year: number;

  constructor() {
    const currentDate = new Date();
    this.selectedDate = currentDate;
    this.month = currentDate.getMonth();
    this.year = currentDate.getFullYear();
  }

  isSelectedDate(date: Date) {
    return date.getMonth() === this.selectedDate.getMonth() &&
      date.getDate() === this.selectedDate.getDate();
  }

  selectDate(date: Date) {
    this.selectedDate = date;
  }

  prevMonth() {
    if (this.month === 0) {
      this.year = this.year - 1;
      this.month = 11;
    } else {
      this.month = this.month - 1;
    }
  }

  render() {
    const monthYear = moment([this.year, this.month]);
    const daysInMonth = getCalendarDays(this.month, this.year);

    return (
      <div>
        <span>Month: {monthYear.format('MMM')}</span>
        <span>Year: {this.year}</span>
        <button onClick={() => this.prevMonth()}>Prev Month</button>
        <button>Next Year</button>
        <div class="month">
          {daysInMonth.map(date => (
            <button
              class={`day ${this.isSelectedDate(date) ? 'current' : ''}`}
              onClick={() => this.selectDate(date)}
            >
              {date.getDate()}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

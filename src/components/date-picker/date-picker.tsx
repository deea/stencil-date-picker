import { Component, State, h } from '@stencil/core';
import moment from 'moment';
import { getCalendarDays } from './days';
import 'ionicons';

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
    this.init();
  }

  init() {
    const currentDate = new Date();
    this.month = currentDate.getMonth();
    this.year = currentDate.getFullYear();
    this.selectedDate = currentDate;
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

  nextMonth() {
    if (this.month === 11) {
      this.year = this.year + 1;
      this.month = 0;
    } else {
      this.month = this.month + 1;
    }
  }

  nextYear() {
    this.year = this.year + 1;
    this.month = 0;
  }

  prevYear() {
    this.year = this.year - 1;
    this.month = 0;
  }

  render() {
    const monthYear = moment([this.year, this.month]);
    const daysInMonth = getCalendarDays(this.month, this.year);

    return (
      <div class='container'>
        <div class='todays-date'>
          <h3>{this.selectedDate.toDateString()}</h3>
        </div>
        <div>
          <div class='date-navigator'>
            <div class='m-y-selector'>
              <button onClick={() => this.prevMonth()}><ion-icon name="arrow-dropleft-circle" class='circle-big'></ion-icon></button>
              <span><p>Month: {monthYear.format('MMM')}</p></span>
              <button onClick={() => this.nextMonth()}><ion-icon name="arrow-dropright-circle" class='circle-big'></ion-icon></button>
            </div>
            <div class='m-y-selector'>
              <button onClick={() => this.prevYear()}><ion-icon name="arrow-dropleft-circle" class='circle-big'></ion-icon></button>
              <span><p>Year: {this.year}</p></span>
              <button onClick={() => this.nextYear()}><ion-icon name="arrow-dropright-circle" class='circle-big'></ion-icon></button>
            </div>
          </div>
          <div class="days">
            {moment.weekdaysShort().map(weekday =>
              <button class="day-string">
                <p>{weekday}</p>
              </button>
            )}
          </div>
          <div class="days">
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
        <button onClick={() => this.init()} class="to-date">Today</button>
      </div>
    );
  }
}

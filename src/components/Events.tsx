import React, { FC, useState } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import particis from "../assets/users.svg";

const Events: FC = () => {


  return (
    <section className='events'>

        <div className="addEvents">
            <h1 className="content__text">
                Создать событие
            </h1>
            <button type="submit" className='btn btn__addEvents'>
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.76953 17.4316C3.76953 15.8612 3.76953 14.0354 3.76953 12.2346C3.76953 7.4511 7.64733 3.5735 12.4308 3.5735L29.7535 3.5735C34.537 3.5735 38.4148 7.4513 38.4148 12.2348L38.4148 29.5574C38.4148 34.3409 34.537 38.2187 29.7535 38.2187L12.4308 38.2187C7.64733 38.2187 3.76953 34.3409 3.76953 29.5574L3.76953 24.3607" stroke="black" stroke-width="2.59839" stroke-linecap="round"/>
                <path d="M16.0547 21.1094H26.5547" stroke="black" stroke-width="2.59839" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.3047 15.8613L21.3047 26.3613" stroke="black" stroke-width="2.59839" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label="1 calendar">
            <DateRangeCalendar calendars={1} />
            </DemoItem>
            <div className="today-events">
                <div className="desc">
                    <div className="date">
                        <p>28.10. 2023</p>
                    </div>
                    <div className="name">
                        <h2>CTF 3 курс</h2>
                    </div>
                </div>
            </div>
        </LocalizationProvider>
        <div className="recent-events">
            <div className="recent-title">
                <h2>Недавние события</h2>
                </div>
                <div className="recent-items">
                    <div className="recent-item">
                        <div className="recent-status">
                            <p>Статус: <span>Завершен</span></p>
                        </div>
                        <div className="recent-participants-date">
                            <div className="recent-participants">
                                <img src={particis} alt=""  />
                                <p>Участиник</p>
                            </div>
                            <div className="recent-date">
                                <p>07 окт</p>
                            </div>
                        </div>
                        <div className="name-recent-events">
                            <h2>CTF 2 курс</h2>
                            <button>Подробнее</button>
                        </div>
                    </div>
                </div>
        </div>

    </section>
  );
};

export default Events;

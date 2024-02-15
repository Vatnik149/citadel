import React, { FC, useState } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import particis from "../assets/users.svg";

const Events: FC = () => {


  return (
    <section className='events'>
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

import React, {Fragment, useState} from 'react'
import {Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';


const MerchantCalendar = (props) => {
    
    const localizer = momentLocalizer(moment);
    const events = [{
        start: new Date(),
        end: new Date(),
        title: "Sample date",
        allDay: true
    }];

    return (
        <Fragment>
            <div className="calendar-container" style={{
                height: "100%",
                width: "100%",
                marginTop: "80px"

            }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{
                        height: "80vh",
                        width: "100%"
                    }}
                />
            </div>
        </Fragment>
    )
}

export default MerchantCalendar
import React from "react";
import Event from "./Event.jsx";

const EventList = ({
  events,
  openChat,
  handleIconClick,
  listItems,
  listItemSelected,
  handleXIconOnEventClick,
  allEvents
}) => {
  return (
    <div className="eventList row">
      {events.map(event => {
        return (
          <Event
            key={event.id}
            event={event}
            openChat={openChat}
            handleIconClick={handleIconClick}
            listItems={listItems}
            listItemSelected={listItemSelected}
            handleXIconOnEventClick={handleXIconOnEventClick}
            allEvents={allEvents}
          />
        );
      })}
    </div>
  );
};

EventList.propTypes = {
  events: React.PropTypes.array,
  openChat: React.PropTypes.func,
  handleIconClick: React.PropTypes.func,
  listItems: React.PropTypes.array,
  listItemSelected: React.PropTypes.bool,
  handleXIconOnEventClick: React.PropTypes.func,
  allEvents: React.PropTypes.array,
};

export default EventList;

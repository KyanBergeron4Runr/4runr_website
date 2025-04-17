import React, { useState, useEffect } from 'react';
import '../styles/timeline-progress.css';

interface TimelineEvent {
  title: string;
  description: string;
  duration?: string;
}

interface TimelineProgressProps {
  events: TimelineEvent[];
  currentIndex: number;
}

export default function TimelineProgress({ events, currentIndex }: TimelineProgressProps) {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    setActiveEvent(currentIndex);
  }, [currentIndex]);

  return (
    <div className="timeline-container">
      <div className="timeline-progress">
        <div 
          className="timeline-progress-bar"
          style={{
            width: `${((activeEvent + 1) / events.length) * 100}%`
          }}
        />
        {events.map((event, index) => (
          <div 
            key={index}
            className={`timeline-node ${index <= activeEvent ? 'active' : ''} ${index === activeEvent ? 'current' : ''}`}
            style={{ left: `${(index / (events.length - 1)) * 100}%` }}
          >
            <div className="timeline-content">
              <div className="timeline-title">{event.title}</div>
              {event.duration && <div className="timeline-duration">{event.duration}</div>}
              <div className="timeline-description">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
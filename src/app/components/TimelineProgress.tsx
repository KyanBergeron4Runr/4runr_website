import React, { useState, useEffect, useCallback } from 'react';
import '../styles/timeline-progress.css';

interface TimelineEvent {
  title: string;
  description: string;
  duration?: string;
}

interface TimelineProgressProps {
  events: TimelineEvent[];
  currentIndex: number;
  onTimelineClick: (index: number) => void;
  onTimelineHover: (isHovered: boolean) => void;
}

const TimelineProgress: React.FC<TimelineProgressProps> = ({
  events,
  currentIndex,
  onTimelineClick,
  onTimelineHover,
}) => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNodeClick = useCallback((index: number) => {
    if (!isAnimating && index !== activeEvent) {
      setIsAnimating(true);
      setActiveEvent(index);
      onTimelineClick(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [activeEvent, isAnimating, onTimelineClick]);

  useEffect(() => {
    if (!isAnimating) {
      setActiveEvent(currentIndex);
    }
  }, [currentIndex, isAnimating]);

  return (
    <div className="timeline-container">
      <div className="timeline-progress">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleNodeClick(index)}
            onMouseEnter={() => onTimelineHover(true)}
            onMouseLeave={() => onTimelineHover(false)}
          >
            <div className="timeline-content">
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-duration">{event.duration}</p>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineProgress; 
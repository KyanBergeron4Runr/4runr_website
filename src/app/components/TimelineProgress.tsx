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
  onNodeClick?: (index: number) => void;
}

export default function TimelineProgress({ events, currentIndex, onNodeClick }: TimelineProgressProps) {
  const [activeEvent, setActiveEvent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNodeClick = useCallback((index: number) => {
    if (!isAnimating && index !== activeEvent) {
      setIsAnimating(true);
      setActiveEvent(index);
      onNodeClick?.(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [activeEvent, isAnimating, onNodeClick]);

  useEffect(() => {
    if (!isAnimating) {
      setActiveEvent(currentIndex);
    }
  }, [currentIndex, isAnimating]);

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
            style={{ 
              left: `${(index / (events.length - 1)) * 100}%`,
              transitionDelay: `${Math.abs(index - activeEvent) * 0.1}s`
            }}
            onClick={() => handleNodeClick(index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleNodeClick(index);
              }
            }}
            aria-label={`Timeline step ${index + 1}: ${event.title}`}
          >
            <div className="timeline-content">
              <div className="timeline-title">{event.title}</div>
              {event.duration && (
                <div className="timeline-duration">{event.duration}</div>
              )}
              <div className="timeline-description">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
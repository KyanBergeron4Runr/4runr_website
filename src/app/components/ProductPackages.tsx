'use client';

import React, { useState, useEffect } from 'react';
import '../styles/product-packages.css';

interface TimelineEvent {
  title: string;
  description: string;
  date: string;
}

interface Package {
  title: string;
  price: string;
  timeline: string;
  deployment: string;
  features: string[];
  timelineEvents: TimelineEvent[];
}

const packages: Package[] = [
  {
    title: "Free Consultation & Strategic Blueprint",
    price: "Free",
    timeline: "3–5 Business Days",
    deployment: "Immediate",
    features: [
      "45-Minute Strategic Consultation",
      "AI/Automation Roadmap PDF",
      "Implementation Timeline",
      "ROI Projections",
      "Optional Follow-Up Q&A"
    ],
    timelineEvents: [
      {
        title: "Booking Your Consultation",
        description: "Schedule your strategic session at your convenience",
        date: "Day 1"
      },
      {
        title: "45-Minute Consultation Call",
        description: "Deep dive into your business challenges and goals",
        date: "Day 2-3"
      },
      {
        title: "Roadmap Delivery",
        description: "Receive your personalized AI/Automation action plan",
        date: "Day 4-5"
      },
      {
        title: "Optional Follow-Up",
        description: "Q&A session to prepare for next steps",
        date: "Day 5+"
      }
    ]
  },
  {
    title: "Simple Automation Build & Optimization",
    price: "Custom Quote",
    timeline: "1–3 Weeks",
    deployment: "Phased",
    features: [
      "Discovery and Scoping Session",
      "Access and API Setup",
      "Custom Automation Development",
      "Internal Testing Phase",
      "Client Review and Training",
      "3-Month Optimization Review"
    ],
    timelineEvents: [
      {
        title: "Discovery and Scoping",
        description: "Define processes for automation and plan implementation",
        date: "Week 1"
      },
      {
        title: "Access Setup & Development",
        description: "Configure APIs and build automation workflows",
        date: "Week 1-2"
      },
      {
        title: "Testing & Review",
        description: "Rigorous testing and client walkthrough",
        date: "Week 2-3"
      },
      {
        title: "Deployment & Training",
        description: "Launch automations and train your team",
        date: "Week 3"
      },
      {
        title: "Optimization Review",
        description: "3-month check-in to optimize performance",
        date: "Month 3"
      }
    ]
  },
  {
    title: "Custom AI-Powered Applications",
    price: "Custom Quote",
    timeline: "4–10 Weeks",
    deployment: "Phased",
    features: [
      "Discovery Workshop",
      "Technical Architecture Planning",
      "Custom Application Development",
      "Quality Assurance Testing",
      "User Training Program",
      "3-Month Performance Review"
    ],
    timelineEvents: [
      {
        title: "Discovery Workshop",
        description: "Map features, workflows, and user requirements",
        date: "Week 1"
      },
      {
        title: "Technical Planning",
        description: "Design architecture and integration strategy",
        date: "Week 2"
      },
      {
        title: "Development Phase",
        description: "Build and iterate on your custom application",
        date: "Weeks 3-8"
      },
      {
        title: "Testing & Refinement",
        description: "Quality assurance and user acceptance testing",
        date: "Week 9"
      },
      {
        title: "Deployment & Training",
        description: "Launch application and train your team",
        date: "Week 10"
      },
      {
        title: "Optimization Review",
        description: "3-month performance and scaling assessment",
        date: "Month 3"
      }
    ]
  },
  {
    title: "AI Brain Integration",
    price: "Custom Quote",
    timeline: "2–5 Weeks",
    deployment: "Gradual",
    features: [
      "Discovery Session",
      "Technical Integration Planning",
      "Custom Prompt Library",
      "AI Brain Development",
      "Employee Training Program",
      "5-Month Performance Review"
    ],
    timelineEvents: [
      {
        title: "Discovery Session",
        description: "Define AI brain capabilities and integration points",
        date: "Week 1"
      },
      {
        title: "Technical Setup",
        description: "Configure integrations and data connections",
        date: "Week 2"
      },
      {
        title: "Development Phase",
        description: "Build AI brain and prompt library",
        date: "Weeks 2-4"
      },
      {
        title: "Testing & Training",
        description: "Fine-tune AI responses and train users",
        date: "Week 5"
      },
      {
        title: "Performance Review",
        description: "5-month AI performance optimization",
        date: "Month 5"
      }
    ]
  },
  {
    title: "Full Custom AI Brain Ecosystem",
    price: "Custom Quote",
    timeline: "8–16 Weeks",
    deployment: "Phased",
    features: [
      "Discovery Workshops",
      "Multi-Brain Architecture Design",
      "Department-Specific AI Development",
      "Early Access Program",
      "Company-Wide Training",
      "5-Month Evolution Review"
    ],
    timelineEvents: [
      {
        title: "Discovery Workshops",
        description: "Map department workflows and AI requirements",
        date: "Weeks 1-2"
      },
      {
        title: "Architecture Design",
        description: "Design multi-brain system architecture",
        date: "Weeks 3-4"
      },
      {
        title: "Development Phase",
        description: "Build central and department AI brains",
        date: "Weeks 5-12"
      },
      {
        title: "Early Access Program",
        description: "Train AI champions and gather feedback",
        date: "Weeks 13-14"
      },
      {
        title: "Full Deployment",
        description: "Company-wide rollout and training",
        date: "Weeks 15-16"
      },
      {
        title: "Evolution Review",
        description: "5-month system optimization",
        date: "Month 5"
      }
    ]
  },
  {
    title: "Full Business Automation",
    price: "Custom Quote",
    timeline: "12–24 Weeks",
    deployment: "Phased",
    features: [
      "Full Business Process Audit",
      "Comprehensive Automation Plan",
      "Phase 1 & 2 Development",
      "Staff Training Program",
      "System Integration Support",
      "7-Month Evolution Review"
    ],
    timelineEvents: [
      {
        title: "Business Audit",
        description: "Complete operational process mapping",
        date: "Weeks 1-2"
      },
      {
        title: "Blueprint Creation",
        description: "Design comprehensive automation strategy",
        date: "Weeks 3-4"
      },
      {
        title: "Phase 1 Development",
        description: "Build core operational automations",
        date: "Weeks 5-12"
      },
      {
        title: "Midpoint Review",
        description: "Assess Phase 1 and plan Phase 2",
        date: "Week 13"
      },
      {
        title: "Phase 2 Development",
        description: "Expand automation to additional systems",
        date: "Weeks 14-22"
      },
      {
        title: "Full Deployment",
        description: "Launch and train organization",
        date: "Weeks 23-24"
      },
      {
        title: "Evolution Review",
        description: "7-month optimization assessment",
        date: "Month 7"
      }
    ]
  },
  {
    title: "Full Business Automation + AI Brain Ecosystem",
    price: "Custom Quote",
    timeline: "16–32 Weeks",
    deployment: "Phased",
    features: [
      "Executive Vision Workshop",
      "Complete System Architecture",
      "Phased Development Approach",
      "Early Access Program",
      "Leadership Dashboard",
      "7-Month Innovation Review"
    ],
    timelineEvents: [
      {
        title: "Vision Workshop",
        description: "Align leadership on transformation strategy",
        date: "Weeks 1-2"
      },
      {
        title: "System Architecture",
        description: "Design complete automation and AI ecosystem",
        date: "Weeks 3-4"
      },
      {
        title: "Phase 1: Core Systems",
        description: "Build foundation and master AI brain",
        date: "Weeks 5-16"
      },
      {
        title: "Phase 2: Department AI",
        description: "Develop specialized department systems",
        date: "Weeks 17-28"
      },
      {
        title: "Early Access Program",
        description: "Train champions and refine systems",
        date: "Weeks 29-30"
      },
      {
        title: "Full Deployment",
        description: "Organization-wide launch and training",
        date: "Weeks 31-32"
      },
      {
        title: "Innovation Review",
        description: "7-month transformation assessment",
        date: "Month 7"
      }
    ]
  }
];

export default function ProductPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [activeTimelineEvents, setActiveTimelineEvents] = useState<number[]>([]);

  const handleNext = () => {
    if (!isTransitioning) {
      setDirection('next');
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setDirection('prev');
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + packages.length) % packages.length);
    }
  };

  const handleDotClick = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setDirection(index > currentIndex ? 'next' : 'prev');
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    // Animate timeline events sequentially
    const events = packages[currentIndex].timelineEvents;
    const timeouts: NodeJS.Timeout[] = [];
    
    events.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setActiveTimelineEvents(prev => [...prev, index]);
      }, index * 200); // 200ms delay between each event
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      setActiveTimelineEvents([]);
    };
  }, [currentIndex]);

  return (
    <section className="product-packages">
      <div className="container">
        <div className="section-header">
          <h2>⚡ The 4Runr Partnership Value Journey</h2>
          <p>At 4Runr, we build custom AI infrastructures—not off-the-shelf solutions. Each package below represents a template framework to help guide our discovery and planning process. Every system we build is tailored to your needs and can be expanded over time as your business grows.</p>
          <p className="estimate-disclaimer">* All timelines and pricing are estimates and may vary based on your specific requirements, project complexity, and scope. Final quotes will be provided after detailed consultation.</p>
        </div>

        <div className="slideshow-container">
          <button className="nav-button prev" onClick={handlePrev} aria-label="Previous package">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="package-card">
            <div 
              className={`card-content ${isTransitioning ? 'transitioning' : ''} ${
                direction === 'next' ? 'next-enter' : ''
              }`}
            >
              <h3>{packages[currentIndex].title}</h3>
              <div className="package-details">
                <div className="detail">
                  <span className="label">Price:</span>
                  <span className="value">{packages[currentIndex].price}</span>
                </div>
                <div className="detail">
                  <span className="label">Timeline:</span>
                  <span className="value">{packages[currentIndex].timeline}</span>
                </div>
                <div className="detail">
                  <span className="label">Deployment:</span>
                  <span className="value">{packages[currentIndex].deployment}</span>
                </div>
              </div>
              <div className="features">
                <h4>Includes:</h4>
                <ul>
                  {packages[currentIndex].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="timeline-container">
                <div className="timeline">
                  {packages[currentIndex].timelineEvents.map((event, index) => (
                    <div
                      key={index}
                      className={`timeline-event ${
                        activeTimelineEvents.includes(index) ? 'active' : ''
                      }`}
                    >
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                      <span className="date">{event.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button className="nav-button next" onClick={handleNext} aria-label="Next package">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="navigation-dots">
          {packages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to package ${index + 1}`}
            />
          ))}
        </div>

        <div className="post-deployment">
          <h3>📈 Post-Deployment Flexibility</h3>
          <p>All 4Runr systems are modular and scalable. After initial deployment, you can:</p>
          <ul>
            <li>Add new workflows, departments, or AI brains</li>
            <li>Expand system capacity for scaling teams</li>
            <li>Upgrade AI models and data intelligence layers</li>
            <li>Integrate additional platforms and APIs</li>
            <li>Scope new projects based on future goals</li>
          </ul>
          <p>Every addition is properly scoped, quoted, and aligned with your evolving needs. We ensure you continue scaling intelligently without technical debt. These packages are just the starting point. Your 4Runr System is always built for evolution.</p>
        </div>
      </div>
    </section>
  );
} 
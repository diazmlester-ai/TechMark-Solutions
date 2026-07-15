export interface Topic {
  id: string;
  name: string;
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  topics: string[];
  durationEstimate?: string;
  n8nSimulationStep?: {
    nodes: Array<{ id: string; type: string; label: string; x: number; y: number }>;
    connections: Array<{ from: string; to: string }>;
    description: string;
  };
  zapierSimulationStep?: {
    steps: Array<{ id: string; type: string; label: string; details: string }>;
    description: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface AudienceCard {
  id: string;
  title: string;
  description: string;
  tagline: string;
  iconName: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface ExperienceItem {
  id: string;
  org: string;
  role: string;
  location: string;
  start: string;
  end: string;
  logo: string;
  image: string;
  summary: string;
  url?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "lexington-medical",
    org: "Lexington Medical",
    role: "Mechanical Engineering Intern",
    location: "Bedford, MA",
    start: "May 2025",
    end: "Sept 2025",
    logo: "lovable-uploads/b801bdba-59ca-41f3-8a27-30597db9654e.png",
    image: "lovable-uploads/b801bdba-59ca-41f3-8a27-30597db9654e.png",
    summary: "Developed test fixtures and validation protocols for surgical devices.",
  },
  {
    id: "amazon-robotics",
    org: "Amazon Robotics",
    role: "Hardware / Mechanical Engineering Co-op",
    location: "North Reading, MA",
    start: "June 2024",
    end: "Dec 2024",
    logo: "lovable-uploads/428ee38b-8e7c-4757-9b5f-9a70ea537cce.png",
    image: "lovable-uploads/428ee38b-8e7c-4757-9b5f-9a70ea537cce.png",
    summary: "Contributed to prototyping and testing for new robotic systems and fixtures.",
  },
  {
    id: "jbb",
    org: "JB&B (Jaros, Baum & Bolles)",
    role: "Mechanical Engineering Intern — HVAC",
    location: "Boston, MA",
    start: "June 2023",
    end: "Aug 2023",
    logo: "lovable-uploads/7914e3b1-8fd2-4b4e-a5c6-d6bd278803f3.png",
    image: "lovable-uploads/7914e3b1-8fd2-4b4e-a5c6-d6bd278803f3.png",
    summary: "Supported HVAC design, load calcs, and documentation for commercial projects.",
  },
  {
    id: "tufts",
    org: "Tufts University – School of Engineering",
    role: "B.S. Mechanical Engineering",
    location: "Medford, MA",
    start: "Sept 2021",
    end: "Dec 2025",
    logo: "lovable-uploads/3f60cb96-4f41-49de-9323-ffb213550a78.png",
    image: "lovable-uploads/3f60cb96-4f41-49de-9323-ffb213550a78.png",
    summary: "Coursework and research in robotics, mechatronics, and CAD.",
  },
];

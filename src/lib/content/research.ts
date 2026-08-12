export type ResearchItem = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  category: string;
};

export const researchCategories = [
  "Insider Threats & Behavioral Analysis",
  "Web Security & Malware",
  "Patents",
] as const;

export const publications: ResearchItem[] = [
  {
    title: "An Architecture for Detection and Incident Response of Insider Cyber Threats",
    authors: "Kaushal Bhavsar, Rushal Chauhan, Krunal Panchal, J.S. Shah",
    venue: "National Conference on Technology and Management, SPCE Visnagar",
    year: "2012",
    category: "Insider Threats & Behavioral Analysis",
  },
  {
    title: "An insider cyber threat prediction mechanism based on behavioral analysis",
    authors: "Kaushal Bhavsar, Bhushan H. Trivedi",
    venue: "ICT4SD 2015, Springer · pp. 345–353",
    year: "2016",
    category: "Insider Threats & Behavioral Analysis",
  },
  {
    title: "Predicting Insider Threats by Behavioural Analysis using Deep Learning",
    authors: "Kaushal Bhavsar, Bhushan Trivedi",
    venue: "International Conference on Security & Management · CSREA Press · pp. 97–101",
    year: "2018",
    category: "Insider Threats & Behavioral Analysis",
  },
  {
    title: "Prediction of Insider Cyber Threats Using Behavioral Analysis",
    authors: "Kaushal Bhavsar",
    venue: "PhD thesis, Department of Computer Application and IT, GLS University",
    year: "2021",
    category: "Insider Threats & Behavioral Analysis",
  },
  {
    title: "Detection of Insider Threat Based on Forensic Analysis of Windows",
    authors: "Kaushal Bhavsar, Bhushan Trivedi",
    venue: "ICT Analysis and Applications, Springer Nature Singapore · pp. 565–573",
    year: "2022",
    category: "Insider Threats & Behavioral Analysis",
  },
  {
    title: "Techniques for malware analysis",
    authors: "Savan Gadhiya, Kaushal Bhavsar",
    venue: "International Journal of Advanced Research in Computer Science and Software Engineering",
    year: "2013",
    category: "Web Security & Malware",
  },
  {
    title: "Frontline techniques to prevent web application vulnerability",
    authors: "Shashank Khandelwal, Parthiv Shah, Kaushal Bhavsar, Savita Gandhi",
    venue: "Int. J. Advanced Research in Comput. Sci. Electron. Eng",
    year: "2013",
    category: "Web Security & Malware",
  },
  {
    title: "Computer-based systems configured for malware detection and methods of use thereof",
    authors: "Kaushal Bhavsar",
    venue: "US Patent US 12361127 B1",
    year: "2025",
    category: "Patents",
  },
];

export const satarkLinks = {
  home: "https://satark.org",
  research: "https://satark.org/research/",
  history: "https://satark.org/history/",
  docs: "https://satark.org/docs/",
  github: "https://github.com/kaushalbhavsar/satark",
} as const;

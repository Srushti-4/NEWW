/* ─────────────────────────────────────────────
   CONTENT — edit everything about the site here.
   No React/layout code below: just data.
   ───────────────────────────────────────────── */

export const CONFIG = {
  email:     'srushtimohire04@gmail.com',
  github:    'https://github.com/Srushti-4/my-portfolio',
  kaggle:    'https://www.kaggle.com/srushtikmohire',
  linkedin:  'https://www.linkedin.com/in/srushti-mohire-781528227/',
  resumeUrl: '/resume.pdf',
  calendly:  '', // Add your Calendly link here, e.g. 'https://calendly.com/srushtimohire04/15min'
  formEndpoint: 'https://formsubmit.co/srushtimohire04@gmail.com',
};

export const NAV_LINKS = ['Home', 'About', 'Projects', 'Skills', 'Resume', 'Contact'];
export const NAV_ICONS = { Home: '🏠', About: '👩', Projects: '💻', Skills: '⚡', Resume: '📄', Contact: '✉️' };

export const SKILLS = {
  'Languages': [
    { name: 'Python', icon: '🐍', color: '#fef3c7', level: 90 },
    { name: 'Java', icon: '☕', color: '#fee2e2', level: 85 },
    { name: 'C', icon: '⚙️', color: '#f3f4f6', level: 75 },
    { name: 'C#', icon: '🔷', color: '#dbeafe', level: 70 },
    { name: 'Unix / Shell', icon: '💻', color: '#f3f4f6', level: 72 },
  ],
  'Databases': [
    { name: 'MySQL', icon: '🗄️', color: '#dbeafe', level: 88 },
    { name: 'JDBC', icon: '🔌', color: '#f3f4f6', level: 78 },
    { name: 'Oracle DB', icon: '🟠', color: '#fff7ed', level: 75 },
    { name: 'PostgreSQL', icon: '🐘', color: '#d1fae5', level: 72 },
  ],
  'Frontend Technologies': [
    { name: 'HTML', icon: '🌐', color: '#fee2e2', level: 88 },
    { name: 'CSS', icon: '🎨', color: '#dbeafe', level: 85 },
    { name: 'JavaScript', icon: '', color: '#fef3c7', level: 80, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: '⚛️', color: '#dbeafe', level: 75 },
  ],
  'Backend Frameworks': [
    { name: 'Spring Boot', icon: '', color: '#d1fae5', level: 78, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'REST API', icon: '🔗', color: '#ede9fe', level: 82 },
  ],
  'IDE': [
    { name: 'Eclipse', icon: '', color: '#ede9fe', level: 80, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
    { name: 'VS Code', icon: '', color: '#dbeafe', level: 90, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'IntelliJ', icon: '', color: '#fee2e2', level: 78, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
  ],
  'Data & Cloud': [
    { name: 'Databricks', icon: '', color: '#fce7f3', level: 85, img: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/databricks.svg' },
    { name: 'Snowflake', icon: '❄️', color: '#dbeafe', level: 88 },
    { name: 'Power BI', icon: '📊', color: '#fef3c7', level: 78 },
    { name: 'AWS', icon: '☁️', color: '#fff7ed', level: 72 },
  ],
  'AI / ML': [
    { name: 'Machine Learning', icon: '🤖', color: '#d1fae5', level: 80 },
    { name: 'Data Engineering', icon: '🔧', color: '#ede9fe', level: 90 },
    { name: 'AI / LLM', icon: '🧠', color: '#fce7f3', level: 70 },
  ],
  'Tools & Methods': [
    { name: 'Agile', icon: '🔄', color: '#dbeafe', level: 85 },
    { name: 'Software Testing', icon: '', color: '#d1fae5', level: 80, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
    { name: 'Git', icon: '', color: '#d1fae5', level: 82, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ],
};

export const PROJECTS = [
  {
    title: 'Bank Management System',
    desc: 'Full-featured banking app handling 10K+ simulated transactions daily. Supports account creation, deposits, withdrawals, transfers, and statement generation with role-based access control.',
    stack: ['Java', 'SQL', 'JDBC', 'OOP'],
    color: '#dbeafe',
    code: '',
    live: '',
  },
  {
    title: 'Cybersecurity Threat Detection',
    desc: 'ML pipeline achieving 94% accuracy in classifying network threats. Processes raw traffic logs through feature engineering and anomaly detection to flag malicious patterns in real-time.',
    stack: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    color: '#d1fae5',
    code: '',
    live: '',
  },
  {
    title: 'Question Paper Generation System',
    desc: 'Full-stack web application for automated question paper generation. Faculty can create, manage, and randomize exam papers from a categorized question bank with difficulty levels and subject filtering.',
    stack: ['PHP', 'MySQL', 'PhpMyAdmin', 'Bootstrap', 'Full Stack'],
    color: '#ede9fe',
    code: '',
    live: '',
  },
  {
    title: 'IncidentIQ — AI Agent',
    desc: 'AI-powered incident management system built at GDG Hackathon. Auto-classifies, prioritizes, and routes production incidents using LLMs and RAG-based knowledge retrieval.',
    stack: ['Python', 'FastAPI', 'LLM', 'RAG', 'React'],
    color: '#fef3c7',
    code: '',
    live: '',
  },
];

export const CERTS = [
  { name: 'Snowpro Advanced Data Engineer', issuer: 'Snowflake', date: 'Jan 2026 · Expires Jan 2028' },
  { name: 'Snowpro Core Certified', issuer: 'Snowflake', date: 'Dec 2025' },
  { name: 'Databricks Certified Generative AI Engineer', issuer: 'Databricks', date: 'Dec 2025' },
  { name: 'Databricks Certified Data Engineer Professional', issuer: 'Databricks', date: 'Dec 2025' },
  { name: 'Databricks Certified Data Analyst Associate', issuer: 'Databricks', date: 'Dec 2025' },
  { name: 'Infosys Certified Python Associate', issuer: 'Infosys', date: 'Jul 2025' },
  { name: 'Python For Data Science', issuer: 'Certification Authority', date: 'Jul 2025' },
  { name: 'Java Full-Stack Development', issuer: 'Certification Authority', date: '2024' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2024' },
];

export const EXPERIENCE = [
  {
    company: 'Infosys',
    role: 'System Associate',
    date: 'Jul 2025 – Present · Bengaluru, India',
    tags: ['Python', 'SQL', 'Agile', 'Software Testing', 'Data Engineering'],
    current: true,
  },
  {
    company: 'Infosys',
    role: 'System Associate Trainee',
    date: 'Dec 2024 – Jun 2025 · Mysore, India',
    tags: ['Software Dev', 'Agile', 'Databricks', 'SQL'],
    current: false,
  },
  {
    company: 'Workflow Softwares',
    role: 'Java Intern',
    date: 'Jun 2024 – Sep 2024 · Online',
    tags: ['Core Java', 'JDBC', 'OOP'],
    current: false,
  },
];

export const EDUCATION = [
  { degree: 'Master of Computer Applications (MCA)', institute: 'KLE Technological University – Hubballi', date: 'Feb 2023 – Sep 2024', grade: '8.9 CGPA' },
  { degree: 'Bachelor of Computer Application (BCA)', institute: 'Rani Channamma University, Belagavi', date: 'Jul 2019 – Sep 2022', grade: '85%' },
  { degree: 'PUC (Science)', institute: "SJPN Trust's PU Science College", date: 'Jun 2017 – May 2019', grade: '' },
  { degree: 'SSLC', institute: 'Swami Vivekananda School', date: '', grade: '93.4%' },
];

export const HERO_STATS = [
  ['60%', 'Less Manual Work'],
  ['50K+', 'Records/Day'],
  ['13', 'Certifications'],
  ['94%', 'ML Accuracy'],
];

export const RESUME_SKILLS = ['Python', 'Java', 'C', 'C#', 'Unix', 'MySQL', 'JDBC', 'Oracle DB', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Spring Boot', 'REST API', 'Databricks', 'Snowflake', 'Power BI', 'AWS', 'Machine Learning', 'Data Engineering', 'Agile', 'Software Testing', 'Git', 'Eclipse', 'VS Code', 'IntelliJ'];

export const PROFESSIONAL_SUMMARY = 'I help companies turn messy, siloed data into reliable automated pipelines — so teams can focus on decisions, not data wrangling.';

export const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'GDG Hackathon — IncidentIQ',
    desc: 'Built an AI-powered incident management agent that auto-classifies and routes production incidents using LLMs and RAG.',
    date: '2025',
    tag: 'Hackathon',
  },
  {
    icon: '🎓',
    title: '13 Industry Certifications',
    desc: 'Including Snowpro Advanced Data Engineer, AWS Cloud Practitioner, Databricks Certified, and Java Full-Stack Development.',
    date: '2024–2026',
    tag: 'Certifications',
  },
  {
    icon: '🥇',
    title: '8.9 CGPA — MCA',
    desc: 'Graduated top of class from KLE Technological University with distinction in Data Structures and Algorithms.',
    date: '2024',
    tag: 'Academic',
  },
  {
    icon: '⚡',
    title: 'Pipeline Efficiency at Infosys',
    desc: 'Reduced manual data handling by 60% through automated ETL pipeline with monitoring and alerting system.',
    date: '2025',
    tag: 'Professional',
  },
];

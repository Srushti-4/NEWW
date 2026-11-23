/* ─────────────────────────────────────────────
   CONTENT — edit everything about the site here.
   No React/layout code below: just data.
   ───────────────────────────────────────────── */

export const CONFIG = {
  email:     'srushtimohire04@gmail.com',
  github:    'https://github.com/Srushti-4',
  kaggle:    'https://www.kaggle.com/srushtikmohire',
  linkedin:  'https://www.linkedin.com/in/srushti-mohire-781528227/',
  resumeUrl: '/resume.pdf',
  calendly:  '', // Add your Calendly link here, e.g. 'https://calendly.com/srushtimohire04/15min'
  // FormSubmit's AJAX endpoint (returns JSON). The plain endpoint returns HTML and breaks fetch().
  // NOTE: the very first submission triggers an activation email to the address below — click it once.
  formEndpoint: 'https://formsubmit.co/ajax/srushtimohire04@gmail.com',
  // Web3Forms (preferred — no per-site activation). Get a free key at https://web3forms.com
  // by entering your email; paste it here and the form uses Web3Forms instead of FormSubmit.
  web3formsKey: 'c37511ef-d531-41cb-b93a-d4ae02f4a645',
};

export const NAV_LINKS = ['Home', 'About', 'Projects', 'Skills', 'Resume', 'Contact'];
export const NAV_ICONS = { Home: '🏠', About: '👩', Projects: '💻', Skills: '⚡', Resume: '📄', Contact: '✉️' };

export const SKILLS = {
  'Data Engineering': [
    { name: 'Databricks', icon: '', color: '#fce7f3', img: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/databricks.svg' },
    { name: 'Snowflake', icon: '❄️', color: '#dbeafe' },
    { name: 'SQL', icon: '🗄️', color: '#dbeafe' },
    { name: 'ETL / ELT Pipelines', icon: '🔧', color: '#ede9fe' },
    { name: 'Power BI', icon: '📊', color: '#fef3c7' },
    { name: 'AWS', icon: '☁️', color: '#fff7ed' },
  ],
  'Languages': [
    { name: 'Python', icon: '🐍', color: '#fef3c7' },
    { name: 'Java', icon: '☕', color: '#fee2e2' },
    { name: 'Unix / Shell', icon: '💻', color: '#f3f4f6' },
    { name: 'C / C#', icon: '⚙️', color: '#f3f4f6' },
  ],
  'Databases': [
    { name: 'MySQL', icon: '🗄️', color: '#dbeafe' },
    { name: 'PostgreSQL', icon: '🐘', color: '#d1fae5' },
    { name: 'Oracle DB', icon: '🟠', color: '#fff7ed' },
    { name: 'JDBC', icon: '🔌', color: '#f3f4f6' },
  ],
  'AI / ML': [
    { name: 'Machine Learning', icon: '🤖', color: '#d1fae5' },
    { name: 'Generative AI / LLMs', icon: '🧠', color: '#fce7f3' },
    { name: 'RAG', icon: '📚', color: '#ede9fe' },
  ],
  'Web & Backend': [
    { name: 'Spring Boot', icon: '', color: '#d1fae5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'REST APIs', icon: '🔗', color: '#ede9fe' },
    { name: 'React.js', icon: '⚛️', color: '#dbeafe' },
    { name: 'HTML / CSS / JS', icon: '🌐', color: '#fee2e2' },
  ],
  'Practices & Tools': [
    { name: 'Git', icon: '', color: '#d1fae5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Agile', icon: '🔄', color: '#dbeafe' },
    { name: 'Software Testing', icon: '✅', color: '#d1fae5' },
  ],
};

export const PROJECTS = [
  {
    icon: '🤖',
    title: 'IncidentIQ — AI Agent',
    desc: 'AI-powered incident management system built at GDG Hackathon. Auto-classifies, prioritizes, and routes production incidents using LLMs and RAG-based knowledge retrieval.',
    stack: ['Python', 'FastAPI', 'LLM', 'RAG', 'React'],
    color: '#fef3c7',
    code: '',
    live: '',
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity Threat Detection',
    desc: 'ML pipeline achieving 94% accuracy in classifying network threats. Processes raw traffic logs through feature engineering and anomaly detection to flag malicious patterns.',
    stack: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    color: '#d1fae5',
    code: '',
    live: '',
  },
  {
    icon: '🏦',
    title: 'Bank Management System',
    desc: 'Banking application supporting account creation, deposits, withdrawals, transfers, and statement generation with role-based access control. Built during the Workflow Softwares internship.',
    stack: ['Java', 'SQL', 'JDBC', 'OOP'],
    color: '#dbeafe',
    code: '',
    live: '',
  },
  {
    icon: '📝',
    title: 'Question Paper Generation System',
    desc: 'Full-stack web application for automated question paper generation. Faculty can create, manage, and randomize exam papers from a categorized question bank with difficulty levels and subject filtering.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    color: '#ede9fe',
    code: '',
    live: '',
  },
];

export const CERTS = [
  { name: 'Databricks Certified Machine Learning Professional', issuer: 'Databricks', date: '2025', link: 'https://credentials.databricks.com/e2047535-fbd1-4e4d-a20c-935e818287a4#acc.aXVQlJLT' },
  { name: 'Databricks Certified Machine Learning Associate', issuer: 'Databricks', date: '2025', link: 'https://credentials.databricks.com/8e53dc60-aeab-4190-b19e-b89e88cfa457#acc.VB1LPCG9' },
  { name: 'SnowPro Advanced: Data Engineer', issuer: 'Snowflake', date: '2025', link: 'https://achieve.snowflake.com/1a05bf76-5d08-49fc-9fea-601494067f59#acc.fQAnhpsS' },
  { name: 'SnowPro Core', issuer: 'Snowflake', date: '2025', link: 'https://achieve.snowflake.com/940167df-f2e7-4cc5-a6d2-4f3e835e02f7#acc.ADFvayUR' },
  { name: 'Partner Training — Generative AI & LLMs on Databricks', issuer: 'Databricks', date: '2025', link: 'https://credentials.databricks.com/55697333-71e4-4f13-8dbb-f08eb48d292f#acc.nRNLoywI' },
  { name: 'Databricks Certified Data Engineer Professional', issuer: 'Databricks', date: '2025', link: 'https://credentials.databricks.com/f016ac9f-75f6-4a22-86d2-e63b6c65eb6c#acc.v3ZdWOV5' },
  { name: 'Databricks Certified Generative AI Engineer Associate', issuer: 'Databricks', date: '2025', link: 'https://credentials.databricks.com/444935c1-f83a-45b2-8722-f435083dc46d#acc.2LCfquSl' },
  { name: 'Databricks Certified Data Engineer Associate', issuer: 'Databricks', date: '2025', link: 'https://credentials.databricks.com/ff542b9e-b5bf-4f22-9717-6188dc47656e#acc.w1Pzv37J' },
  { name: 'Databricks Certified Data Analyst Associate', issuer: 'Databricks', date: '2025', link: 'https://credentials.databricks.com/71cd1a07-9654-45a9-b061-1c3e30f3fe2a#acc.1yJ3fM7z' },
  { name: 'Academy Accreditation — AI Agent Fundamentals', issuer: 'Databricks', date: '2025', link: 'https://credentials.databricks.com/5f80af0e-831f-4618-9486-f19926e25633#acc.uTdUbF1y' },
];

export const EXPERIENCE = [
  {
    company: 'Infosys',
    role: 'System Associate',
    date: 'Jul 2025 – Present · Bengaluru, India',
    tags: ['Python', 'SQL', 'Databricks', 'Agile', 'Data Engineering'],
    current: true,
    points: [
      'Build and maintain automated data pipelines using Python, SQL, and Databricks',
      'Work in Agile teams delivering data engineering solutions for business process optimization',
      'Transform and validate data to support analysis and reporting',
    ],
  },
  {
    company: 'Infosys',
    role: 'System Associate Trainee',
    date: 'Dec 2024 – Jun 2025 · Mysore, India',
    tags: ['Software Dev', 'Agile', 'Databricks', 'SQL'],
    current: false,
    points: [
      'Trained in software development, Agile methodologies, and Databricks',
      'Built proficiency in SQL and cloud-based data engineering tools',
    ],
  },
  {
    company: 'Workflow Softwares',
    role: 'Java Intern',
    date: 'Jun 2024 – Sep 2024 · Online',
    tags: ['Core Java', 'JDBC', 'OOP'],
    current: false,
    points: [
      'Developed a Bank Management System using Core Java, JDBC, and OOP',
      'Implemented CRUD operations and transaction handling',
    ],
  },
];

export const EDUCATION = [
  { degree: 'Master of Computer Applications (MCA)', institute: 'KLE Technological University – Hubballi', date: 'Feb 2023 – Sep 2024', grade: '8.9 CGPA' },
  { degree: 'Bachelor of Computer Application (BCA)', institute: 'Rani Channamma University, Belagavi', date: 'Jul 2019 – Sep 2022', grade: '85%' },
  { degree: 'PUC (Science)', institute: "SJPN Trust's PU Science College", date: 'Jun 2017 – May 2019', grade: '' },
  { degree: 'SSLC', institute: 'Swami Vivekananda School', date: '', grade: '93.4%' },
];

// Certification counts are derived from CERTS so they can never drift out of sync.
export const CERT_COUNT = CERTS.length;
export const PRO_CERT_COUNT = CERTS.filter((c) => /professional|advanced/i.test(c.name)).length;

// Flat list used by the scrolling tech marquee.
export const RESUME_SKILLS = Object.values(SKILLS).flat().map((s) => s.name);

export const RESUME_SKILL_GROUPS = [
  ['Data Engineering', 'Databricks, Snowflake, SQL, ETL/ELT pipelines, Power BI, AWS'],
  ['Languages', 'Python, Java, Unix/Shell, C, C#'],
  ['Databases', 'MySQL, PostgreSQL, Oracle DB, JDBC'],
  ['AI / ML', 'Machine Learning, Generative AI / LLMs, RAG'],
  ['Web & Backend', 'Spring Boot, REST APIs, React.js, HTML, CSS, JavaScript'],
  ['Practices & Tools', 'Git, Agile, Software Testing, VS Code, IntelliJ, Eclipse'],
];

export const RESUME_SUMMARY =
  'Data Engineer and System Associate at Infosys, building automated data pipelines with Python, SQL, and Databricks that turn raw data into reliable, analysis-ready systems. Holds Databricks Professional certifications in Data Engineering and Machine Learning, plus SnowPro Advanced: Data Engineer. MCA from KLE Technological University (8.9 CGPA). Motivated to deliver dependable data engineering and business intelligence solutions in collaborative Agile teams.';

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
    title: `${CERT_COUNT} Databricks & Snowflake Certifications`,
    desc: 'Including Databricks Certified Data Engineer Professional, Databricks Machine Learning Professional, and SnowPro Advanced: Data Engineer.',
    date: '2025',
    tag: 'Certifications',
  },
  {
    icon: '🥇',
    title: '8.9 CGPA — MCA',
    desc: 'Master of Computer Applications from KLE Technological University, Hubballi, with a strong grounding in data structures, algorithms, and software engineering.',
    date: '2024',
    tag: 'Academic',
  },
  {
    icon: '⚡',
    title: 'Pipeline Efficiency at Infosys',
    desc: 'Reduced manual data handling by 60% through an automated ETL pipeline with monitoring and alerting.',
    date: '2025',
    tag: 'Professional',
  },
];

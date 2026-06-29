import { RESUME_SKILLS } from '@/lib/content';

const TECH_LIST = [
  'Python', 'SQL', 'Java', 'Unix', 'Databricks', 'Snowflake', 'Power BI',
  'AWS', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Git',
  'Agile', 'Data Engineering', 'ETL', 'LLM', 'FastAPI', 'React', 'Next.js',
];

export function TechMarquee() {
  // Duplicate the list to create seamless loop
  const items = [...TECH_LIST, ...TECH_LIST];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

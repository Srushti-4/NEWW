import './resume-print.css';

export const metadata = {
  title: 'Srushti Mohire — Resume',
};

export default function ResumePage() {
  return (
    <div className="resume-page">
      {/* Header */}
      <header className="rp-header">
        <div>
          <h1 className="rp-name">Srushti Mohire</h1>
          <p className="rp-title">System Associate | Data Engineer | Python Developer</p>
        </div>
        <div className="rp-contact">
          <p>srushtimohire04@gmail.com</p>
          <p>Bengaluru, Karnataka, India</p>
          <p>linkedin.com/in/srushti-mohire-781528227</p>
          <p>kaggle.com/srushtikmohire</p>
        </div>
      </header>

      {/* Summary */}
      <section className="rp-section">
        <h2 className="rp-heading">Summary</h2>
        <p className="rp-text">
          Currently a System Associate at Infosys, contributing to projects that optimize business processes through data transformation, analysis, and automation. Proficient in Python, SQL, Unix, Data Engineering and moderate level of Databricks, Artificial Intelligence, Machine Learning supported by certifications in Python programming and Java full-stack development. Pursued a Master of Computer Applications at KLE Technological University. Holds a Bachelor of Computer Application from Rani Channamma University, Belagavi, and is motivated to leverage technical skills and collaboration to deliver innovative solutions in data engineering and business intelligence.
        </p>
      </section>

      {/* Skills */}
      <section className="rp-section">
        <h2 className="rp-heading">Skills</h2>
        <div className="rp-skills-grid">
          <div><strong>Languages:</strong> Python, Java, C, C#, Unix/Shell</div>
          <div><strong>Databases:</strong> MySQL, JDBC, Oracle DB, PostgreSQL</div>
          <div><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</div>
          <div><strong>Backend:</strong> Spring Boot, REST API</div>
          <div><strong>Data & Cloud:</strong> Databricks, Snowflake, Power BI, AWS</div>
          <div><strong>AI/ML:</strong> Machine Learning, Data Engineering, LLM</div>
          <div><strong>Tools:</strong> Git, Agile, Software Testing, Eclipse, VS Code, IntelliJ</div>
        </div>
      </section>

      {/* Experience */}
      <section className="rp-section">
        <h2 className="rp-heading">Experience</h2>
        <div className="rp-entry">
          <div className="rp-entry-header">
            <div>
              <strong>System Associate</strong>
              <span className="rp-company">Infosys</span>
            </div>
            <span className="rp-date">Jul 2025 – Present</span>
          </div>
          <ul className="rp-list">
            <li>Building automated data pipelines using Python, SQL, and Databricks</li>
            <li>Contributing to Agile teams delivering data engineering solutions</li>
            <li>Optimizing business processes through data transformation and analysis</li>
          </ul>
        </div>
        <div className="rp-entry">
          <div className="rp-entry-header">
            <div>
              <strong>System Associate Trainee</strong>
              <span className="rp-company">Infosys</span>
            </div>
            <span className="rp-date">Dec 2024 – Jun 2025</span>
          </div>
          <ul className="rp-list">
            <li>Trained in Software Development, Agile methodologies, and Databricks</li>
            <li>Developed proficiency in SQL and cloud-based data engineering tools</li>
          </ul>
        </div>
        <div className="rp-entry">
          <div className="rp-entry-header">
            <div>
              <strong>Java Intern</strong>
              <span className="rp-company">Workflow Softwares</span>
            </div>
            <span className="rp-date">Jun 2024 – Sep 2024</span>
          </div>
          <ul className="rp-list">
            <li>Developed Bank Management System using Core Java, JDBC, and OOP</li>
            <li>Implemented CRUD operations and transaction handling</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="rp-section">
        <h2 className="rp-heading">Education</h2>
        <div className="rp-entry">
          <div className="rp-entry-header">
            <div>
              <strong>KLE Technological University - Hubballi (India)</strong>
              <span className="rp-company">Master of Computer Applications - MCA, Computer Engineering</span>
            </div>
            <span className="rp-date">Feb 2023 – Sep 2024</span>
          </div>
          <p className="rp-text">Grade: 8.9 CGPA</p>
        </div>
        <div className="rp-entry">
          <div className="rp-entry-header">
            <div>
              <strong>Rani Channamma University, Belagavi</strong>
              <span className="rp-company">Bachelor of Computer Application, Computer Science</span>
            </div>
            <span className="rp-date">Jul 2019 – Sep 2022</span>
          </div>
          <p className="rp-text">Grade: 85% · Skills: Amazon Web Services (AWS)</p>
        </div>
        <div className="rp-entry">
          <div className="rp-entry-header">
            <div>
              <strong>SJPN Trust&apos;s PU Science College</strong>
              <span className="rp-company">PUC</span>
            </div>
            <span className="rp-date">Jun 2017 – May 2019</span>
          </div>
        </div>
        <div className="rp-entry">
          <div className="rp-entry-header">
            <div>
              <strong>Swami Vivekananda School</strong>
              <span className="rp-company">SSLC</span>
            </div>
          </div>
          <p className="rp-text">Grade: 93.4</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="rp-section">
        <h2 className="rp-heading">Certifications</h2>
        <ul className="rp-cert-list">
          <li>Snowpro Advanced Data Engineer — Snowflake (2026)</li>
          <li>Snowpro Core Certified — Snowflake (2025)</li>
          <li>Databricks Certified — Databricks (2025)</li>
          <li>AWS Cloud Practitioner — Amazon Web Services (2024)</li>
          <li>Python Programming (2024)</li>
          <li>Java Full-Stack Development (2024)</li>
          <li>+ 7 additional certifications</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="rp-section">
        <h2 className="rp-heading">Projects</h2>
        <div className="rp-entry">
          <strong>Bank Management System</strong> — Java, SQL, JDBC, OOP
          <p className="rp-text">Full-featured banking app with account management, transactions, and role-based access control.</p>
        </div>
        <div className="rp-entry">
          <strong>Cybersecurity Threat Detection</strong> — Python, ML, Scikit-learn
          <p className="rp-text">ML pipeline achieving 94% accuracy in classifying network threats.</p>
        </div>
        <div className="rp-entry">
          <strong>Question Paper Generation System</strong> — PHP, MySQL, Bootstrap
          <p className="rp-text">Automated exam paper generation from categorized question banks.</p>
        </div>
        <div className="rp-entry">
          <strong>IncidentIQ — AI Agent</strong> — Python, FastAPI, LLM, RAG
          <p className="rp-text">AI-powered incident management system built at GDG Hackathon.</p>
        </div>
      </section>

      {/* Hobbies */}
      <section className="rp-section">
        <h2 className="rp-heading">Hobbies</h2>
        <p className="rp-text">Reading, Sketching, Music, Traveling, Fitness, Movies</p>
      </section>

      <footer className="rp-footer">
        <p>Open Ctrl+P to save as PDF</p>
      </footer>
    </div>
  );
}

import { useState } from "react";
import "./App.css";

const careers = [
  {
    category: "Technology",
    icon: "💻",
    title: "Software Developer",
    description: "Build websites, applications and software solutions.",
    skills: "JavaScript • React • Programming",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Technology",
    icon: "🌐",
    title: "Web Developer",
    description: "Create modern and interactive websites.",
    skills: "HTML • CSS • JavaScript",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    title: "Data Analyst",
    description: "Turn data into meaningful business insights.",
    skills: "SQL • Excel • Power BI",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    title: "AI / ML Engineer",
    description: "Create intelligent systems using artificial intelligence.",
    skills: "Python • AI • Machine Learning",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Cybersecurity",
    icon: "🔐",
    title: "Cybersecurity Specialist",
    description: "Protect systems, networks and digital information.",
    skills: "Networking • Security • Linux",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Cloud Computing",
    icon: "☁️",
    title: "Cloud Engineer",
    description: "Build and manage modern cloud infrastructure.",
    skills: "AWS • Azure • Cloud",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Banking & Finance",
    icon: "🏦",
    title: "Banking & Finance",
    description:
      "Explore careers in banking, finance and financial services.",
    skills: "Finance • Accounting • Analysis",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Government & Civil Services",
    icon: "🏛️",
    title: "Government Careers",
    description: "Explore careers across India's government sector.",
    skills: "SSC • UPSC • State PSC",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Defence & Police",
    icon: "👮",
    title: "Defence & Police",
    description:
      "Explore careers in defence, police and public safety.",
    skills: "Defence • Police • Public Service",
    image:
      "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Design & Creative",
    icon: "🎨",
    title: "UI/UX Designer",
    description:
      "Design beautiful and user-friendly digital experiences.",
    skills: "Figma • UX • Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Education",
    icon: "👩‍🏫",
    title: "Teaching & Education",
    description:
      "Build a meaningful career in education and teaching.",
    skills: "Teaching • Communication • Subject Skills",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
  },
  {
    category: "Business & Management",
    icon: "📈",
    title: "Business Analyst",
    description:
      "Help organizations make better business decisions.",
    skills: "Analysis • Business • Communication",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
  },
];

const courses = [
  {
    title: "Web Development",
    icon: "💻",
    level: "Beginner",
    description: "HTML, CSS, JavaScript and React fundamentals.",
    progress: 65,
    type: "Programming",
  },
  {
    title: "Python Programming",
    icon: "🐍",
    level: "Beginner",
    description: "Learn Python from the basics to practical projects.",
    progress: 40,
    type: "Programming",
  },
  {
    title: "Data Analytics",
    icon: "📊",
    level: "Intermediate",
    description: "Excel, SQL, Power BI and data visualization.",
    progress: 25,
    type: "Analytics",
  },
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    level: "Beginner",
    description: "Understand AI and machine learning fundamentals.",
    progress: 15,
    type: "Artificial Intelligence",
  },
  {
    title: "Cybersecurity Basics",
    icon: "🔐",
    level: "Beginner",
    description: "Learn networking, security and cyber safety.",
    progress: 10,
    type: "Cybersecurity",
  },
  {
    title: "Cloud Computing",
    icon: "☁️",
    level: "Intermediate",
    description: "Understand cloud platforms and infrastructure.",
    progress: 0,
    type: "Cloud",
  },
];

const menuItems = [
  { name: "Dashboard", icon: "▦" },
  { name: "Career Explorer", icon: "🧭" },
  { name: "Free Courses", icon: "🎓" },
  { name: "Assessment", icon: "📝" },
  { name: "My Roadmap", icon: "🗺️" },
  { name: "Jobs & Internships", icon: "💼" },
  { name: "Resources", icon: "📚" },
  { name: "My Profile", icon: "👤" },
  { name: "Settings", icon: "⚙️" },
];

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [careerFilter, setCareerFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userName, setUserName] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const categories = [
    "All",
    "Technology",
    "Data & Analytics",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Banking & Finance",
    "Government & Civil Services",
    "Defence & Police",
    "Design & Creative",
    "Education",
    "Business & Management",
  ];

  const filteredCareers = careers.filter((career) => {
    const matchesCategory =
      careerFilter === "All" || career.category === careerFilter;

    const matchesSearch =
      career.title.toLowerCase().includes(search.toLowerCase()) ||
      career.category.toLowerCase().includes(search.toLowerCase()) ||
      career.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      alert("Please enter email and password.");
      return;
    }

    if (!registerName) {
      alert("Please create an account first.");
      return;
    }

    setUserName(registerName);
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleRegister = () => {
    if (
      !registerName ||
      !registerEmail ||
      !registerPassword ||
      !confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (registerPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setUserName(registerName);
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowRegister(false);

    setLoginEmail(registerEmail);
    setLoginPassword(registerPassword);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setShowLogin(true);
    setShowRegister(false);
    setLoginEmail("");
    setLoginPassword("");
  };

  const Dashboard = () => (
    <div className="page">
      <section className="hero-dashboard">
        <div className="hero-content">
          <span className="eyebrow light">YOUR CAREER JOURNEY</span>

          <h1>Hello, {userName || "there"}! 👋</h1>

          <p>
            Discover your strengths, explore career possibilities and build
            your future with confidence.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-primary"
              onClick={() => navigate("Career Explorer")}
            >
              Explore Careers <span>→</span>
            </button>

            <button
              className="hero-secondary"
              onClick={() => navigate("Assessment")}
            >
              Take Assessment
            </button>

            {!isLoggedIn && (
              <button
                className="hero-secondary"
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-illustration">🚀</div>

          <div className="hero-floating card-one">🎓 Learn</div>
          <div className="hero-floating card-two">💼 Grow</div>
          <div className="hero-floating card-three">⭐ Achieve</div>
        </div>
      </section>

      <div className="stats">
        <div className="stat">
          <div className="stat-icon purple">🧭</div>
          <div>
            <span>Career Matches</span>
            <strong>8</strong>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon blue">🎓</div>
          <div>
            <span>Courses Started</span>
            <strong>3</strong>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon pink">🏆</div>
          <div>
            <span>Skills Completed</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon green">📈</div>
          <div>
            <span>Journey Progress</span>
            <strong>42%</strong>
          </div>
        </div>
      </div>

      <section className="dashboard-grid">
        <div className="dashboard-card progress-dashboard">
          <div className="card-title-row">
            <div>
              <span className="eyebrow">YOUR PROGRESS</span>
              <h2>Career Journey</h2>
            </div>

            <strong className="progress-number">42%</strong>
          </div>

          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>

          <p className="muted">
            You're on your way! Keep building your skills. 🚀
          </p>

          <div className="mini-steps">
            <div className="mini-step completed">
              <span>✓</span> Discover interests
            </div>

            <div className="mini-step completed">
              <span>✓</span> Explore careers
            </div>

            <div className="mini-step">
              <span>3</span> Build skills
            </div>
          </div>
        </div>

        <div className="dashboard-card assessment-promo">
          <div className="promo-icon">🧠</div>

          <span className="eyebrow">RECOMMENDED FOR YOU</span>

          <h2>Find your ideal career</h2>

          <p>
            Take a short assessment and discover careers that match your
            interests and strengths.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("Assessment")}
          >
            Start Assessment →
          </button>
        </div>
      </section>

      <SectionHeading
        label="EXPLORE"
        title="Popular Career Paths"
        button="View all →"
        onClick={() => navigate("Career Explorer")}
      />

      <div className="career-preview-grid">
        {careers.slice(0, 4).map((career) => (
          <CareerCard
            key={career.title}
            career={career}
            onClick={() => navigate("Career Explorer")}
          />
        ))}
      </div>

      <SectionHeading
        label="LEARN"
        title="Recommended Free Courses"
        button="Explore courses →"
        onClick={() => navigate("Free Courses")}
      />

      <div className="course-preview-grid">
        {courses.slice(0, 3).map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );

  const CareerExplorer = () => (
    <div className="page">
      <PageHeader
        eyebrow="DISCOVER YOUR FUTURE"
        title="Career Explorer 🧭"
        description="Explore career paths across technology, government, business, design, education and more."
      />

      <div className="explorer-search">
        <span>🔍</span>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search careers or categories..."
        />
      </div>

      <div className="category-scroll">
        {categories.map((category) => (
          <button
            key={category}
            className={
              careerFilter === category
                ? "category active"
                : "category"
            }
            onClick={() => setCareerFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="explorer-intro">
        <div>
          <span className="eyebrow">ALL CAREERS</span>
          <h2>Find a path that feels right for you</h2>
        </div>

        <span className="result-count">
          {filteredCareers.length} careers
        </span>
      </div>

      <div className="career-grid-large">
        {filteredCareers.map((career) => (
          <CareerCard key={career.title} career={career} large />
        ))}
      </div>
    </div>
  );

  const FreeCourses = () => (
    <div className="page">
      <PageHeader
        eyebrow="LEARN & GROW"
        title="Free Courses 🎓"
        description="Build practical skills using free learning resources and courses."
      />

      <div className="course-banner">
        <div>
          <span className="eyebrow light">START LEARNING TODAY</span>

          <h2>Skills today. Opportunities tomorrow.</h2>

          <p>
            Explore programming, analytics, AI, cybersecurity, cloud and more.
          </p>
        </div>

        <div className="course-banner-art">📚</div>
      </div>

      <div className="course-filter-row">
        <button className="course-filter active">All Courses</button>
        <button className="course-filter">Programming</button>
        <button className="course-filter">Data</button>
        <button className="course-filter">AI</button>
        <button className="course-filter">Cybersecurity</button>
        <button className="course-filter">Cloud</button>
      </div>

      <div className="course-grid-large">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} large />
        ))}
      </div>
    </div>
  );

  const Assessment = () => (
    <div className="page">
      <PageHeader
        eyebrow="KNOW YOURSELF"
        title="Career Assessment 📝"
        description="Answer a few questions and discover career paths that match your interests."
      />

      <div className="assessment-hero">
        <div className="assessment-visual">
          <div>🧠</div>
          <span>✨</span>
          <span>💡</span>
          <span>🎯</span>
        </div>

        <div className="assessment-content">
          <span className="eyebrow">PERSONALIZED GUIDANCE</span>

          <h2>Which career is right for you?</h2>

          <p>
            Our assessment looks at your interests, strengths and preferred
            working style to suggest career paths that may suit you.
          </p>

          <div className="assessment-features">
            <span>✓ 15 Questions</span>
            <span>✓ Takes about 5 minutes</span>
            <span>✓ Personalized results</span>
          </div>

          <button className="primary-button">
            Start Assessment →
          </button>
        </div>
      </div>
    </div>
  );

  const Roadmap = () => (
    <div className="page">
      <PageHeader
        eyebrow="YOUR JOURNEY"
        title="My Career Roadmap 🗺️"
        description="Follow a simple step-by-step path from discovery to career readiness."
      />

      <div className="roadmap-card">
        <div className="roadmap-progress">
          <div>
            <span className="eyebrow">OVERALL PROGRESS</span>
            <h2>You're 42% there!</h2>
          </div>

          <strong>42%</strong>
        </div>

        <div className="roadmap-line">
          <div></div>
        </div>

        <RoadStep
          number="01"
          title="Discover Your Interests"
          description="Understand your interests, strengths and preferences."
          status="completed"
        />

        <RoadStep
          number="02"
          title="Explore Career Options"
          description="Research different careers and find your best matches."
          status="current"
        />

        <RoadStep
          number="03"
          title="Build Required Skills"
          description="Learn the skills required for your chosen career."
        />

        <RoadStep
          number="04"
          title="Build Projects & Experience"
          description="Create projects, gain experience and strengthen your resume."
        />

        <RoadStep
          number="05"
          title="Become Career Ready"
          description="Prepare your resume, interviews and start applying."
        />
      </div>
    </div>
  );

  const Jobs = () => (
    <div className="page">
      <PageHeader
        eyebrow="OPPORTUNITIES"
        title="Jobs & Internships 💼"
        description="Discover opportunities that can help you take your next career step."
      />

      <div className="opportunity-grid">
        <Opportunity
          icon="💻"
          title="IT Internships"
          description="Explore internships for students and freshers in technology."
        />

        <Opportunity
          icon="🚀"
          title="Fresher Jobs"
          description="Discover entry-level opportunities to start your career."
        />

        <Opportunity
          icon="🏛️"
          title="Government Opportunities"
          description="Find information about government career opportunities and exams."
        />

        <Opportunity
          icon="🌐"
          title="Work From Home"
          description="Explore remote-friendly opportunities and skills."
        />
      </div>

      <div className="info-note">
        <span>💡</span>

        <div>
          <strong>Career opportunity information</strong>

          <p>
            In the next stage, we can connect this section to real job and
            internship sources instead of using sample listings.
          </p>
        </div>
      </div>
    </div>
  );

  const Resources = () => (
    <div className="page">
      <PageHeader
        eyebrow="CAREER RESOURCES"
        title="Resources 📚"
        description="Useful tools and guidance to help you become career ready."
      />

      <div className="resource-grid">
        <Resource
          icon="📄"
          title="Resume Building"
          text="Learn how to create a strong fresher resume."
        />

        <Resource
          icon="🎤"
          title="Interview Preparation"
          text="Prepare for HR and technical interviews."
        />

        <Resource
          icon="🧮"
          title="Aptitude Preparation"
          text="Improve your logical and quantitative skills."
        />

        <Resource
          icon="🗣️"
          title="Communication Skills"
          text="Build confidence in professional communication."
        />

        <Resource
          icon="💻"
          title="Coding Practice"
          text="Improve your programming through practice."
        />

        <Resource
          icon="🛠️"
          title="Project Ideas"
          text="Find practical projects to strengthen your portfolio."
        />
      </div>
    </div>
  );

  const Profile = () => (
    <div className="page">
      <PageHeader
        eyebrow="YOUR ACCOUNT"
        title="My Profile 👤"
        description="View your education, interests, career preferences and progress."
      />

      <div className="profile-hero">
        <div className="profile-avatar">
          {userName ? userName.charAt(0).toUpperCase() : "?"}
        </div>

        <div>
          <span className="eyebrow light">WELCOME BACK</span>

          <h1>
            Hello, {userName || "there"}! 👋
          </h1>

          <p>BSc Information Technology • Student</p>
        </div>

        <button className="edit-profile">Edit Profile</button>
      </div>

      <div className="profile-grid">
        <div className="profile-info-card">
          <span className="eyebrow">PERSONAL INFORMATION</span>

          <h3>About You</h3>

          <div className="profile-field">
            <label>Name</label>
            <strong>{userName || "Not logged in"}</strong>
          </div>

          <div className="profile-field">
            <label>Education</label>
            <strong>BSc Information Technology</strong>
          </div>

          <div className="profile-field">
            <label>Career Interest</label>
            <strong>Technology & IT</strong>
          </div>
        </div>

        <div className="profile-info-card">
          <span className="eyebrow">YOUR PROGRESS</span>

          <h3>Career Journey</h3>

          <div className="profile-progress-number">42%</div>

          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>

          <p className="muted">
            Keep learning and exploring to move forward.
          </p>
        </div>
      </div>
    </div>
  );

  const Settings = () => (
    <div className="page">
      <PageHeader
        eyebrow="PREFERENCES"
        title="Settings ⚙️"
        description="Manage your account and portal preferences."
      />

      <div className="settings-card">
        <SettingRow
          title="Profile information"
          description="Update your personal and education details."
          action="Edit"
        />

        <SettingRow
          title="Notifications"
          description="Manage career and learning notifications."
          action="Manage"
        />

        <SettingRow
          title="Career preferences"
          description="Update your interests and career goals."
          action="Update"
        />

        <SettingRow
          title="Account"
          description="Manage your account settings."
          action="Manage"
        />
      </div>
    </div>
  );

  const renderPage = () => {
    switch (activePage) {
      case "Career Explorer":
        return <CareerExplorer />;

      case "Free Courses":
        return <FreeCourses />;

      case "Assessment":
        return <Assessment />;

      case "My Roadmap":
        return <Roadmap />;

      case "Jobs & Internships":
        return <Jobs />;

      case "Resources":
        return <Resources />;

      case "My Profile":
        return <Profile />;

      case "Settings":
        return <Settings />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div
          className="brand"
          onClick={() => navigate("Dashboard")}
        >
          <div className="brand-logo">✦</div>

          <div>
            <h2>
              Career<span>Path</span>
            </h2>

            <small>Guidance Portal</small>
          </div>
        </div>

        <div className="menu-label">MAIN MENU</div>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => navigate(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-box">
            <div className="help-icon">💡</div>

            <strong>Need Guidance?</strong>

            <p>We're here to help you find your path.</p>

            <button>Get Help →</button>
          </div>

          {isLoggedIn && (
            <button
              className="logout-button"
              onClick={handleLogout}
            >
              ↪ <span>Logout</span>
            </button>
          )}
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="mobile-brand">CareerPath</div>

          <div className="topbar-right">
            <button className="notification-button">
              🔔
              <span></span>
            </button>

            <button
              className="user-button"
              onClick={() => navigate("My Profile")}
            >
              <div className="mini-avatar">
                {userName
                  ? userName.charAt(0).toUpperCase()
                  : "?"}
              </div>

              <div className="user-details">
                <strong>{userName || "Guest"}</strong>
                <small>Student</small>
              </div>

              <span>⌄</span>
            </button>
          </div>
        </header>

        {renderPage()}
      </main>

      {showLogin && (
        <div
          className="modal-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="login-logo">✦</div>

            {!showRegister ? (
              <>
                <span className="eyebrow">CAREERPATH</span>

                <h2>Welcome back</h2>

                <p>
                  Login to continue your career journey.
                </p>

                <input
                  type="email"
                  placeholder="Email address"
                  value={loginEmail}
                  onChange={(e) =>
                    setLoginEmail(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) =>
                    setLoginPassword(e.target.value)
                  }
                />

                <button
                  className="primary-button full"
                  onClick={handleLogin}
                >
                  Login
                </button>

                <small>
                  Don't have an account?{" "}
                  <b
                    onClick={() => setShowRegister(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Create account
                  </b>
                </small>
              </>
            ) : (
              <>
                <span className="eyebrow">CAREERPATH</span>

                <h2>Create account</h2>

                <p>
                  Create your account and start your career journey.
                </p>

                <input
                  type="text"
                  placeholder="Full name"
                  value={registerName}
                  onChange={(e) =>
                    setRegisterName(e.target.value)
                  }
                />

                <input
                  type="email"
                  placeholder="Email address"
                  value={registerEmail}
                  onChange={(e) =>
                    setRegisterEmail(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="Create password"
                  value={registerPassword}
                  onChange={(e) =>
                    setRegisterPassword(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />

                <button
                  className="primary-button full"
                  onClick={handleRegister}
                >
                  Register
                </button>

                <small>
                  Already have an account?{" "}
                  <b
                    onClick={() => setShowRegister(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </b>
                </small>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHeading({
  label,
  title,
  button,
  onClick,
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{label}</span>
        <h2>{title}</h2>
      </div>

      <button onClick={onClick}>{button}</button>
    </div>
  );
}

function PageHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="page-header">
      <span className="eyebrow">{eyebrow}</span>

      <h1>{title}</h1>

      <p>{description}</p>
    </div>
  );
}

function CareerCard({
  career,
  large = false,
  onClick,
}) {
  return (
    <div
      className={`career-card ${
        large ? "large" : ""
      }`}
    >
      <div className="career-image">
        <img
          src={career.image}
          alt={career.title}
        />

        <div className="career-image-icon">
          {career.icon}
        </div>
      </div>

      <div className="career-card-body">
        <span className="career-category">
          {career.category}
        </span>

        <h3>{career.title}</h3>

        <p>{career.description}</p>

        <div className="skill-pill">
          {career.skills}
        </div>

        <button onClick={onClick}>
          Explore Career <span>→</span>
        </button>
      </div>
    </div>
  );
}

function CourseCard({
  course,
  large = false,
}) {
  return (
    <div
      className={`course-card ${
        large ? "large" : ""
      }`}
    >
      <div
        className={`course-cover ${course.type
          .toLowerCase()
          .replaceAll(" ", "-")}`}
      >
        <div className="course-icon">
          {course.icon}
        </div>

        <span>{course.level}</span>
      </div>

      <div className="course-body">
        <span className="course-type">
          {course.type}
        </span>

        <h3>{course.title}</h3>

        <p>{course.description}</p>

        <div className="course-progress">
          <div>
            <span>Progress</span>
            <strong>{course.progress}%</strong>
          </div>

          <div className="course-progress-track">
            <div
              style={{
                width: `${course.progress}%`,
              }}
            ></div>
          </div>
        </div>

        <button className="course-button">
          {course.progress > 0
            ? "Continue Learning"
            : "Start Learning"}{" "}
          →
        </button>
      </div>
    </div>
  );
}

function RoadStep({
  number,
  title,
  description,
  status,
}) {
  return (
    <div
      className={`road-step ${
        status || ""
      }`}
    >
      <div className="road-number">
        {status === "completed"
          ? "✓"
          : number}
      </div>

      <div className="road-content">
        <span>STEP {number}</span>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      {status === "completed" && (
        <div className="step-status completed-status">
          Completed
        </div>
      )}

      {status === "current" && (
        <div className="step-status current-status">
          Current
        </div>
      )}
    </div>
  );
}

function Opportunity({
  icon,
  title,
  description,
}) {
  return (
    <div className="opportunity-card">
      <div>{icon}</div>

      <span className="eyebrow">
        OPPORTUNITY
      </span>

      <h2>{title}</h2>

      <p>{description}</p>

      <button>Explore →</button>
    </div>
  );
}

function Resource({
  icon,
  title,
  text,
}) {
  return (
    <div className="resource-card">
      <div className="resource-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <button>
        Explore Resource →
      </button>
    </div>
  );
}

function SettingRow({
  title,
  description,
  action,
}) {
  return (
    <div className="setting-row">
      <div>
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <button>{action}</button>
    </div>
  );
}

export default App;
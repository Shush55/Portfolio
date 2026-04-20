import { Layout, Menu, Typography, Card, Space, Tag, ConfigProvider, Button, Col, Row } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const skills = ["React", "TypeScript", "Ant Design", "Vite", "pnpm", "REST APIs"];

const projects = [
  {
    id: "1",
    name: "Portfolio Starter",
    description: "A reusable starter for portfolio pages with clean routing and Ant Design UI.",
  },
  {
    id: "2",
    name: "Dashboard UI",
    description: "Responsive dashboard layout and reusable components built in React + TS.",
  },
];

function HeaderNav() {
  const location = useLocation();
  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 100, width: "100%" }}>
      <div className="nav-wrapper">
        <Link to="/" className="brand">
          Portfolio
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={[
            { key: "/", label: <Link to="/">Home</Link> },
            { key: "/about", label: <Link to="/about">About</Link> },
            { key: "/projects", label: <Link to="/projects">Projects</Link> },
            { key: "/contact", label: <Link to="/contact">Contact</Link> },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
    </Header>
  );
}

function HomePage() {
  return (
    <Space direction="vertical" size={24} style={{ width: "100%" }}>
      <Card className="hero-card">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={15}>
            <Space direction="vertical" size={12}>
              <Tag color="geekblue">Frontend Developer</Tag>
              <Title className="hero-title">Hi, I am Your Name</Title>
              <Paragraph className="hero-text">
                I build responsive and accessible interfaces with React, TypeScript, and Ant Design.
                I focus on clean code, reusable components, and smooth user experiences.
              </Paragraph>
              <Space wrap>
                <Button type="primary" size="large">
                  View My Projects
                </Button>
                <Button size="large">Contact Me</Button>
              </Space>
            </Space>
          </Col>
          <Col xs={24} md={9}>
            <Card size="small" title="Quick Highlights">
              <Paragraph>2+ years building frontend applications.</Paragraph>
              <Paragraph>Specialized in React ecosystem and UI architecture.</Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>Open for freelance and full-time roles.</Paragraph>
            </Card>
          </Col>
        </Row>
      </Card>
      <Card title="Skills">
        <Space wrap>
          {skills.map((skill) => (
            <Tag key={skill} color="blue">
              {skill}
            </Tag>
          ))}
        </Space>
      </Card>
    </Space>
  );
}

function AboutPage() {
  return (
    <Card title="About">
      <Paragraph>
        This section is ready for your bio, work experience, and frontend journey.
      </Paragraph>
    </Card>
  );
}

function ProjectsPage() {
  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      {projects.map((project) => (
        <Card key={project.id} title={project.name}>
          <Paragraph>{project.description}</Paragraph>
        </Card>
      ))}
    </Space>
  );
}

function ContactPage() {
  return (
    <Card title="Contact">
      <Space wrap>
        <Tag icon={<MailOutlined />}>your.email@example.com</Tag>
        <Tag icon={<LinkedinOutlined />}>linkedin.com/in/yourprofile</Tag>
        <Tag icon={<GithubOutlined />}>github.com/yourusername</Tag>
      </Space>
    </Card>
  );
}

export default function App() {
  return (
    <ConfigProvider theme={{ token: { borderRadius: 10, colorPrimary: "#1677ff" } }}>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderNav />
        <Content className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Portfolio Starter - React + TypeScript + Ant Design + Vite
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

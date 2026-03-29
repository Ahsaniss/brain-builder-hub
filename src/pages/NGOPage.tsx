import { motion } from "framer-motion";
import { Heart, GraduationCap, Stethoscope, Users, Target, Eye, UserCircle2, BriefcaseBusiness } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ngoBg from "@/assets/ngo-bg.jpg";

const areas = [
  { icon: GraduationCap, label: "Education", desc: "Providing quality education and literacy programs to underserved communities." },
  { icon: Stethoscope, label: "Health", desc: "Health awareness campaigns and medical support programs." },
  { icon: Heart, label: "Women Empowerment", desc: "Skill development and economic opportunities for women." },
  { icon: Users, label: "Youth Development", desc: "Mentorship, training, and leadership programs for youth." },
];

const teamMembers = [
  {
    name: "Dr. Farkhanda Siddique",
    role: "Executive Director",
    qualification: "PhD in Social Sciences",
    experience: "20 years of development project experience",
  },
  {
    name: "Dr. Rizwan Masood Qureshi",
    role: "Chairman",
    qualification: "MBA",
    experience: "15 years of organizational leadership",
  },
  {
    name: "Faraz Ahmed",
    role: "President",
    qualification: "BS English (Literature & Applied Linguistics)",
    experience: "5 years",
  },
  {
    name: "Miss Hamna Zulifqar",
    role: "Vice President",
    qualification: "MPhil Sociology",
    experience: "10 years",
  },
  {
    name: "Miss Nazish Naheed",
    role: "General Secretary",
    qualification: "MPhil Sociology",
    experience: "6 years",
  },
  {
    name: "Mariya Yousif",
    role: "Joint Secretary",
    qualification: "MA English",
    experience: "4 years",
  },
  {
    name: "Muhammad Asif",
    role: "IT Officer",
    qualification: "BCS / Web Designer / Software Engineering",
    experience: "20 years as IT specialist in NGOs",
  },
  {
    name: "Zain Doger",
    role: "Legal Advisor",
    qualification: "Advocate",
    experience: "10 years in legal advisory",
  },
];

const projects = [
  {
    title: "HAQ Haqdar Tak",
    funder: "Ministry of Information and Broadcasting & MYMA",
    impact: "Reached around 12,000 people and supported safer charity awareness through media and seminars.",
  },
  {
    title: "Safer Charity Practices",
    funder: "IPAD",
    impact: "Set up awareness desks, road banners, and radio campaigns to improve safe donation practices.",
  },
  {
    title: "Vocational Skill Centers (Faisalabad Area Upgrading)",
    funder: "DFID",
    impact: "Registered 800 women and girls for computer, embroidery, and beautician training courses.",
  },
  {
    title: "MSM Project Faisalabad",
    funder: "World Bank",
    impact: "Registered more than 4,000 MSM and linked identified HIV-positive cases to treatment services.",
  },
  {
    title: "Green Star Sehat Voucher Scheme",
    funder: "USAID",
    impact: "Handled 250 safe deliveries and contributed to reducing pregnancy-related mortality.",
  },
  {
    title: "Non-Formal Education & Adult Literacy Centers",
    funder: "JICA / Literacy Department / District Government",
    impact: "Operated 400 centers and educated approximately 1,200 children and adults.",
  },
  {
    title: "Awareness on Child Birth Registration and CNIC",
    funder: "Local Government and Rural Development Department",
    impact: "Sensitized 10,000 women and children on registration processes and identity documentation.",
  },
  {
    title: "Support for Flood Affectees",
    funder: "Self-help basis",
    impact: "Distributed food, shelter support, and emergency relief items to affected communities.",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");

const NGOPage = () => (
  <Layout>
    <PageBanner
      title="Right Way Foundation"
      subtitle="A non-profit organization working in education, women empowerment, health, and community development."
      bgImage={ngoBg}
    />

    {/* Mission & Vision */}
    <section className="py-24 relative overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ y: [0, -22, 0], x: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 9.5, ease: "easeInOut" }}
        className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
      />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 hover:glow-gold transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To mobilize communities for sustainable development through education, skill building, and social welfare programs that create lasting impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 hover:glow-gold transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
              <Eye className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To promote a better future through quality education, health awareness, and empowering underserved communities across Pakistan.
            </p>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gradient">Our Focus Areas</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {areas.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:glow-gold hover-scale transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{a.label}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-12"
        >
          <h2 className="text-3xl font-bold text-gradient">Team Members</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Profile cards based on the NGO organizational profile document and listed office bearers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="glass rounded-2xl p-6 hover:glow-gold transition-all duration-300 overflow-hidden relative"
            >
              <motion.div
                aria-hidden
                animate={{ x: [0, 6, 0], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-10 w-28 h-28 rounded-full bg-primary/10 blur-2xl"
              />
              <div className="mb-4 flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/25 via-secondary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">{getInitials(member.name)}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground leading-tight">{member.name}</h3>
              <p className="text-sm text-primary mt-1">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-3">{member.qualification}</p>
              <p className="text-xs text-muted-foreground/90 mt-2">{member.experience}</p>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-12"
        >
          <h2 className="text-3xl font-bold text-gradient">Projects from NGO Docs</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Selected completed projects and outcomes retrieved from the organizational profile document.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="glass rounded-2xl p-6 hover:glow-gold transition-all duration-300 overflow-hidden relative"
            >
              <div className="h-20 rounded-xl mb-4 border border-border/40 bg-gradient-to-r from-primary/15 via-secondary/10 to-primary/5 relative overflow-hidden">
                <motion.div
                  aria-hidden
                  animate={{ x: ["-20%", "120%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                  className="absolute inset-y-0 w-20 bg-white/20 blur-md"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.14em]">Project Impact</span>
                  <span className="text-xs font-semibold text-primary">Document Verified</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <BriefcaseBusiness className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-primary mt-1">Funding: {project.funder}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default NGOPage;

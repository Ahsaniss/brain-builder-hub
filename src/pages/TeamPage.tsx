import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import coursesBg from "@/assets/courses-bg.jpg";

const team = [
  {
    name: "Dr. Farkhanda Siddique",
    role: "Executive Director",
    bio: "20+ years experience in development and education sector. A visionary leader dedicated to community empowerment and institutional growth.",
    initials: "FS",
  },
  {
    name: "Hamna Zulifqar",
    role: "Vice President",
    bio: "Expert in sociology and community development. Passionate about creating sustainable programs for women and youth empowerment.",
    initials: "HZ",
  },
  {
    name: "Faraz Mughal",
    role: "President",
    bio: "Skilled in leadership and management. Driving strategic initiatives for organizational growth and educational excellence.",
    initials: "FM",
  },
  {
    name: "Nazish Naheed",
    role: "General Secretary",
    bio: "Experienced in administration and NGO operations. Ensuring smooth organizational processes and effective program delivery.",
    initials: "NN",
  },
];

const TeamPage = () => (
  <Layout>
    <PageBanner
      title="Our Team"
      subtitle="Meet the passionate leaders behind Brain Builder & Right Way Foundation."
      bgImage={coursesBg}
    />

    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-8 text-center group hover:glow-pink transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full mx-auto mb-6 bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-primary-foreground">{m.initials}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{m.name}</h3>
              <p className="text-sm font-semibold text-primary mt-1">{m.role}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default TeamPage;

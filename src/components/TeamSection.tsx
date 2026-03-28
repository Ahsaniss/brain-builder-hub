import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Farkhanda Siddique",
    role: "Executive Director",
    bio: "20+ years experience in development and education sector.",
    initials: "FS",
  },
  {
    name: "Hamna Zulifqar",
    role: "Vice President",
    bio: "Expert in sociology and community development.",
    initials: "HZ",
  },
  {
    name: "Faraz Mughal",
    role: "President",
    bio: "Skilled in leadership and management.",
    initials: "FM",
  },
  {
    name: "Nazish Naheed",
    role: "General Secretary",
    bio: "Experienced in administration and NGO operations.",
    initials: "NN",
  },
];

const TeamSection = () => (
  <section id="team" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient">Our Team</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Meet the passionate leaders behind Brain Builder & Right Way Foundation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-8 text-center group hover:scale-[1.04] transition-all duration-300"
          >
            <div className="w-24 h-24 rounded-full mx-auto mb-5 bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <span className="text-2xl font-bold text-primary-foreground">{m.initials}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
            <p className="text-sm font-medium text-primary mt-1">{m.role}</p>
            <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;

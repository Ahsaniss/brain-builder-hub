import { motion } from "framer-motion";
import { Heart, GraduationCap, Stethoscope, Users } from "lucide-react";

const areas = [
  { icon: GraduationCap, label: "Education" },
  { icon: Stethoscope, label: "Health" },
  { icon: Heart, label: "Women Empowerment" },
  { icon: Users, label: "Youth Development" },
];

const NGOSection = () => (
  <section id="ngo" className="py-24 gradient-section">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gradient">Right Way Foundation</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A non-profit organization working in education, women empowerment, health, and community development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-3">🎯 Our Mission</h3>
          <p className="text-muted-foreground">
            To mobilize communities for sustainable development through education, skill building, and social welfare programs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-3">🌟 Our Vision</h3>
          <p className="text-muted-foreground">
            To promote a better future through quality education, health awareness, and empowering underserved communities.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {areas.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
          >
            <a.icon className="h-8 w-8 mx-auto text-primary mb-3" />
            <p className="text-sm font-semibold text-foreground">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NGOSection;

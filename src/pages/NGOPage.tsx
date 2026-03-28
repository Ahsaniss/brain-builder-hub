import { motion } from "framer-motion";
import { Heart, GraduationCap, Stethoscope, Users, Target, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import ngoBg from "@/assets/ngo-bg.jpg";

const areas = [
  { icon: GraduationCap, label: "Education", desc: "Providing quality education and literacy programs to underserved communities." },
  { icon: Stethoscope, label: "Health", desc: "Health awareness campaigns and medical support programs." },
  { icon: Heart, label: "Women Empowerment", desc: "Skill development and economic opportunities for women." },
  { icon: Users, label: "Youth Development", desc: "Mentorship, training, and leadership programs for youth." },
];

const NGOPage = () => (
  <Layout>
    <PageBanner
      title="Right Way Foundation"
      subtitle="A non-profit organization working in education, women empowerment, health, and community development."
      bgImage={ngoBg}
    />

    {/* Mission & Vision */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 hover:glow-pink transition-all duration-300"
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
            className="glass rounded-2xl p-8 hover:glow-pink transition-all duration-300"
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
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:glow-pink hover-scale transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{a.label}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default NGOPage;

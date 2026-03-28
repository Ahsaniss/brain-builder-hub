import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import teamBg from "@/assets/WhatsApp Image 2026-03-27 at 10.47.12 PM (1).jpeg";

const assetImages = Object.entries(
  import.meta.glob("../assets/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, image]) => ({ path: path.toLowerCase(), src: image as string }));

const activityImages = assetImages
  .filter((image) => image.path.includes("whatsapp image"))
  .map((image) => image.src);

const getTeamImage = (name: string, index: number) => {
  const nameTokens = name
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .replace(/\bdr\b/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2);

  const directMatch = assetImages.find((image) => nameTokens.some((token) => image.path.includes(token)));
  if (directMatch) return directMatch.src;

  if (activityImages.length === 0) return "";
  return activityImages[index % activityImages.length];
};

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
].map((member, index) => ({
  ...member,
  image: getTeamImage(member.name, index),
}));

const TeamPage = () => (
  <Layout>
    <PageBanner
      title="Our Team"
      subtitle="Meet the passionate leaders behind Brain Builder & Right Way Foundation."
      bgImage={teamBg}
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
              className="glass rounded-2xl p-8 text-center group hover:glow-gold transition-all duration-300"
            >
              <div className="w-28 h-28 rounded-full mx-auto mb-6 bg-gradient-to-br from-primary to-secondary p-1 group-hover:scale-110 transition-transform duration-300">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-background/80">
                    <span className="text-3xl font-bold text-primary">{m.initials}</span>
                  </div>
                )}
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

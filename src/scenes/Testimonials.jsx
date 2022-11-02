import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-blue">
          TESTIMONIALS
        </p>
        <LineGradient width="w-1/2" />
        <p className="mt-10">
          Here's What People are Saying About My Work. These are just a few of
          the <span className="text-yellow-300 text-2xl">C-Suite</span>{" "}
          executives that rely on my skills to push the limits of their
          business.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-sm">
            Working with Ryan has been effortless and educational. I am a visual
            person who needs his vision interpreted and then placed. Ryan's
            skill set allows me to be creatively free while effectively
            delivering my vision!
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-amber-600 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-Inter text-6xl">“</p>
          <p className="text-center text-sm">
            I have worked with Ryan on multiple projects and find that he is one
            of the best 'designers' that I have had the privilege of working
            with - clearly in the top 5% in his ability to seize upon, plan and
            execute a visual approach for a web or digital project.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-sm">
            Over the years I have come to rely on Ryan's skills to bring my
            business visions to market. No matter the challenge, Ryan meets it
            head on and delivers an end product that is intuitive, creative, and
            cost effective! Our biz dev teams have come to rely on his skills!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

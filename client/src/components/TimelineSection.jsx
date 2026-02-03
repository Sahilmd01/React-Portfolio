import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

const TimelineSection = () => {
    return (
        <section id="journey" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        My Journey
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A timeline of my professional growth and milestones in the tech industry.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent" />

                    {journeyData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center mb-12 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
        >
            {/* Date/Year Badge - Mobile: Left next to line, Desktop: Opposite side */}
            <div className={`hidden md:flex w-1/2 justify-${isEven ? 'end' : 'start'} px-10`}>
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xl">
                    <Calendar className="w-5 h-5" />
                    {item.year}
                </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-purple-500 z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Briefcase className="w-4 h-4 text-purple-200" />
            </div>

            {/* Content Card */}
            <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-10">
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_5px_30px_-10px_rgba(0,0,0,0.3)] group">
                    <div className="md:hidden text-purple-400 font-bold mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {item.year}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {item.role}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3">{item.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TimelineSection;

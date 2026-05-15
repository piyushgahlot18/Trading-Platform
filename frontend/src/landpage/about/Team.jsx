import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Team = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#050816] text-white py-24">

            {/* grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

            {/* purple glow */}
            <div className="absolute top-[120px] left-[40%] w-[500px] h-[350px] bg-purple-600/30 blur-[140px] rounded-full"></div>

            <div className="container relative z-10">

                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="fw-bold">
                        Meet the <span className="text-purple-400">Founder</span>
                    </h2>

                    <p className="text-gray-400 mt-2">
                        The mind behind the Tradoo trading platform
                    </p>
                </motion.div>


                <div className="row align-items-center">

                    {/* LEFT PROFILE */}
                    <div className="col-md-4 text-center mb-5">

                        <motion.img
                            src="/images/piyushimg.jpeg"
                            alt="profile"
                            className="rounded-full mx-auto border border-white/20"
                            style={{ width: "260px", height: "260px", objectFit: "cover", objectPosition: "top" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />

                        <h4 className="mt-4 fw-bold">Piyush Gahlot</h4>

                        <p className="text-gray-400">Founder & CEO</p>


                        {/* Social Icons */}
                        <div className="flex justify-center gap-4 mt-3 text-xl">

                            <a
                                href="https://www.linkedin.com/in/piyush-gahlot-7b265227b/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=piyushgahlot234@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition"
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </div>


                    {/* RIGHT DESCRIPTION */}
                    <div className="col-md-8 mb-9 pb-14">

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-xl"
                        >

                            <p className="text-gray-300 lh-lg">
                                Meet <span className="text-purple-400">Piyush Gahlot</span>, the founder who turned his passion
                                for financial markets into something bigger — a trading
                                platform that’s smart, fast, and hassle-free.
                            </p>

                            <p className="text-gray-300 lh-lg mt-3">
                                Fueled by late-night coding sessions and countless hours
                                studying market trends, Piyush built Tradoo with a clear
                                vision: make trading technology accessible and powerful
                                for everyone.
                            </p>

                            <p className="text-gray-300 lh-lg mt-3">
                                Whether you’re just starting your investment journey
                                or you’re an experienced trader, Tradoo is designed to
                                give you the tools and confidence to succeed.
                            </p>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Team;    
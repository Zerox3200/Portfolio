import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loading.scss';

export default function Loading() {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const loadingTexts = [
        "Initializing Portfolio...",
        "Loading Projects...",
        "Compiling Skills...",
        "Rendering Experience...",
        "Optimizing Performance...",
        "Deploying Success...",
        "Welcome to My Portfolio!"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < loadingTexts.length) {
                setCurrentText(loadingTexts[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }
        }, 800);

        return () => clearInterval(interval);
    }, [currentIndex, loadingTexts.length]);

    return (
        <div className="portfolio-loading">
            <div className="loading-container">
                {/* Code Editor Style Background */}
                <div className="code-background">
                    <div className="code-lines">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="code-line"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 0.3, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <span className="line-number">{i + 1}</span>
                                <span className="code-content">
                                    {i % 3 === 0 && "const portfolio = {"}
                                    {i % 3 === 1 && "  skills: ['React', 'Node.js', 'TypeScript'],"}
                                    {i % 3 === 2 && "  experience: 'Full Stack Developer'"}
                                    {i % 3 === 0 && i > 0 && "};"}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Main Loading Content */}
                <div className="loading-content">
                    {/* Terminal Style Header */}
                    <motion.div
                        className="terminal-header"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="terminal-buttons">
                            <div className="terminal-btn close"></div>
                            <div className="terminal-btn minimize"></div>
                            <div className="terminal-btn maximize"></div>
                        </div>
                        <div className="terminal-title">Portfolio Terminal</div>
                    </motion.div>

                    {/* Loading Animation */}
                    <div className="loading-animation">
                        <motion.div
                            className="code-block"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="code-syntax">
                                <span className="keyword">function</span>{" "}
                                <span className="function">loadPortfolio</span>
                                <span className="paren">()</span> {"{"}
                            </div>

                            <motion.div
                                className="loading-progress"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            >
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>

                            <div className="code-syntax">
                                <span className="keyword">return</span>{" "}
                                <span className="string">"Portfolio Ready!"</span>;
                            </div>
                            <span className="paren">{"}"}</span>
                        </motion.div>
                    </div>

                    {/* Loading Text */}
                    <motion.div
                        className="loading-text"
                        key={currentText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="terminal-prompt">$</span> {currentText}
                        <motion.span
                            className="cursor"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        >
                            |
                        </motion.span>
                    </motion.div>

                    {/* Development Icons */}
                    <div className="dev-icons">
                        {['react', 'node', 'js', 'ts', 'html', 'css'].map((tech, index) => (
                            <motion.div
                                key={tech}
                                className={`tech-icon ${tech}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.5 + index * 0.1,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                            >
                                {tech === 'react' && '⚛️'}
                                {tech === 'node' && '🟢'}
                                {tech === 'js' && '🟡'}
                                {tech === 'ts' && '🔵'}
                                {tech === 'html' && '🌐'}
                                {tech === 'css' && '🎨'}
                            </motion.div>
                        ))}
                    </div>

                    {/* Loading Stats */}
                    <motion.div
                        className="loading-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <div className="stat">
                            <span className="stat-label">Projects</span>
                            <motion.span
                                className="stat-value"
                                initial={{ number: 0 }}
                                animate={{ number: 15 }}
                                transition={{ duration: 2, delay: 1.5 }}
                            >
                                {Math.round(15)}
                            </motion.span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Skills</span>
                            <motion.span
                                className="stat-value"
                                initial={{ number: 0 }}
                                animate={{ number: 25 }}
                                transition={{ duration: 2, delay: 1.7 }}
                            >
                                {Math.round(25)}
                            </motion.span>
                        </div>
                        <div className="stat">
                            <span className="stat-label">Experience</span>
                            <motion.span
                                className="stat-value"
                                initial={{ number: 0 }}
                                animate={{ number: 3 }}
                                transition={{ duration: 2, delay: 1.9 }}
                            >
                                {Math.round(3)}+ years
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

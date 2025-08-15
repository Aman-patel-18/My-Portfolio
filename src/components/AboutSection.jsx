import { useState, useEffect } from "react";
import { Briefcase, Code, User, X, Download } from "lucide-react";

export const AboutSection = () => {
  const [showResume, setShowResume] = useState(false);

  // Lock/unlock background scroll
  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "auto";
  }, [showResume]);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With hands-on experience in Node.js, React, Python, and AI-driven
              solutions, I build responsive, accessible, and high-performance
              web applications.
            </p>
            <p className="text-muted-foreground">
              My work spans front-end development, data-driven platforms, and
              intelligent desktop applications — delivering solutions that are
              both visually appealing and functionally robust.
            </p>
            <p className="text-muted-foreground">
              I love transforming complex problems into elegant, user-friendly
              solutions and continuously explore new technologies to stay ahead
              in the fast-changing tech world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Button to show modal */}
              <button
                onClick={() => setShowResume(true)}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View CV
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable, responsive, and modern web applications
                    with frameworks like React and Node.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing clean, intuitive, and user-focused interfaces for
                    web and desktop apps.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Driving projects from concept to deployment ensuring timely
                    delivery and quality outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] h-[90%] rounded-lg overflow-hidden shadow-lg relative">
            {/* Close button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Download button inside modal */}
            <a
              href="/Aman_Resume.pdf"
              download="Aman_Patel_Resume.pdf"
              className="absolute top-4 left-4 bg-primary text-white px-3 py-2 rounded-full flex items-center gap-2 hover:bg-primary/80"
            >
              <Download className="w-4 h-4" /> Download
            </a>

            {/* PDF Viewer */}
            <iframe
              src="/Aman_Resume.pdf"
              title="Aman Patel Resume"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

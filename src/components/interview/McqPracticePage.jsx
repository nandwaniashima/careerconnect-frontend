import React, { useState } from "react";

const mcqData = {
  "DevOps": {
    Beginner: [
      {
        question: "What does CI/CD stand for?",
        options: ["Continuous Integration/Continuous Deployment", "Cloud Infrastructure/Code Deployment", "Continuous Improvement/Code Delivery", "None of the above"],
        correctAnswer: "Continuous Integration/Continuous Deployment" },
      { question: "What is the primary purpose of Docker?", options: ["Automating deployments", "Containerizing applications", "Managing cloud costs", "Scaling applications"], correctAnswer: "Containerizing applications" },
      { question: "What is the default port for SSH?", options: ["22", "80", "443", "3306"], correctAnswer: "22" },
      { question: "Which version control system is most commonly used in DevOps?", options: ["Git", "SVN", "Mercurial", "Perforce"], correctAnswer: "Git" },
      { question: "What does YAML stand for?", options: ["Yet Another Markup Language", "Your API Management Language", "YAML Ain't Markup Language", "None of the above"], correctAnswer: "YAML Ain't Markup Language" },
      
      // 4 more beginner-level questions...
    ],
    Intermediate: [
      {
        question: "Which tool is commonly used for container orchestration?",
        options: ["Docker", "Kubernetes", "Jenkins", "Ansible"],
        correctAnswer: "Kubernetes",
      },
      { question: "What is the primary goal of Infrastructure as Code (IaC)?", options: ["Enable manual configuration of servers", "Automate infrastructure provisioning using code", "Improve application testing", "Automate API development"], correctAnswer: "Automate infrastructure provisioning using code" },
      { question: "Which is a monitoring tool used in DevOps?", options: ["Prometheus", "Docker", "GitHub Actions", "Terraform"], correctAnswer: "Prometheus" },
      { question: "What is the purpose of a Service Mesh in microservices architecture?", options: ["Manage communication between services", "Scale applications", "Automate deployments", "Manage source control"], correctAnswer: "Manage communication between services" },
      { question: "What is the purpose of Canary Deployments?", options: ["Deploying a small subset of code changes to a limited user base", "Automating code merging", "Building container images", "Testing applications in development"], correctAnswer: "Deploying a small subset of code changes to a limited user base" },
      // 4 more intermediate-level questions...
    ],
    Advanced: [
      {
        question: "Which protocol does Ansible primarily use for communication?",
        options: ["SSH", "HTTP", "FTP", "SMTP"],
        correctAnswer: "SSH",
      },
      {
        question: "What is a blue-green deployment?",
        options: [
          "A deployment strategy with separate environments for testing and production",
          "A method of container orchestration",
          "A type of rollback mechanism",
          "A deployment strategy to reduce downtime by switching between two environments",
        ],
        correctAnswer: "A deployment strategy to reduce downtime by switching between two environments",
      },
      {
        question: "What is the role of Helm in Kubernetes?",
        options: [
          "Container orchestration",
          "Service discovery",
          "Package management",
          "Network configuration",
        ],
        correctAnswer: "Package management",
      },
      {
        question: "Which protocol does Ansible use for remote configuration?",
        options: ["SSH", "HTTP", "FTP", "SCP"],
        correctAnswer: "SSH",
      },
      // 4 more advanced-level questions...
    ],
  },
  "Web Development": {
    Beginner: [
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Learning", "None of the above"],
        correctAnswer: "HyperText Markup Language",
      },
      { question: "What is the primary function of CSS?", options: ["Structure content", "Style content", "Add interactivity", "Connect to a database"], correctAnswer: "Style content" },
    { question: "Which of the following is a JavaScript library?", options: ["React", "Django", "Flask", "PHP"], correctAnswer: "React" },
    { question: "Which HTTP method is used to retrieve data from a server?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: "GET" },
    { question: "What is the purpose of a `<div>` element in HTML?", options: ["Define a division or section", "Display bold text", "Add styles to text", "Create a table"], correctAnswer: "Define a division or section" },
      // 4 more beginner-level questions...
    ],
    Intermediate: [
      {
        question: "What is the purpose of React's `useState` hook?",
        options: ["Manage state in functional components", "Access the DOM", "Handle API calls", "All of the above"],
        correctAnswer: "Manage state in functional components",
      },
      {
        question: "Which HTTP status code indicates a 'Not Found' error?",
        options: ["404", "500", "403", "301"],
        correctAnswer: "404",
      },
      {
        question: "What is the purpose of REST APIs in web development?",
        options: [
          "Building user interfaces",
          "Handling client-server communication",
          "Designing database schemas",
          "None of the above",
        ],
        correctAnswer: "Handling client-server communication",
      },
      {
        question: "Which JavaScript framework is used for building single-page applications?",
        options: ["React", "jQuery", "Bootstrap", "Django"],
        correctAnswer: "React",
      },
      {
        question: "What is the main advantage of server-side rendering (SSR)?",
        options: [
          "Faster initial page loads and better SEO",
          "Improved database performance",
          "Better client-side animations",
          "Reduced hosting costs",
        ],
        correctAnswer: "Faster initial page loads and better SEO",
      },
      // 4 more intermediate-level questions...
    ],
    Advanced: [
      {
        question: "What is server-side rendering (SSR)?",
        options: ["Rendering on the client-side", "Rendering on the server-side before sending HTML to the client", "Rendering JavaScript dynamically", "None of the above"],
        correctAnswer: "Rendering on the server-side before sending HTML to the client",
      },
      {
        question: "What is the purpose of a 'Virtual DOM' in frameworks like React?",
        options: [
          "Direct interaction with the browser's DOM",
          "A copy of the real DOM that can be manipulated without affecting the UI",
          "A debugging tool",
          "A state management system",
        ],
        correctAnswer: "A copy of the real DOM that can be manipulated without affecting the UI",
      },
      {
        question: "What is the default HTTP method used by a <form> tag in HTML?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "GET",
      },
      {
        question: "Which of the following improves website performance by loading content as needed?",
        options: ["Lazy loading", "Session storage", "SEO optimization", "Encryption"],
        correctAnswer: "Lazy loading",
      },
      {
        question: "What is the purpose of a Content Delivery Network (CDN)?",
        options: [
          "To optimize images",
          "To store CSS and JS files",
          "To deliver web content quickly by distributing it across servers globally",
          "To manage API endpoints",
        ],
        correctAnswer: "To deliver web content quickly by distributing it across servers globally",
      },
      // 4 more advanced-level questions...
    ],
  },
  "UI/UX": {
    Beginner: [
      {
        question: "What is the main goal of UX design?",
        options: ["Enhance usability and user satisfaction", "Improve aesthetic appeal", "Optimize server performance", "None of the above"],
        correctAnswer: "Enhance usability and user satisfaction",
      },
      { question: "What does UX stand for?", options: ["User Experience", "Unified Experience", "User Experiment", "Universal Experience"], correctAnswer: "User Experience" },
      { question: "Which tool is commonly used for UI design?", options: ["Figma", "Docker", "Postman", "TensorFlow"], correctAnswer: "Figma" },
      { question: "What is wireframing in UI/UX?", options: ["Creating a visual blueprint of the app or website", "Building the backend logic", "Debugging an application", "Optimizing app performance"], correctAnswer: "Creating a visual blueprint of the app or website" },
      { question: "What does usability testing in UX involve?", options: ["Testing the ease of use of a product", "Testing the backend code", "Checking server performance", "Deploying applications"], correctAnswer: "Testing the ease of use of a product" },
      { question: "What is the primary goal of a UI designer?", options: ["Create visually appealing and user-friendly interfaces", "Develop server-side applications", "Write API documentation", "Perform automated testing"], correctAnswer: "Create visually appealing and user-friendly interfaces" },
      // 4 more beginner-level questions...
    ],
    Intermediate: [
      {
        question: "What is a wireframe?",
        options: ["A low-fidelity layout of a webpage", "A type of front-end framework", "A design system", "None of the above"],
        correctAnswer: "A low-fidelity layout of a webpage",
      },
      {
        question: "What is the purpose of wireframing in UI design?",
        options: [
          "To create high-fidelity designs",
          "To map the user flow and layout",
          "To conduct usability testing",
          "To test app performance",
        ],
        correctAnswer: "To map the user flow and layout",
      },
      {
        question: "Which color model is most commonly used in digital design?",
        options: ["RGB", "CMYK", "HSB", "HEX"],
        correctAnswer: "RGB",
      },
      {
        question: "What is 'responsive design'?",
        options: [
          "Design that adapts to various screen sizes",
          "Design for high-resolution screens only",
          "Designing prototypes for testing",
          "A type of animation effect in web design",
        ],
        correctAnswer: "Design that adapts to various screen sizes",
      },
      {
        question: "What is a 'user persona' in UX design?",
        options: [
          "A fictional character representing the target user",
          "An actual end-user of the product",
          "A design guideline for color schemes",
          "A sample user journey map",
        ],
        correctAnswer: "A fictional character representing the target user",
      },
      // 4 more intermediate-level questions...
    ],
    Advanced: [
      {
        question: "What is a design system?",
        options: ["A collection of reusable components and guidelines", "A backend framework", "A method for data visualization", "None of the above"],
        correctAnswer: "A collection of reusable components and guidelines",
      },
      {
        question: "Which principle states that users should always feel in control of the interface?",
        options: ["User Empowerment", "Feedback", "Consistency", "Aesthetic Usability"],
        correctAnswer: "User Empowerment",
      },
      {
        question: "What is the purpose of a usability test?",
        options: [
          "To find bugs in the UI",
          "To evaluate how easily users can accomplish tasks",
          "To check browser compatibility",
          "To improve visual design",
        ],
        correctAnswer: "To evaluate how easily users can accomplish tasks",
      },
      {
        question: "Which design principle prioritizes function over form?",
        options: ["Aesthetic Usability", "Accessibility", "Functionality First", "Simplicity"],
        correctAnswer: "Functionality First",
      },
      {
        question: "What is a 'Persona' in UX design?",
        options: [
          "A list of user tasks",
          "A fictional representation of a target user based on research",
          "A real user interacting with the product",
          "A project management tool",
        ],
        correctAnswer: "A fictional representation of a target user based on research",
      },
      // 4 more advanced-level questions...
    ],
  },
  "Cybersecurity": {
    Beginner: [
      {
        question: "What does VPN stand for?",
        options: ["Virtual Private Network", "Virtual Protocol Network", "Virtual Process Node", "None of the above"],
        correctAnswer: "Virtual Private Network",
      },
      { question: "What does HTTPS stand for?", options: ["HyperText Transfer Protocol Secure", "Hyper Transfer Text Protocol Secure", "Hyper Transfer Testing Protocol Secure", "None of the above"], correctAnswer: "HyperText Transfer Protocol Secure" },
    { question: "What is the purpose of a firewall?", options: ["Prevent unauthorized access", "Encrypt data", "Analyze network traffic", "Detect malware"], correctAnswer: "Prevent unauthorized access" },
    { question: "What is a phishing attack?", options: ["A fraudulent attempt to obtain sensitive information", "An attempt to infect a system with malware", "Unauthorized access to a network", "Encrypting data for ransom"], correctAnswer: "A fraudulent attempt to obtain sensitive information" },
    { question: "What is two-factor authentication (2FA)?", options: ["A security process that requires two forms of identification", "Encrypting data twice", "Using two firewalls for security", "None of the above"], correctAnswer: "A security process that requires two forms of identification" },
    { question: "Which of the following is an example of strong password?", options: ["Password123", "Admin2023", "A$tr0ngP@$$w0rd", "None of the above"], correctAnswer: "A$tr0ngP@$$w0rd" },
      // 4 more beginner-level questions...
    ],
    Intermediate: [
      {
        question: "What is a firewall used for?",
        options: ["Prevent unauthorized access to a network", "Boost network speed", "Monitor server logs", "None of the above"],
        correctAnswer: "Prevent unauthorized access to a network",
      },
      {
        question: "What is the purpose of a firewall?",
        options: [
          "To block unauthorized access to networks",
          "To encrypt sensitive data",
          "To scan for viruses",
          "To monitor server performance",
        ],
        correctAnswer: "To block unauthorized access to networks",
      },
      {
        question: "What is a 'phishing attack'?",
        options: [
          "An attempt to trick users into revealing personal information",
          "A brute force attack",
          "An attack using malware",
          "A denial-of-service attack",
        ],
        correctAnswer: "An attempt to trick users into revealing personal information",
      },
      {
        question: "Which protocol is used for secure web communication?",
        options: ["HTTPS", "HTTP", "FTP", "SMTP"],
        correctAnswer: "HTTPS",
      },
      {
        question: "What is multi-factor authentication (MFA)?",
        options: [
          "Using multiple methods to verify a user's identity",
          "Using only a password for authentication",
          "Encrypting all user passwords",
          "None of the above",
        ],
        correctAnswer: "Using multiple methods to verify a user's identity",
      },
      
      // 4 more intermediate-level questions...
    ],
    Advanced: [
      {
        question: "What is SQL injection?",
        options: ["A database attack method", "A software development tool", "A network protocol", "None of the above"],
        correctAnswer: "A database attack method",
      },
      {
        question: "Which protocol is used to encrypt web traffic?",
        options: ["HTTPS", "FTP", "SMTP", "HTTP"],
        correctAnswer: "HTTPS",
      },
      {
        question: "What is the primary purpose of a firewall?",
        options: [
          "To encrypt data",
          "To prevent unauthorized access to or from a private network",
          "To monitor user activity",
          "To backup data",
        ],
        correctAnswer: "To prevent unauthorized access to or from a private network",
      },
      {
        question: "What does a penetration test aim to identify?",
        options: [
          "Software bugs",
          "Vulnerabilities in a system",
          "Server configurations",
          "Network traffic bottlenecks",
        ],
        correctAnswer: "Vulnerabilities in a system",
      },
      {
        question: "What is 'phishing' in the context of cybersecurity?",
        options: [
          "Using fake websites or emails to steal sensitive information",
          "Scanning networks for vulnerabilities",
          "Monitoring online activity",
          "Encrypting data",
        ],
        correctAnswer: "Using fake websites or emails to steal sensitive information",
      },
      // 4 more advanced-level questions...
    ],
  },
  "Software Engineering": {
    Beginner: [
      {
        question: "What is the main goal of software engineering?",
        options: ["Develop reliable software efficiently", "Build hardware components", "Optimize network infrastructure", "None of the above"],
        correctAnswer: "Develop reliable software efficiently",
      },
      { question: "What is the purpose of an IDE?", options: ["Write, debug, and test code", "Deploy applications", "Analyze algorithms", "Manage version control"], correctAnswer: "Write, debug, and test code" },
    { question: "Which of the following is an object-oriented programming language?", options: ["Java", "C", "Python", "All of the above"], correctAnswer: "All of the above" },
    { question: "What does 'agile' refer to in software development?", options: ["A project management methodology", "A programming language", "A testing tool", "A debugging method"], correctAnswer: "A project management methodology" },
    { question: "Which of the following is a testing framework?", options: ["JUnit", "React", "Node.js", "Git"], correctAnswer: "JUnit" },
    { question: "What is the purpose of version control?", options: ["Track and manage changes to code", "Deploy applications", "Write documentation", "Debug code"], correctAnswer: "Track and manage changes to code" },
      
      // 4 more beginner-level questions...
    ],
    Intermediate: [
      {
        question: "What is the purpose of the Agile methodology?",
        options: ["Improve project adaptability", "Optimize server performance", "Enhance graphical design", "None of the above"],
        correctAnswer: "Improve project adaptability",
      },
      {
        question: "What is the purpose of an API in software development?",
        options: [
          "To enable communication between different software components",
          "To write backend code",
          "To debug applications",
          "To store data in databases",
        ],
        correctAnswer: "To enable communication between different software components",
      },
      {
        question: "What does the acronym 'OOP' stand for?",
        options: [
          "Object-Oriented Programming",
          "Open Optimization Protocol",
          "Object Overloading Procedure",
          "Optimization of Programs",
        ],
        correctAnswer: "Object-Oriented Programming",
      },
      {
        question: "What is the main purpose of version control systems like Git?",
        options: [
          "To track changes in source code",
          "To automate testing",
          "To write APIs",
          "To improve application performance",
        ],
        correctAnswer: "To track changes in source code",
      },
      {
        question: "What is a 'design pattern' in software engineering?",
        options: [
          "A reusable solution to common software problems",
          "A code optimization technique",
          "A debugging strategy",
          "An encryption algorithm",
        ],
        correctAnswer: "A reusable solution to common software problems",
      },
      // 4 more intermediate-level questions...
    ],
    Advanced: [
      {
        question: "What is a design pattern?",
        options: ["A reusable solution to common problems", "A UI/UX design guide", "A data visualization technique", "None of the above"],
        correctAnswer: "A reusable solution to common problems",
      },
      {
        question: "What does SOLID stand for in object-oriented programming?",
        options: [
          "Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
          "Structured, Organized, Layered, Integrated, Development",
          "Simple, Open, Linked, Inherited, Designed",
          "Software Object Lifecycle In Design",
        ],
        correctAnswer:
          "Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
      },
      {
        question: "What is a 'Design Pattern'?",
        options: [
          "A reusable solution to a common problem in software design",
          "A style of writing code",
          "A testing strategy",
          "A method of deployment",
        ],
        correctAnswer: "A reusable solution to a common problem in software design",
      },
      {
        question: "What is the purpose of a 'Unit Test'?",
        options: [
          "To test the entire application",
          "To test individual components of the application",
          "To ensure user interfaces work correctly",
          "To verify database connections",
        ],
        correctAnswer: "To test individual components of the application",
      },
      {
        question: "Which of the following is an example of a functional programming language?",
        options: ["Haskell", "Java", "C++", "Python"],
        correctAnswer: "Haskell",
      },
      // 4 more advanced-level questions...
    ],
  },
};

const QuizApp = () => {
  const [category, setCategory] = useState("DevOps");
  const [level, setLevel] = useState("Beginner");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showScore, setShowScore] = useState(false);

  const questions = mcqData[category][level];

  const handleSubmitAnswer = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption("");
    setShowScore(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-indigo-200 flex flex-col justify-center items-center px-6">
      {!showScore ? (
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-teal-600 mb-4">MCQ Quiz</h1>
          <div className="mb-4">
            <label className="font-medium text-gray-700">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded-lg w-full mt-2"
            >
              {Object.keys(mcqData).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="font-medium text-gray-700">Level:</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="p-2 border rounded-lg w-full mt-2"
            >
              {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <h3 className="font-medium text-gray-800 mb-2">
              {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
            </h3>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <label key={idx} className="block mb-2">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  checked={selectedOption === option}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedOption}
            className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
          >
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      ) : (
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Quiz Finished!</h1>
          <p className="text-lg text-gray-700 mb-4">Your Score: {score} / {questions.length}</p>
          <button
            onClick={handleRestartQuiz}
            className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
          >
            Restart Quiz
          </button>
        </div>
        )}
        <div>
        <button
            onClick={() => window.history.back()}
            className="mt-8 px-10 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-500 transition-all transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
    </div>
  );
};

export default QuizApp;

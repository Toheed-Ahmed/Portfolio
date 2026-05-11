# Toheed Ahmed - Full Stack Developer Portfolio

> **Building scalable products that simplify workflows**

A modern, production-ready portfolio website showcasing full-stack development expertise in SaaS products, workflow automation, and productivity tools. Designed to impress recruiters, startups, and tech companies with a premium, interactive experience.

---

## 🚀 About Me

I'm a **Full Stack Developer** with a passion for building scalable web applications and SaaS products that solve real-world problems. My journey started with curiosity about how technology works, evolving into a deep commitment to creating elegant, user-centric solutions.

### 🎯 Specializations

- **SaaS Development** - Building modern Software-as-a-Service platforms
- **Workflow Automation** - Creating intelligent tools that streamline business processes
- **Productivity Tools** - Designing applications that enhance user efficiency
- **UI/UX Implementation** - Crafting beautiful, responsive interfaces
- **Full-Stack Architecture** - Developing scalable backend and frontend systems

---

## 💼 Experience & Achievements

### Leadership Roles

- **Campus Director** - Hult Prize MUET
  - Led 20+ member team for entrepreneurial initiatives
  - Organized events and mentored startup founders
  - Fostered innovation culture on campus

- **Aspire Leaders Program** - Harvard Business School
  - Participated in international leadership development
  - Collaborated with global peers on business challenges
  - Enhanced strategic thinking and business acumen

### Recognitions

- **Best Delegate** - WHO Committee MUET MUN 2025
- **Certified Web Developer** - Sukkur IBA 2025
- **10+ Projects Completed** - Portfolio of diverse applications
- **2+ Years of Development Experience**

---

## 🛠️ Technical Stack

### Frontend

- **React 19** - Modern component architecture with hooks
- **Next.js 16** - Full-stack framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling with custom theme
- **Framer Motion** - Smooth animations and interactions
- **Responsive Design** - Mobile-first approach

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Backend type safety
- **REST APIs** - RESTful service design

### Database & Services

- **MongoDB** - NoSQL document database
- **MySQL** - Relational database management
- **Supabase** - PostgreSQL with real-time capabilities
- **Firebase** - Authentication and cloud services

### Tools & Platforms

- **Vercel** - Next.js deployment and hosting
- **GitHub** - Version control and collaboration
- **Postman** - API testing and documentation
- **VS Code** - Primary development environment
- **Figma** - UI/UX design and prototyping

### AI & Automation

- **ChatGPT** - AI-powered features
- **Google Gemini API** - Advanced AI integration
- **GitHub Copilot** - Code generation assistance
- **Cursor AI** - AI-enhanced IDE

---

## 📁 Featured Projects

### 1. **StudyGenie AI** - Intelligent Learning Platform

- **Tech Stack**: Next.js, Supabase, Gemini API, Three.js, TypeScript
- **Features**:
  - Socratic learning methodology
  - AI-powered adaptive interactions
  - Real-time progress tracking
  - Interactive certificates
  - Personalized learning paths
- **Impact**: Enhanced student learning through AI-driven education

### 2. **PrepMaster Study Planner** - Productivity Tool

- **Tech Stack**: HTML, CSS, JavaScript, Responsive Design
- **Features**:
  - Schedule planning and management
  - Task organization system
  - Progress tracking dashboard
  - Time management tools
  - Responsive mobile interface
- **Live Demo**: [prep-master-quiz-app.vercel.app](https://prep-master-quiz-app.vercel.app/)

### 3. **Software Cost Estimation Tool** - Project Planning

- **Tech Stack**: JavaScript, HTML, CSS, COCOMO II Model
- **Features**:
  - Real-time cost calculations
  - COCOMO II methodology implementation
  - Interactive visualizations
  - Estimation accuracy metrics
  - Workflow-focused design
- **Live Demo**: [softwarecostestimationtool.vercel.app](https://softwarecostestimationtool.vercel.app/)

### 4. **Fitt Fusion Gym Management Portal** - Business Solution

- **Tech Stack**: PHP, MySQL, HTML, CSS, JavaScript
- **Features**:
  - Member management system
  - Class scheduling and booking
  - Attendance tracking
  - Billing and invoicing
  - Admin dashboard
- **Impact**: Simplified gym operations and member experience

---

## 🎨 Design Philosophy

This portfolio embodies premium design principles inspired by top-tier developer portfolios:

### Visual Design

- **Dark Theme** - Modern, eye-friendly interface
- **Glassmorphism** - Contemporary frosted glass effects
- **Gradient Accents** - Blue-to-purple color scheme
- **Smooth Animations** - Scroll-triggered and hover effects
- **Responsive Layout** - Seamless experience across all devices

### User Experience

- **Intuitive Navigation** - Smooth scroll-to-section navigation
- **Interactive Elements** - Engaging hover states and animations
- **Clear Call-to-Action** - Easy project exploration and contact
- **Performance Optimized** - Fast load times and smooth interactions
- **Accessibility First** - Inclusive design for all users

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/Toheed-Ahmed/portfolio.git
cd portfolio
```

2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

3. **Run Development Server**

```bash
npm run dev
# or
yarn dev
```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This generates optimized production-ready files in the `.next/` directory.

### Deploy to Vercel (Recommended)

The easiest deployment option for Next.js applications:

1. **Push to GitHub**

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Click "Deploy"
   - Vercel automatically builds and deploys on every push

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Configure DNS settings
   - Auto SSL certificate setup

### Deploy to Other Platforms

The portfolio can also be deployed to:

- **Netlify** - Connect GitHub repository
- **AWS Amplify** - AWS-based deployment
- **Railway** - Simple cloud deployment
- **Self-hosted** - Docker containerization

---

## 🎯 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico         # Site favicon
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── HeroSection.tsx     # Landing hero section
│   ├── AboutSection.tsx    # About me section
│   ├── SkillsSection.tsx   # Technical skills showcase
│   ├── ProjectsSection.tsx # Featured projects grid
│   ├── ExperienceSection.tsx # Leadership & achievements
│   ├── ContactSection.tsx  # Contact form
│   ├── Footer.tsx          # Footer with links
│   ├── Button.tsx          # Reusable button component
│   └── index.ts            # Component exports
├── public/
│   ├── robots.txt          # SEO robots configuration
│   └── favicon.ico         # Favicon file
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

---

## ⚡ Performance Features

### Optimizations Implemented

- **Next.js App Router** - Latest routing architecture
- **Turbopack** - Ultra-fast TypeScript compilation
- **CSS Optimization** - Tailwind CSS with PurgeCSS
- **Image Optimization** - Lazy loading and responsive images
- **Font Optimization** - Inter font from Google Fonts
- **Code Splitting** - Automatic route-based splitting

### Metrics

- **Fast First Contentful Paint** - Optimized critical rendering
- **Smooth Animations** - 60fps performance
- **Mobile Responsive** - Perfect on all screen sizes
- **Accessibility** - WCAG compliant

---

## 🔧 Customization

### Change Personal Information

Edit `app/layout.tsx` for SEO metadata and `components/HeroSection.tsx` for introduction text.

### Modify Colors & Theme

Update `tailwind.config.ts` to customize:

- Primary colors
- Font families
- Animation timing
- Border radius
- Spacing scale

### Update Projects

Edit the projects array in `components/ProjectsSection.tsx` to add or modify featured projects.

### Add Social Links

Update social links in:

- `components/Navbar.tsx`
- `components/HeroSection.tsx`
- `components/ContactSection.tsx`
- `components/Footer.tsx`

---

## 📞 Contact & Links

- **Email**: [kalwartoheed060@gmail.com](mailto:kalwartoheed060@gmail.com)
- **GitHub**: [github.com/Toheed-Ahmed](https://github.com/Toheed-Ahmed)
- **LinkedIn**: [linkedin.com/in/toheed-ahmed-7aa7162b4](https://linkedin.com/in/toheed-ahmed-7aa7162b4)
- **Portfolio Website**: [Your Domain](https://your-domain.com)

---

## 📚 Technologies & Resources

### Learning & Documentation

- [Next.js Official Docs](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)

### Development Tools

- [VS Code](https://code.visualstudio.com/) - Code editor
- [Vercel CLI](https://vercel.com/cli) - Deployment tool
- [Git](https://git-scm.com/) - Version control

---

## 🎓 Learning Journey

### Skills Developed

- Full-stack web application development
- Modern React patterns and hooks
- TypeScript for type safety
- Responsive design principles
- Performance optimization
- UX/UI best practices
- Database design and management
- API development and integration
- Cloud deployment strategies
- AI/ML integration basics

### Continuous Learning

- Advanced TypeScript patterns
- Web performance optimization
- System design and architecture
- Cloud infrastructure
- DevOps practices
- Machine learning integration

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use it as inspiration for your own portfolio!

---

## 🤝 Contributing & Feedback

Your feedback is valuable! If you have suggestions or found issues:

- Open an issue on GitHub
- Send an email to [kalwartoheed060@gmail.com](mailto:kalwartoheed060@gmail.com)
- Connect on LinkedIn for professional inquiries

---

## 🙏 Acknowledgments

Special thanks to:

- **Next.js & Vercel** team for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Lucide Icons** for beautiful icons
- Inspiration from top-tier portfolios and the developer community

---

## 📊 Project Statistics

- **Components**: 9 reusable React components
- **Lines of Code**: 1000+ lines of TypeScript/React
- **Projects Showcased**: 4 featured applications
- **Technologies Used**: 15+ libraries and frameworks
- **Build Time**: < 60 seconds with Turbopack
- **Page Size**: Optimized and lightweight

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✨

---

**Built with ❤️ by Toheed Ahmed**

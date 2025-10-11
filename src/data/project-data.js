export const projectsData = [
  {
    id: 1,
    slug: 'pjc-construction',
    title: 'PJC Construction',
    client: 'PJC Construction Inc.',
    category: 'Website Development',
    year: '2024',
    featuredImage: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    shortDescription: 'Modern construction company website with project showcase',
    description: 'A comprehensive digital platform designed for a leading construction company, featuring an interactive project portfolio, service offerings, and client testimonials. The website showcases their expertise in commercial and residential construction.',
    challenge: 'PJC Construction needed a professional online presence that would reflect their quality craftsmanship and extensive project portfolio. The previous website was outdated and did not effectively communicate their capabilities to potential clients. They required a platform that could showcase large construction projects with high-quality imagery while maintaining fast load times.',
    solution: 'We developed a modern, responsive website with a custom content management system that allows the PJC team to easily update project galleries and case studies. The design emphasizes visual storytelling through full-width imagery and smooth animations. We implemented lazy loading for images and optimized assets to ensure quick page loads despite the media-heavy content.',
    results: [
      { metric: 'Page Load Time', value: '1.2s', description: 'Average load time improvement' },
      { metric: 'Mobile Traffic', value: '+65%', description: 'Increase in mobile visitors' },
      { metric: 'Inquiry Rate', value: '+43%', description: 'Growth in contact form submissions' },
      { metric: 'Bounce Rate', value: '-28%', description: 'Reduction in visitor bounce rate' }
    ],
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Node.js', 'Vite'],
    galleryImages: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    testimonial: {
      quote: 'The new website has transformed how we present our work to clients. The response has been overwhelmingly positive, and we have seen a significant increase in qualified leads.',
      author: 'Pierre-Jean Côté',
      position: 'CEO, PJC Construction',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectUrl: 'https://pjc-construction.com',
    duration: '3 months',
    team: '4 specialists',
    industry: 'Construction'
  },
  {
    id: 2,
    slug: 'widescape-architecture',
    title: 'Widescape Architecture',
    client: 'Widescape Studio',
    category: 'Brand & Web Design',
    year: '2024',
    featuredImage: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    shortDescription: 'Architectural firm portfolio with immersive 3D experiences',
    description: 'An award-winning portfolio website for a contemporary architecture firm, featuring interactive 3D project visualizations, detailed case studies, and a minimalist design that puts their architectural work front and center.',
    challenge: 'Widescape needed a digital presence that matched the sophistication of their architectural projects. They wanted to showcase large-scale developments with immersive 3D models and high-resolution imagery while maintaining an elegant, minimalist aesthetic. The challenge was presenting complex architectural information in an accessible way for both industry professionals and potential clients.',
    solution: 'We created a visually stunning platform with WebGL-powered 3D project previews and smooth scroll-triggered animations. The design uses generous white space and large typography to create a gallery-like experience. We implemented a custom filtering system for projects by type, location, and status, making it easy for visitors to explore their extensive portfolio.',
    results: [
      { metric: 'Industry Recognition', value: '2 Awards', description: 'Design excellence awards received' },
      { metric: 'Session Duration', value: '+89%', description: 'Increase in time spent on site' },
      { metric: 'Project Inquiries', value: '+56%', description: 'Growth in project consultation requests' },
      { metric: 'International Reach', value: '+120%', description: 'Increase in overseas visitors' }
    ],
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'WebGL'],
    galleryImages: [
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    testimonial: {
      quote: 'Working with K72 was exceptional. They understood our vision and created a website that truly reflects the quality and innovation of our architectural work.',
      author: 'Sarah Williams',
      position: 'Creative Director, Widescape Studio',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectUrl: 'https://widescape-studio.com',
    duration: '4 months',
    team: '5 specialists',
    industry: 'Architecture'
  },
  {
    id: 3,
    slug: 'oka-restaurant',
    title: 'OKA Restaurant',
    client: 'OKA Dining Group',
    category: 'Website & E-commerce',
    year: '2023',
    featuredImage: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    shortDescription: 'Premium restaurant website with online reservation system',
    description: 'A sophisticated digital experience for an upscale restaurant, combining elegant design with practical functionality. The website features an integrated reservation system, menu showcase, and chef profile sections that capture the essence of fine dining.',
    challenge: 'OKA needed a website that would convey their premium dining experience while providing seamless online reservations. The existing booking system was clunky and resulted in lost reservations. They also wanted to highlight their seasonal menu changes and special events without requiring constant developer intervention.',
    solution: 'We designed an elegant, imagery-focused website with a custom-built reservation system that integrates with their table management software. The menu section features beautiful food photography with smooth hover effects and dietary information. We implemented a user-friendly CMS that allows the restaurant team to update menus, events, and promotions daily.',
    results: [
      { metric: 'Online Reservations', value: '+78%', description: 'Increase in booking completion rate' },
      { metric: 'Average Booking Value', value: '+34%', description: 'Growth in party size and spending' },
      { metric: 'Event Bookings', value: '+91%', description: 'Private event inquiry increase' },
      { metric: 'Mobile Reservations', value: '+125%', description: 'Growth in mobile bookings' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    galleryImages: [
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    testimonial: {
      quote: 'Since launching our new website, we have seen remarkable growth in online reservations. The system is intuitive for both our staff and guests.',
      author: 'Michel Dubois',
      position: 'Owner, OKA Restaurant',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectUrl: 'https://oka-restaurant.com',
    duration: '2.5 months',
    team: '3 specialists',
    industry: 'Hospitality'
  },
  {
    id: 4,
    slug: 'opto-eyewear',
    title: 'Opto Eyewear',
    client: 'Opto Vision',
    category: 'E-commerce Platform',
    year: '2023',
    featuredImage: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    shortDescription: 'Modern e-commerce solution for designer eyewear',
    description: 'A comprehensive e-commerce platform for a luxury eyewear brand, featuring virtual try-on technology, detailed product customization, and a seamless checkout experience. The website bridges the gap between online shopping and in-store experience.',
    challenge: 'Opto Vision wanted to expand their retail presence online but faced the common challenge of selling eyewear digitally. Customers were hesitant to purchase glasses without trying them on first. They needed a solution that would build confidence in online purchases while showcasing their premium product range with exceptional detail and style.',
    solution: 'We developed a cutting-edge e-commerce platform with AR-powered virtual try-on functionality that uses the device camera to overlay frames on the customer face in real-time. The product pages feature 360-degree views, detailed specifications, and personalization options. We integrated with their inventory management system for real-time stock updates and implemented a smart recommendation engine based on face shape and style preferences.',
    results: [
      { metric: 'Conversion Rate', value: '+112%', description: 'Increase in purchase completion' },
      { metric: 'Return Rate', value: '-45%', description: 'Reduction in product returns' },
      { metric: 'Average Order Value', value: '+67%', description: 'Growth in cart value' },
      { metric: 'Customer Satisfaction', value: '4.8/5', description: 'Post-purchase rating' }
    ],
    technologies: ['React', 'AR.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    galleryImages: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    testimonial: {
      quote: 'The virtual try-on feature has been a game-changer for our business. Customers love the technology, and it has significantly boosted our online sales.',
      author: 'Emma Laurent',
      position: 'Marketing Director, Opto Vision',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectUrl: 'https://opto-eyewear.com',
    duration: '5 months',
    team: '6 specialists',
    industry: 'Retail & Fashion'
  },
  {
    id: 5,
    slug: 'lamajeure-audio',
    title: 'La Majeure Audio',
    client: 'La Majeure Studio',
    category: 'Portfolio & Booking',
    year: '2023',
    featuredImage: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    shortDescription: 'Professional audio production studio showcase',
    description: 'A dynamic portfolio website for a premium audio production studio, featuring audio samples, client work showcase, and an integrated booking system for studio sessions. The design emphasizes sound quality and creative expertise.',
    challenge: 'La Majeure needed a platform that would showcase their audio production capabilities while making it easy for musicians and content creators to book studio time. Their previous site lacked audio integration and did not effectively communicate their range of services from podcast production to music mastering. They also struggled with manual booking management that led to scheduling conflicts.',
    solution: 'We created an immersive website with embedded audio players for portfolio samples, organized by production type. The design uses sound wave visualizations and dark aesthetics to create a professional studio atmosphere. We built a custom booking calendar that shows real-time studio availability, equipment packages, and engineer schedules. The platform includes automated confirmation emails and integrates with their existing scheduling software.',
    results: [
      { metric: 'Studio Bookings', value: '+87%', description: 'Increase in session reservations' },
      { metric: 'Scheduling Efficiency', value: '+95%', description: 'Reduction in booking conflicts' },
      { metric: 'Client Retention', value: '+41%', description: 'Repeat booking increase' },
      { metric: 'Portfolio Engagement', value: '+156%', description: 'Audio sample plays' }
    ],
    technologies: ['React', 'Howler.js', 'GSAP', 'Node.js', 'Calendar API'],
    galleryImages: [
      'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    testimonial: {
      quote: 'Our new website has streamlined our entire booking process. Clients can now hear our work and book sessions 24/7, which has dramatically increased our studio utilization.',
      author: 'Antoine Tremblay',
      position: 'Founder, La Majeure Studio',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectUrl: 'https://lamajeure-audio.com',
    duration: '3 months',
    team: '4 specialists',
    industry: 'Media & Entertainment'
  },
  {
    id: 6,
    slug: 'shelton-law',
    title: 'Shelton Law Firm',
    client: 'Shelton & Associates',
    category: 'Professional Services',
    year: '2023',
    featuredImage: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
    shortDescription: 'Corporate law firm website with client portal',
    description: 'A professional website for a corporate law firm, featuring practice area details, attorney profiles, case results, and a secure client portal. The platform balances authority and accessibility while maintaining the highest security standards.',
    challenge: 'Shelton & Associates required a website that would establish credibility and trust while making legal services more accessible to potential clients. Their outdated site did not reflect their modern approach to law practice. They needed secure document sharing capabilities for existing clients and wanted to improve their visibility in local search results for specific practice areas.',
    solution: 'We designed a sophisticated website with clean typography and professional photography that conveys authority while remaining approachable. The practice area pages are SEO-optimized with detailed service descriptions and case studies. We developed a secure client portal with encrypted document storage and two-factor authentication. The contact system includes intelligent routing that directs inquiries to the appropriate practice group.',
    results: [
      { metric: 'Qualified Leads', value: '+94%', description: 'Increase in consultation requests' },
      { metric: 'Search Rankings', value: 'Top 3', description: 'Position for key practice terms' },
      { metric: 'Client Portal Usage', value: '85%', description: 'Active client adoption rate' },
      { metric: 'Page Authority', value: '+63%', description: 'Domain authority improvement' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Auth0', 'AWS S3', 'Next.js'],
    galleryImages: [
      'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    testimonial: {
      quote: 'The new website and client portal have modernized our practice. We are attracting higher-quality clients and providing better service to existing ones.',
      author: 'Robert Shelton',
      position: 'Managing Partner, Shelton & Associates',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectUrl: 'https://shelton-law.com',
    duration: '4 months',
    team: '5 specialists',
    industry: 'Legal Services'
  }
];

export const projectsData = [
  {
    id: 1,
    slug: 'pjc-construction',
    title: 'PJC Construction',
    client: 'PJC Construction Inc.',
    category: 'Website Development',
    year: '2024',
    services: ['Design', 'Development', 'Strategy'],
    featuredImage: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    shortDescription: 'Modern construction company website with project showcase',
    description: 'A comprehensive digital platform designed for a leading construction company, featuring an interactive project portfolio, service offerings, and client testimonials.',
    challenge: 'PJC Construction needed a professional online presence that would reflect their quality craftsmanship and extensive project portfolio. The previous website was outdated and did not effectively communicate their capabilities to potential clients.',
    solution: 'We developed a modern, responsive website with a custom content management system that allows the PJC team to easily update project galleries and case studies. The design emphasizes visual storytelling through full-width imagery and smooth animations.',
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
    testimonial: { quote: 'The new website has transformed how we present our work to clients.', author: 'Pierre-Jean Cote', position: 'CEO, PJC Construction', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200' },
    projectUrl: 'https://pjc-construction.com', duration: '3 months', team: '4 specialists', industry: 'Construction'
  },
  {
    id: 2, slug: 'widescape-architecture', title: 'Widescape Architecture', client: 'Widescape Studio', category: 'Brand & Web Design', year: '2024',
    services: ['Branding', 'Design', 'Development'],
    featuredImage: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    shortDescription: 'Architectural firm portfolio with immersive 3D experiences',
    description: 'An award-winning portfolio website for a contemporary architecture firm, featuring interactive 3D project visualizations and detailed case studies.',
    challenge: 'Widescape needed a digital presence that matched the sophistication of their architectural projects.',
    solution: 'We created a visually stunning platform with WebGL-powered 3D project previews and smooth scroll-triggered animations.',
    results: [
      { metric: 'Industry Recognition', value: '2 Awards', description: 'Design excellence awards received' },
      { metric: 'Session Duration', value: '+89%', description: 'Increase in time spent on site' },
      { metric: 'Project Inquiries', value: '+56%', description: 'Growth in consultation requests' },
      { metric: 'International Reach', value: '+120%', description: 'Increase in overseas visitors' }
    ],
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'WebGL'],
    galleryImages: ['https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: { quote: 'They understood our vision and created a website that truly reflects the quality of our work.', author: 'Sarah Williams', position: 'Creative Director, Widescape Studio', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200' },
    projectUrl: 'https://widescape-studio.com', duration: '4 months', team: '5 specialists', industry: 'Architecture'
  },
  {
    id: 3, slug: 'oka-restaurant', title: 'OKA Restaurant', client: 'OKA Dining Group', category: 'Website & E-commerce', year: '2023',
    services: ['Strategy', 'Design', 'Development'],
    featuredImage: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    shortDescription: 'Premium restaurant website with online reservation system',
    description: 'A sophisticated digital experience for an upscale restaurant, combining elegant design with practical functionality.',
    challenge: 'OKA needed a website that would convey their premium dining experience while providing seamless online reservations.',
    solution: 'We designed an elegant, imagery-focused website with a custom-built reservation system.',
    results: [
      { metric: 'Online Reservations', value: '+78%', description: 'Increase in booking completion rate' },
      { metric: 'Average Booking Value', value: '+34%', description: 'Growth in party size and spending' },
      { metric: 'Event Bookings', value: '+91%', description: 'Private event inquiry increase' },
      { metric: 'Mobile Reservations', value: '+125%', description: 'Growth in mobile bookings' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    galleryImages: ['https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: { quote: 'We have seen remarkable growth in online reservations since launch.', author: 'Michel Dubois', position: 'Owner, OKA Restaurant', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
    projectUrl: 'https://oka-restaurant.com', duration: '2.5 months', team: '3 specialists', industry: 'Hospitality'
  },
  {
    id: 4, slug: 'opto-reseau', title: 'Opto-Reseau', client: 'Opto-Reseau', category: 'Brand Identity', year: '2023',
    services: ['Advertising', 'Brand Platform', 'Design', 'Photography'],
    featuredImage: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    shortDescription: 'We see you like no other',
    description: 'A complete brand identity overhaul for one of Quebec\'s leading optical clinic networks.',
    challenge: 'Opto-Reseau needed to stand out in a crowded optical market with a fresh, modern identity.',
    solution: 'We developed a flexible brand platform borrowing codes from fashion and magazines, deployable across multiple clinic locations.',
    results: [
      { metric: 'Brand Recall', value: '+112%', description: 'Aided brand awareness increase' },
      { metric: 'Clinic Visits', value: '+45%', description: 'Walk-in traffic growth' },
      { metric: 'Online Appointments', value: '+67%', description: 'Digital booking increase' },
      { metric: 'Satisfaction', value: '4.8/5', description: 'Customer satisfaction score' }
    ],
    technologies: ['Brand Strategy', 'Visual Identity', 'Photography', 'Print Design'],
    galleryImages: ['https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: { quote: 'The new brand has been a game-changer for our network.', author: 'Emma Laurent', position: 'Marketing Director, Opto-Reseau', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200' },
    projectUrl: null, duration: '5 months', team: '6 specialists', industry: 'Healthcare'
  },
  {
    id: 5, slug: 'lamajeure', title: 'La Majeure', client: 'La Majeure Studio', category: 'Branding & Content', year: '2023',
    services: ['Branding', 'Design', 'Content'],
    featuredImage: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    shortDescription: 'Custom sound production studio showcase',
    description: 'A dynamic portfolio website for a premium audio production studio.',
    challenge: 'La Majeure needed a platform that would showcase their audio production capabilities while making it easy to book studio time.',
    solution: 'We created an immersive website with embedded audio players for portfolio samples.',
    results: [
      { metric: 'Studio Bookings', value: '+87%', description: 'Increase in session reservations' },
      { metric: 'Efficiency', value: '+95%', description: 'Reduction in booking conflicts' },
      { metric: 'Client Retention', value: '+41%', description: 'Repeat booking increase' },
      { metric: 'Engagement', value: '+156%', description: 'Audio sample plays' }
    ],
    technologies: ['React', 'GSAP', 'Node.js'],
    galleryImages: ['https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: { quote: 'Our new website has streamlined our entire booking process.', author: 'Antoine Tremblay', position: 'Founder, La Majeure Studio', image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200' },
    projectUrl: null, duration: '3 months', team: '4 specialists', industry: 'Media'
  },
  {
    id: 6, slug: 'shelton-brewery', title: 'Shelton Brewery', client: 'Shelton Brewing Co.', category: 'Branding & Design', year: '2023',
    services: ['Branding', 'Design', 'Advertising'],
    featuredImage: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
    shortDescription: 'Craft brewery brand identity and digital presence',
    description: 'A complete brand identity for a Montreal craft brewery, from visual identity to taproom experience design.',
    challenge: 'Shelton needed a brand that would stand out in Montreal\'s booming craft beer scene.',
    solution: 'We designed a bold, distinctive brand with custom typography and packaging design.',
    results: [
      { metric: 'Brand Recognition', value: '+94%', description: 'Local brand awareness' },
      { metric: 'Taproom Traffic', value: '+67%', description: 'Weekly visitor increase' },
      { metric: 'Social Following', value: '22K+', description: 'Combined social followers' },
      { metric: 'Distribution', value: '+85%', description: 'Retail point expansion' }
    ],
    technologies: ['Brand Strategy', 'Packaging Design', 'Photography', 'Digital Design'],
    galleryImages: ['https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: { quote: 'The brand has become our strongest asset.', author: 'Robert Shelton', position: 'Founder, Shelton Brewing', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
    projectUrl: null, duration: '4 months', team: '5 specialists', industry: 'Food & Beverage'
  },
  {
    id: 7, slug: 'ia-financial-group', title: 'iA Financial Group', client: 'iA Financial Group', category: 'Digital Strategy', year: '2024',
    services: ['Strategy', 'Advertising', 'Content'],
    featuredImage: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Financial services digital transformation',
    description: 'A strategic digital campaign for one of Canada\'s leading financial services companies.',
    challenge: 'iA Financial Group needed to modernize their digital presence and connect with a younger demographic.',
    solution: 'We developed an integrated digital strategy combining targeted advertising, content marketing, and platform redesign.',
    results: [
      { metric: 'Engagement', value: '+145%', description: 'Digital engagement increase' },
      { metric: 'New Accounts', value: '+67%', description: 'Growth in new customers' },
      { metric: 'Brand Awareness', value: '+82%', description: 'Aided brand recall improvement' },
      { metric: 'Cost Per Lead', value: '-38%', description: 'Reduction in acquisition cost' }
    ],
    technologies: ['React', 'Next.js', 'Analytics', 'A/B Testing'],
    galleryImages: ['https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: null, projectUrl: null, duration: '6 months', team: '8 specialists', industry: 'Financial Services'
  },
  {
    id: 8, slug: 'jean-coutu', title: 'Jean Coutu', client: 'Jean Coutu Group', category: 'Advertising Campaign', year: '2024',
    services: ['Advertising', 'Strategy', 'Content'],
    featuredImage: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Pharmacy chain national advertising campaign',
    description: 'A national multi-platform advertising campaign for one of Quebec\'s most trusted pharmacy brands.',
    challenge: 'Jean Coutu needed to reinforce their position as the community pharmacy of choice.',
    solution: 'We crafted a multi-channel campaign blending emotional storytelling with product-driven messaging.',
    results: [
      { metric: 'Reach', value: '12M+', description: 'Canadians reached across platforms' },
      { metric: 'Store Traffic', value: '+23%', description: 'In-store visit increase' },
      { metric: 'Ad Recall', value: '+91%', description: 'Campaign recognition rate' },
      { metric: 'Engagement', value: '+178%', description: 'Social interactions increase' }
    ],
    technologies: ['Video Production', 'Social Media', 'Analytics', 'Media Buying'],
    galleryImages: ['https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: null, projectUrl: null, duration: '4 months', team: '7 specialists', industry: 'Retail & Pharmacy'
  },
  {
    id: 9, slug: 'fondation-banq', title: 'Fondation BAnQ', client: 'BAnQ Foundation', category: 'Brand Identity', year: '2023',
    services: ['Branding', 'Design', 'Strategy'],
    featuredImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'National library foundation brand refresh',
    description: 'A brand refresh for the foundation supporting Quebec\'s national library and archives.',
    challenge: 'The foundation needed a brand identity that honored their heritage while appealing to new donors.',
    solution: 'We created a modern, approachable brand system that balances institutional credibility with warmth.',
    results: [
      { metric: 'Donations', value: '+56%', description: 'Annual donation increase' },
      { metric: 'Recognition', value: '+73%', description: 'Brand awareness growth' },
      { metric: 'Volunteers', value: '+89%', description: 'Application growth' },
      { metric: 'Events', value: '+44%', description: 'Fundraiser attendance increase' }
    ],
    technologies: ['Brand Strategy', 'Visual Identity', 'Print Design'],
    galleryImages: ['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: null, projectUrl: null, duration: '3 months', team: '4 specialists', industry: 'Non-Profit'
  },
  {
    id: 10, slug: 'coup-fumant', title: 'Coup Fumant', client: 'Coup Fumant BBQ', category: 'Branding & Content', year: '2023',
    services: ['Branding', 'Content', 'Photography'],
    featuredImage: 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'BBQ restaurant brand creation from scratch',
    description: 'Complete brand creation for a new Montreal BBQ restaurant.',
    challenge: 'A new restaurant entering Montreal\'s competitive food scene needed a memorable brand.',
    solution: 'We developed a bold, smoky brand identity with custom typography and food photography direction.',
    results: [
      { metric: 'Opening Week', value: 'Sold Out', description: 'All reservations booked' },
      { metric: 'Social', value: '15K+', description: 'Instagram followers in first month' },
      { metric: 'Press', value: '12', description: 'Media features at launch' },
      { metric: 'Revenue', value: '+140%', description: 'Above projected Q1 revenue' }
    ],
    technologies: ['Brand Strategy', 'Visual Identity', 'Photography'],
    galleryImages: ['https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: null, projectUrl: null, duration: '2 months', team: '5 specialists', industry: 'Food & Beverage'
  },
  {
    id: 11, slug: 'sollio-cooperative', title: 'Sollio Groupe Cooperatif', client: 'Sollio', category: 'Digital Strategy', year: '2024',
    services: ['Strategy', 'Design', 'Content'],
    featuredImage: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Agricultural cooperative digital transformation',
    description: 'Digital strategy and content platform for one of Canada\'s largest agricultural cooperatives.',
    challenge: 'Sollio needed to unify communication across multiple divisions.',
    solution: 'We built a centralized digital platform with division-specific content hubs.',
    results: [
      { metric: 'Adoption', value: '78%', description: 'Member activation rate' },
      { metric: 'Engagement', value: '+210%', description: 'Article read-through increase' },
      { metric: 'Satisfaction', value: '4.6/5', description: 'Platform satisfaction score' },
      { metric: 'Support', value: '-35%', description: 'Support request reduction' }
    ],
    technologies: ['Next.js', 'Headless CMS', 'Analytics'],
    galleryImages: ['https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: null, projectUrl: null, duration: '5 months', team: '6 specialists', industry: 'Agriculture'
  },
  {
    id: 12, slug: 'lassonde-fruite', title: 'Lassonde (Fruite)', client: 'Lassonde Industries', category: 'Advertising Campaign', year: '2024',
    services: ['Advertising', 'Content', 'Strategy'],
    featuredImage: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Juice brand summer campaign',
    description: 'A vibrant summer advertising campaign for one of Quebec\'s beloved juice brands.',
    challenge: 'Fruite needed to re-energize their brand with younger consumers.',
    solution: 'We created a campaign centered on authentic summer moments and influencer partnerships.',
    results: [
      { metric: 'Sales', value: '+28%', description: 'Summer sales increase' },
      { metric: 'UGC', value: '5K+', description: 'User-generated posts' },
      { metric: 'Sentiment', value: '+41%', description: 'Positive sentiment increase' },
      { metric: 'Market Share', value: '+3.2%', description: 'Category share growth' }
    ],
    technologies: ['Social Media', 'Influencer Marketing', 'Video Production'],
    galleryImages: ['https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1536849/pexels-photo-1536849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: null, projectUrl: null, duration: '3 months', team: '6 specialists', industry: 'Food & Beverage'
  },
  {
    id: 13, slug: 'gardaworld', title: 'GardaWorld', client: 'GardaWorld', category: 'Brand Refresh', year: '2023',
    services: ['Branding', 'Strategy', 'Design'],
    featuredImage: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Global security company brand evolution',
    description: 'Brand evolution for one of the world\'s largest security companies.',
    challenge: 'GardaWorld needed their brand to reflect their global scale.',
    solution: 'We refreshed their visual identity system with a modern, authoritative look.',
    results: [
      { metric: 'Consistency', value: '95%', description: 'Global brand compliance' },
      { metric: 'Recognition', value: '+62%', description: 'Industry recognition' },
      { metric: 'Recruitment', value: '+38%', description: 'Job applications increase' },
      { metric: 'Trust', value: '+27%', description: 'Trust index improvement' }
    ],
    technologies: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
    galleryImages: ['https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/4427622/pexels-photo-4427622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: null, projectUrl: null, duration: '6 months', team: '7 specialists', industry: 'Security'
  },
  {
    id: 14, slug: 'pme-mtl', title: 'PME MTL', client: 'PME MTL', category: 'Digital Platform', year: '2023',
    services: ['Strategy', 'Design', 'Development'],
    featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Montreal business support platform redesign',
    description: 'Redesign of the digital platform supporting Montreal\'s SME ecosystem.',
    challenge: 'PME MTL needed to simplify access to their business support services.',
    solution: 'We redesigned the platform with an intuitive service finder and streamlined applications.',
    results: [
      { metric: 'Applications', value: '+112%', description: 'Online application growth' },
      { metric: 'Satisfaction', value: '4.7/5', description: 'Usability rating' },
      { metric: 'Processing', value: '-60%', description: 'Application time reduction' },
      { metric: 'Engagement', value: '+85%', description: 'Return visit rate' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    galleryImages: ['https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    testimonial: null, projectUrl: null, duration: '4 months', team: '5 specialists', industry: 'Government'
  },
]

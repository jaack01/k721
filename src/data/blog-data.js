export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Design',
    slug: 'future-of-web-design',
    excerpt: 'Exploring emerging trends and technologies shaping the future of digital experiences.',
    author: 'Sarah Chen',
    authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    publishedDate: '2024-03-15',
    readTime: '8 min',
    featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Design',
    content: [
      {
        type: 'paragraph',
        text: 'The landscape of web design is evolving at an unprecedented pace. As we move further into the digital age, the expectations for web experiences continue to grow, pushing designers and developers to innovate constantly.'
      },
      {
        type: 'paragraph',
        text: 'Modern web design is no longer just about making things look good. It is about creating immersive, intuitive experiences that engage users and drive meaningful interactions. The fusion of aesthetics and functionality has become the cornerstone of successful digital products.'
      },
      {
        type: 'heading',
        text: 'The Rise of Minimalism'
      },
      {
        type: 'paragraph',
        text: 'Minimalist design has taken center stage in recent years. By stripping away unnecessary elements and focusing on what truly matters, designers create interfaces that are both beautiful and highly functional. This approach not only improves user experience but also enhances performance and accessibility.'
      },
      {
        type: 'quote',
        text: 'Less is more when every element serves a purpose.'
      },
      {
        type: 'paragraph',
        text: 'The minimalist philosophy extends beyond visual design. It influences how we structure information, organize content, and guide users through digital experiences. Every element must earn its place on the screen.'
      },
      {
        type: 'heading',
        text: 'Interactive Experiences'
      },
      {
        type: 'paragraph',
        text: 'Animation and interactivity have become essential tools in the modern designer toolkit. When used thoughtfully, they can transform static interfaces into engaging experiences that delight users and communicate brand personality.'
      },
      {
        type: 'paragraph',
        text: 'Technologies like GSAP and Three.js have made it easier than ever to create sophisticated animations and 3D experiences on the web. The key is to use these tools judiciously, enhancing the experience without overwhelming users or sacrificing performance.'
      }
    ]
  },
  {
    id: 2,
    title: 'Mastering GSAP Animations',
    slug: 'mastering-gsap-animations',
    excerpt: 'Learn advanced animation techniques to create stunning interactive web experiences.',
    author: 'Michael Torres',
    authorImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    publishedDate: '2024-03-10',
    readTime: '12 min',
    featuredImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Development',
    content: [
      {
        type: 'paragraph',
        text: 'GSAP has revolutionized how we approach web animation. Its powerful API and exceptional performance make it the go-to choice for developers who want to create smooth, professional animations.'
      },
      {
        type: 'paragraph',
        text: 'Understanding the fundamentals of GSAP is crucial for any front-end developer. From simple tweens to complex timelines, mastering these concepts opens up a world of creative possibilities.'
      },
      {
        type: 'heading',
        text: 'Timeline Mastery'
      },
      {
        type: 'paragraph',
        text: 'Timelines are the backbone of complex animations in GSAP. They allow you to sequence multiple animations, control their timing precisely, and create sophisticated choreography with ease.'
      },
      {
        type: 'quote',
        text: 'Great animation is invisible until it is needed, then it is unforgettable.'
      },
      {
        type: 'paragraph',
        text: 'By chaining animations together in a timeline, you can create narratives that guide users through your interface, reveal content progressively, and add personality to your brand.'
      },
      {
        type: 'heading',
        text: 'Performance Optimization'
      },
      {
        type: 'paragraph',
        text: 'While GSAP is optimized for performance out of the box, understanding how to write efficient animations is essential. Using transform properties, avoiding layout thrashing, and managing animation lifecycles properly ensures your animations run smoothly on all devices.'
      }
    ]
  },
  {
    id: 3,
    title: 'Responsive Design Best Practices',
    slug: 'responsive-design-best-practices',
    excerpt: 'Creating seamless experiences across all devices with modern CSS techniques.',
    author: 'Emma Laurent',
    authorImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    publishedDate: '2024-03-05',
    readTime: '10 min',
    featuredImage: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Design',
    content: [
      {
        type: 'paragraph',
        text: 'Responsive design is no longer optional. With users accessing websites from countless devices with varying screen sizes, creating flexible, adaptive layouts is fundamental to modern web development.'
      },
      {
        type: 'paragraph',
        text: 'The challenge lies in maintaining a consistent brand experience while adapting to different contexts and constraints. This requires careful planning, thoughtful design decisions, and a deep understanding of CSS capabilities.'
      },
      {
        type: 'heading',
        text: 'Mobile-First Approach'
      },
      {
        type: 'paragraph',
        text: 'Starting with mobile design forces you to prioritize content and functionality. By building up from the smallest screens, you ensure that your core experience is solid before adding enhancements for larger displays.'
      },
      {
        type: 'quote',
        text: 'Design for the device in your hand, not the one on your desk.'
      },
      {
        type: 'paragraph',
        text: 'This approach naturally leads to cleaner, more focused designs. It prevents feature bloat and ensures that every element serves a clear purpose.'
      },
      {
        type: 'heading',
        text: 'Fluid Typography and Spacing'
      },
      {
        type: 'paragraph',
        text: 'Using CSS clamp() and viewport units allows typography and spacing to scale smoothly between breakpoints. This creates a more harmonious experience and reduces the need for media queries.'
      }
    ]
  },
  {
    id: 4,
    title: 'React Performance Optimization',
    slug: 'react-performance-optimization',
    excerpt: 'Essential strategies to optimize React applications for better user experience.',
    author: 'David Kim',
    authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    publishedDate: '2024-02-28',
    readTime: '15 min',
    featuredImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Development',
    content: [
      {
        type: 'paragraph',
        text: 'React performance optimization is crucial for delivering fast, responsive applications. Understanding how React works under the hood helps you write more efficient code and avoid common pitfalls.'
      },
      {
        type: 'paragraph',
        text: 'Performance issues often stem from unnecessary re-renders, large bundle sizes, and inefficient data handling. By addressing these areas systematically, you can dramatically improve your application performance.'
      },
      {
        type: 'heading',
        text: 'Preventing Unnecessary Re-renders'
      },
      {
        type: 'paragraph',
        text: 'React components re-render when their props or state change. However, not all re-renders are necessary. Using React.memo, useMemo, and useCallback strategically can prevent expensive computations and DOM updates.'
      },
      {
        type: 'quote',
        text: 'Measure first, optimize second. Do not guess what is slow.'
      },
      {
        type: 'paragraph',
        text: 'The React DevTools Profiler is invaluable for identifying performance bottlenecks. It shows you which components are re-rendering, how long they take, and why they updated.'
      },
      {
        type: 'heading',
        text: 'Code Splitting and Lazy Loading'
      },
      {
        type: 'paragraph',
        text: 'Large JavaScript bundles slow down initial page load. By splitting your code into smaller chunks and loading them on demand, you can significantly improve Time to Interactive and overall user experience.'
      }
    ]
  },
  {
    id: 5,
    title: 'Typography in Modern Web Design',
    slug: 'typography-modern-web-design',
    excerpt: 'The art and science of choosing and implementing the perfect typefaces for your projects.',
    author: 'Sophie Martin',
    authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    publishedDate: '2024-02-20',
    readTime: '9 min',
    featuredImage: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Design',
    content: [
      {
        type: 'paragraph',
        text: 'Typography is the foundation of web design. It communicates not just information, but tone, personality, and brand identity. Good typography makes content readable, accessible, and engaging.'
      },
      {
        type: 'paragraph',
        text: 'With variable fonts and modern CSS capabilities, we have more control over typography than ever before. The challenge is using these tools wisely to create harmonious, readable designs.'
      },
      {
        type: 'heading',
        text: 'Choosing the Right Typeface'
      },
      {
        type: 'paragraph',
        text: 'The typeface you choose sets the tone for your entire design. Serif fonts convey tradition and authority, while sans-serifs feel modern and clean. Understanding these associations helps you make informed choices.'
      },
      {
        type: 'quote',
        text: 'Typography is what language looks like.'
      },
      {
        type: 'paragraph',
        text: 'Consider your content and audience when selecting fonts. A playful brand might use a rounded sans-serif, while a financial institution would benefit from something more conservative and trustworthy.'
      },
      {
        type: 'heading',
        text: 'Hierarchy and Scale'
      },
      {
        type: 'paragraph',
        text: 'Establishing a clear typographic hierarchy guides readers through your content. Using size, weight, and spacing strategically helps users understand the relationships between different pieces of information.'
      }
    ]
  },
  {
    id: 6,
    title: 'Building Accessible Interfaces',
    slug: 'building-accessible-interfaces',
    excerpt: 'Making the web inclusive and accessible for everyone through thoughtful design.',
    author: 'Alex Rivera',
    authorImage: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200',
    publishedDate: '2024-02-15',
    readTime: '11 min',
    featuredImage: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Accessibility',
    content: [
      {
        type: 'paragraph',
        text: 'Accessibility is not a feature or an afterthought. It is a fundamental aspect of good design that ensures everyone can use and benefit from your digital products, regardless of their abilities.'
      },
      {
        type: 'paragraph',
        text: 'Building accessible interfaces requires understanding diverse user needs and implementing best practices from the start of your project. It is about creating experiences that work for everyone.'
      },
      {
        type: 'heading',
        text: 'Semantic HTML'
      },
      {
        type: 'paragraph',
        text: 'Using proper HTML elements is the foundation of accessibility. Semantic markup provides meaning and structure that assistive technologies rely on to help users navigate and understand content.'
      },
      {
        type: 'quote',
        text: 'The power of the web is in its universality. Access by everyone regardless of disability is an essential aspect.'
      },
      {
        type: 'paragraph',
        text: 'Buttons should be button elements, headings should follow a logical hierarchy, and forms should use appropriate labels and inputs. These basics make a huge difference.'
      },
      {
        type: 'heading',
        text: 'Keyboard Navigation'
      },
      {
        type: 'paragraph',
        text: 'Not everyone uses a mouse. Ensuring your interface is fully navigable by keyboard is crucial. This includes visible focus states, logical tab order, and skip links for repetitive content.'
      }
    ]
  }
];

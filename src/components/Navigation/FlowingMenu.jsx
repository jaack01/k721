import React, { useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context/NavContext';

function FlowingMenu({ items = [] }) {
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const fullScreenRef = useRef(null);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to('.flowingmenu', {
      display: 'block'
    });
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3
      }
    });
    tl.to('.flowlink', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3
      }
    });
    tl.to('.navlink', {
      opacity: 1
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to('.flowlink', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1
      }
    });
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: 0.1
      }
    });
    tl.to('.navlink', {
      opacity: 0
    });
    tl.to('.flowingmenu', {
      display: 'none',
    });
  }

  useGSAP(function () {
    if (navOpen) {
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [navOpen]);

  return (
    <div ref={fullScreenRef} className='flowingmenu hidden text-white overflow-hidden h-screen w-full z-[100] fixed'>
      <div className='h-screen w-full fixed'>
        <div className='h-full w-full flex'>
          <div className='stairing h-0 w-1/5 bg-black'></div>
          <div className='stairing h-0 w-1/5 bg-black'></div>
          <div className='stairing h-0 w-1/5 bg-black'></div>
          <div className='stairing h-0 w-1/5 bg-black'></div>
          <div className='stairing h-0 w-1/5 bg-black'></div>
        </div>
      </div>
      <div className='relative h-screen overflow-y-auto'>
        <div className="navlink opacity-0 flex w-full justify-between lg:p-5 p-3 items-start">
          <div className=''>
            <div className='lg:w-36 w-20'>
              <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
              </svg>
            </div>
          </div>
          <button
            onClick={() => setNavOpen(false)}
            className='lg:h-20 h-16 w-16 lg:w-20 min-w-[64px] min-h-[64px] relative cursor-pointer touch-manipulation'
            aria-label='Close navigation menu'
          >
            <div className='lg:h-28 h-20 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
            <div className='lg:h-28 h-20 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
          </button>
        </div>
        <div className='lg:py-12 py-8 px-3 lg:px-0'>
          {items.map((item, idx) => (
            <MenuItem key={idx} {...item} isLast={idx === items.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuItem({ link, text, image, isLast }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);
  const [, setNavOpen] = useContext(NavbarContext);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' });
  };

  const handleClick = () => {
    setNavOpen(false);
  };

  const repeatedMarqueeContent = Array.from({ length: 2 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <h2 className='whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.8] lg:py-6 py-2 uppercase text-black'>{text}</h2>
      <img className='lg:h-28 h-12 rounded-full shrink-0 lg:w-72 w-28 object-cover' src={image} alt="" />
    </React.Fragment>
  ));

  return (
    <Link
      to={link}
      onClick={handleClick}
      className={`flowlink origin-top opacity-0 relative ${isLast ? 'border-y-1' : 'border-t-1'} border-white block cursor-pointer touch-manipulation active:opacity-70`}
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className='font-[font2] text-3xl md:text-4xl lg:text-[6vw] text-center lg:leading-[0.8] py-4 lg:py-6 uppercase'>{text}</h1>
      <div
        className='absolute text-black flex top-0 bg-[#D3FD50] w-full h-full overflow-hidden pointer-events-none'
        ref={marqueeRef}
        style={{ transform: 'translateY(101%)' }}
      >
        <div className='flex h-full' ref={marqueeInnerRef} style={{ transform: 'translateY(-101%)' }}>
          <div className='moveX flex items-center'>
            {repeatedMarqueeContent}
          </div>
          <div className='moveX flex items-center'>
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FlowingMenu;

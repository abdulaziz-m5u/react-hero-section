import Profile from '../assets/profile.png';

import { SectionHeroStyle } from './Hero.style';
const Hero = () => {
  return (
    <SectionHeroStyle>
      <div className='hero-container row container'>
        <div className='row hero-content'>
          <div className='hero-image'>
            <svg
              width='255'
              height='249'
              viewBox='0 0 255 249'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask
                id='mask0_20_9'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='255'
                height='249'
              >
                <path
                  d='M242.246 195.922C225.531 240.942 194.663 257.323 149.643 245.065C104.622 232.807 64.2826 210.297 28.623 177.535C-7.0365 144.773 -9.37665 107.887 21.6026 66.8788C52.5818 25.8703 92.6988 3.69457 141.953 0.351492C191.208 -2.99159 224.416 17.5126 241.577 61.8642C258.738 106.216 258.961 150.902 242.246 195.922Z'
                  fill='#D1D8E0'
                />
              </mask>
              <g mask='url(#mask0_20_9)'>
                <path
                  d='M242.246 195.922C225.531 240.942 194.663 257.323 149.643 245.065C104.622 232.807 64.2826 210.297 28.623 177.535C-7.0365 144.773 -9.37665 107.887 21.6026 66.8788C52.5818 25.8703 92.6988 3.69457 141.953 0.351492C191.208 -2.99159 224.416 17.5126 241.577 61.8642C258.738 106.216 258.961 150.902 242.246 195.922Z'
                  fill='url(#paint0_linear_20_9)'
                />
                <image x='-35' y='-15' href={Profile} />
              </g>
              <defs>
                <linearGradient
                  id='paint0_linear_20_9'
                  x1='127.309'
                  y1='0'
                  x2='127.309'
                  y2='249'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#68B0E3' />
                  <stop offset='1' stop-color='#2072AC' stop-opacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className='hero-data'>
            <h1 className='hero-title'>
              Hi, I'm{' '}
              <span style={{ color: 'var(--first-color)' }}>Samantha Ming</span>
            </h1>
            <h3 className='hero-subtitle'>Frontend Developer</h3>
            <p className='hero-description'>
              I love doing pixel perfect design and <br /> producing good
              quality of work.
            </p>
            <a href='/#contact' className='hero-button'>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </SectionHeroStyle>
  );
};

export default Hero;

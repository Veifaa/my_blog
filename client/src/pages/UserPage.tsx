import { FC } from 'react';
import { Header } from '../components/Header';
import Ava from '../assets/Ava.webp'

const UserPage: FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row mx-10 bg-gradient-to-br p-6 rounded-lg shadow-lg">
      
{/* Ник/ава/описание --------------------------------------- */}
      
      <div className="lg:w-1/4 p-6 top-6 rounded-lg text-center">
    <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-main-purple to-transparent rounded"></div>
      <img src={Ava} alt="Profile" draggable="false" className="rounded-full  object-cover pointer-events-none cursor-pointer select-none mx-auto 
       mb-4 w-48 h-48 shadow-[0px_123px_123px_123px_rgba(79,0,128,0.3)]" />
      <h2 className="text-2xl font-semibold">destruct</h2>
      <p className="text-sm opacity-50 mt-1">Hello, I'm Destruct – C++ Developer</p>
      <p className="mt-4 opacity-80 text-sm">
        I'm an experienced C++ programmer with a passion for low-level coding and performance optimization.
        My focus is on building efficient, reliable solutions and writing clean, well-structured code. I believe in the importance of quality and security in every line I write, ensuring my code is both robust and optimized.
      </p>
      <div className="bg-gradient-to-r from-[#29153d] to-[#251245] h-1 my-2 h-sm rounded-full"></div>
      <div className='flex mt-3'>
      </div>
      
{/* --------------------------------------------------------- */}

<div className="bg-gradient-to-r from-[#492055] to-[#110250] p-[2px] rounded-full inline-block w-full">
    
{/* Блог/сабскрайб ------------------------------------------ */}

<div className="flex select-none items-center">
    <button className="bg-[#080808] text-white py-2 rounded-full text-1xl hover:bg-inherit transition duration-400 flex-1">
      Blog
    </button>
    <div className="flex items-center justify-center text-white px-4">
      <img
        width="32"
        height="32"
        src="https://img.icons8.com/windows/32/FFFFFF/conference-call.png"
        alt="conference-call"
        className="mr-2"
      />
      <span className="font-normal text-center">1337</span>
    </div>
    <button className="bg-[#080808] text-white py-2 rounded-full text-1xl hover:bg-inherit transition duration-400 flex-1">
      Subscribe
    </button>
  </div>

{/* --------------------------------------------------------- */}

{/* Мейн инфа------------------------------------------------ */}

</div>     
      <div className="p-6 rounded-lg shadow-md">
        <div className='text-left mx-0 my-0'>info</div>
        <div className="flex justify-between items-center">
          <h1 className="font-inter text-white">
            <div className='flex mt-1'>
              <img className='select-none' width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/marker.png" alt="marker"/>
              <div className='text-1xl ml-2'>Frankfurt, Germany</div>
            </div>
            <div className='flex mt-2'>
            <img width="24" className='select-none' height="24" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/link.png" alt="link"/>
              <div 
          style={{
          display: 'block',
          maxWidth: '100%',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
          }} 
        className='text-sm  ml-2'>https://www.youtube.com/watch?v=VUlkvVNuNeA</div>
            </div>
            <div className='flex mt-2'>
            <img width="24" className='select-none' height="24" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/like--v1.png" alt="like--v1"/>
              <div className='text-1xl font-1xl ml-2'>never sex</div>
            </div>
          </h1>    
        </div>
      </div>
    </div>

{/* --------------------------------------------------------- */}

  <div className="flex flex-col md:w-2/3 bg-gradient-to-br p-6 rounded-lg ml-0 md:ml-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold font-inter text-white">
            Destruct
          </h1>    
        </div>
        <div className="flex flex-col md:flex-row md:w-2/3 p-6 rounded-lg shadow-md ml-0 md:ml-6">
{/* Социальные сети ------------------------------------------*/}
<div className="md:w-1/3 bg-[#110410] p-4 rounded-lg shadow-md mr-6 w-full">
  <h2 className="text-2xl font-inter text-white">Socials</h2>
  <div className="bg-gradient-to-r mt-0 from-[#492055] to-[#110250] p-[1px] rounded-full inline-block w-full"></div>
  <ul className="space-y-2">
    <li className="flex items-center text-white">
      <img
        className="h-6 w-6 mr-3"
        src="https://img.icons8.com/material-rounded/24/FFFFFF/instagram-new.png"
        alt="Instagram"
      />
      <a
        href="#"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        destructzzz
      </a>
    </li>
    <li className="flex items-center text-white">
      <img
        className="h-6 w-6 mr-3"
        src="https://img.icons8.com/material-rounded/24/FFFFFF/tiktok.png"
        alt="TikTok"
      />
      <a
        href="#"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        destructap
      </a>
    </li>
    <li className="flex items-center text-white">
      <img
        className="h-6 w-6 mr-3"
        src="https://img.icons8.com/material-rounded/24/FFFFFF/twitter.png"
        alt="Twitter"
      />
      <a
        href="#"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        destructap
      </a>
    </li>
    <li className="flex items-center text-white">
      <img
        className="h-6 w-6 mr-3"
        src="https://img.icons8.com/material-rounded/24/FFFFFF/domain.png"
        alt="Website"
      />
      <a
        href="#"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        destruczxxx
      </a>
    </li>
    <li className="flex items-center text-white">
      <img
        className="h-6 w-6"
        src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/
        external-stylish-p-logo-for-pinterest-app-for-cross-platform-devices-logo-bold-tal-revivo.png"
        alt="Pinterest"
      />
      <a
        href="#"
        className="hover:underline ml-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        destruczxxx
      </a>
    </li>
    <li className="flex items-center text-white">
      <img
        className="h-6 w-6"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/filled-message.png"
        alt="Email"
      />
      <a
        href="#"
        className="hover:underline ml-3 truncate max-w-full"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          wordWrap: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        destruczxxx1.2sdff@geymail.com
      </a>
    </li>
  </ul>
</div>
{/*-----------------------------------------------------------*/}

{/*About me---------------------------------------------------*/}
  <div className="w-2/1">
  <div className="flex items-center mb-4">
      <h3 className="text-2xl font-inter mr-4 select-none opacity-80">
          About me
        </h3>
        <div className="flex-grow bg-gradient-to-r from-purple-950 to-transparent h-1 rounded-full relative">
          <p className="text-lg opacity-55 mt-3 select-none absolute top-[-1.5rem] right-0">
          </p>
        </div>
      </div>
    <p className="text-white w-3/2 text-base">
    Hello, I'm Destruct – an 18-year-old C++ developer based in Moscow, Russia. I specialize in low-level programming,
     performance optimization, and system design. With a deep passion for understanding how software interacts with 
     hardware, I focus on writing clean, efficient, and reliable code.

Over the past year, I’ve built various utilities, including game macros, process managers, and tools for enhancing
 system-level performance. My projects showcase a strong understanding of algorithms, data structures, and
  multithreading.

I’m not just passionate about coding—I’m dedicated to solving complex challenges with simplicity and precision. Whether
 it’s developing backend architectures, experimenting with TypeScript for web development, or integrating robust
  database solutions, I aim to deliver high-quality results that stand the test of time.

When I’m not coding, I enjoy diving into anime, playing Genshin Impact, and staying updated on the latest innovations
 in technology and design. If you're interested in discussing tech, games, or collaborative projects, feel free to 
 reach out.
    </p>
  </div>
  {/*----------------------------------------------------------- */}
</div>
      </div>
    </div>
    </>
  );
};

export default UserPage;

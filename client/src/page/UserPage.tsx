import img from "../assets/ss_bed14625da4c181e3334411fe03d5b72680761a3.jpg";
import SocialCard from "../components/ui/SocialCard";
const UserPage = () => {
  return (
    <div className='mt-3'>
      <div className='flex justify-center'>
        <div className='relative flex justify-start flex-wrap items-end bg-black w-4/5 h-72'>
          <img className='absolute m-auto inset-0 max-w-lg' src={img} alt='' />
          <img className='size-24 rounded-full' src={img} alt='' />
          <span className='pl-4 font-bold text-white'>nickname</span>
        </div>
      </div>
      <div className='bg-gradient-to-bl from-[#25014E] to-[#000000] m-auto max-w-screen-2xl max-h-64 h-64 rounded-xl mt-2'>
        <h1 className='text-white flex justify-start'>Social</h1>
        <div className='flex items-center mt'>
          <SocialCard />
        </div>
      </div>
    </div>
  );
};

export default UserPage;

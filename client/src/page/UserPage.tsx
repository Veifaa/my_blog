import img from "../assets/ss_bed14625da4c181e3334411fe03d5b72680761a3.jpg";
import SocialCard from "../components/ui/SocialCard";
import InfoCard from "../components/ui/UserCard";
const UserPage = () => {
  return (
    <div className='mt-3  font-'>
      <div className='relative flex justify-start shadow-[0px_0px_3px_1px_rgba(79,0,128,0.3)] items-end mx-14 bg-black rounded-xl h-72'>
        <img className='absolute m-auto object-cover inset-0 max-w-lg' src={img} alt='' />
        <img className='size-24 shadow-[1px_1px_10px_10px_rgba(100,0,128,0.3)] rounded-full object-cover ml-6 mb-6' src={img} alt='' />
        <span className='pl-4 text-4xl  mb-8'>nickname</span>
      </div>
      <div className="bg-gradient-to-r ml-14 from-purple-950 to-transparent rounded h-1 my-4 rounded-full"></div>
      <div className='bg-gradient-to-br from-[#1b0c20] to-black shadow-[0px_0px_3px_1px_rgba(79,0,128,0.3)] mx-14 max-h-64 h-30 rounded-xl mt-2'>
        <h1 className='flex justify-start ml-5 pt-5 mt-5 text-4xl'>Social</h1>
        <div className='flex items-center mt'>
          <SocialCard />
          <SocialCard />
          <SocialCard />
          <SocialCard />
          <SocialCard />
        </div>
      </div>
      <div className="bg-gradient-to-r ml-14 from-purple-950 to-transparent rounded h-1 my-4 rounded-full"></div>
      <div className='flex gap-5 mx-14'>
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default UserPage;

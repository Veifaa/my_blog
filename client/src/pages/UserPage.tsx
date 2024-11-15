import { FC } from 'react';
import img from '../assets/ss_bed14625da4c181e3334411fe03d5b72680761a3.jpg';
import SocialCard from '../components/ui/SocialCard';
import InfoCard from '../components/ui/UserCard';

const UserPage: FC = () => {
  return (
    <div className="mt-3 font-">
      <div className="relative flex justify-start items-end mx-14 bg-black  h-72">
        <img className="absolute m-auto inset-0 max-w-lg" src={img} alt="" />
        <img className="size-24 rounded-full ml-6 mb-6" src={img} alt="" />
        <span className="pl-4 text-5xl mb-8 font-bold">nickname</span>
      </div>

      <div className="bg-gradient-to-bl from-[#25014E] to-[#000000] mx-14 max-h-64 h-64 rounded-xl mt-2">
        <h1 className="flex justify-start ml-5 text-5xl">Social</h1>
        <div className="flex items-center mt">
          <SocialCard />
          <SocialCard />
        </div>
      </div>

      <div className="flex gap-5 mx-14">
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default UserPage;

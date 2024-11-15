import { FC } from 'react';
import chat from '../../assets/chat_bubble.png';

const SocialCard: FC = () => {
  return (
    <div className="ml-4 relative flex flex-col items-center mt-4">
      <h3 className="text-white mb-1 text-2xl">Telegram</h3>
      <img src={chat} alt="" className="self-center h-16 w-20" />
    </div>
  );
};

export default SocialCard;

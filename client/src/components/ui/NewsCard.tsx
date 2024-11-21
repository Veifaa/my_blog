import { FC } from 'react';

type NewsCardProps = {
  title: string;
  text: string;
};

const NewsCard: FC<NewsCardProps> = ({ title, text }) => {
  return (
    <div className="flex">
      <div className="mr-12 flex flex-col w-[412px] min-w-[412px]  h-[356px] bg-gradient-to-r from-[#1b0c20] to-black border rounded-3xl border-none">
        <h1 className="text-4xl font-inter  mb-1 mt-5 ml-5">{title}</h1>
        <h2 className="text-ellipsis overflow-hidden text-2xl flex mx-4 font-inter line-clamp-6 h-48 ">
          {text}
        </h2>
        <div className="mt-auto flex justify-end mr-6 mb-6">
          <button
            className="w-40 h-16 border rounded-full flex ring-transparent py-4 p-4 mt-auto items-center justify-center"
            type="button"
          >
            ReadMore
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

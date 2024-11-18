import React from 'react';

const NewsCard = () => {
  return (
    <div className="flex ">
      <div className="mr-12 flex flex-col w-[412px] h-[356px] bg-gradient-to-r from-[#1b0c20] to-black border rounded-3xl border-none">
        <h1 className="text-4xl font-inter  mb-1 mt-5 ml-5">Title</h1>
        <h2 className="text-ellipsis overflow-hidden text-2xl flex mx-4 font-inter line-clamp-6 h-48 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ipsa ad blanditiis, totam facilis illo dolores inventore est minus
          tempore saepe at temporibus, pariatur eligendi, laborum corporis
          voluptas veniam vero. Exercitationem dolor culpa natus aut minus quis
          repellat odit asperiores cumque id labore, illo ipsa earum!
          Perferendis reiciendis at beatae eligendi dicta a incidunt placeat,
          inventore sapiente, ab officia temporibus. Fuga numquam, est
          doloremque illum quaerat
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

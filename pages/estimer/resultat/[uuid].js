import React from 'react';

export default function EstimateResult({ uuid }) {
  return (
    <div className='flex items-center justify-center flex-grow bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400'>
      <div className='flex flex-col w-1/2 p-8 transform bg-white rotate-2 h-1/2'>
        <div className='transform -rotate-2'>
          <p>Estimation : {uuid}</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam veniam beatae voluptates soluta dolorum iure,
            laudantium itaque corporis saepe impedit velit? Sint nesciunt similique explicabo distinctio ducimus,
            suscipit ipsum illum consequatur ex molestias porro, quisquam ullam. Repellat maxime veritatis quo inventore
            quisquam nisi, rem iure harum, saepe officiis adipisci fuga?
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      uuid: params.uuid,
    },
  };
}

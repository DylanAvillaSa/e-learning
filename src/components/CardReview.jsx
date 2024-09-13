const CardReview = ({ rate, name, ask }) => {
  return (
    <section className='w-[800px] h-[352px] justify-start gap-32  items-center rounded-2xl bg-white py-7 px-12 flex'>
      <div className='flex flex-col gap-1.5 items-center'>
        <p className='text-3xl font-semibold'>{rate}</p>
        <span>{rate > 5 ? "⭐⭐⭐⭐⭐" : "⭐⭐⭐⭐"}</span>
      </div>

      <section className='flex flex-col gap-3 self-start'>
        <article>
          <p className='text-8xl font-semibold'>“</p>
          <p className='text-xl font-semibold'>{name}</p>
          <span className='font-extralight text-gray-500 text-sm'>Penanya</span>
        </article>

        <p className='font-normal'>{ask}</p>
      </section>
    </section>
  );
};

export default CardReview;

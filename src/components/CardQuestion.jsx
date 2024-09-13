const CardQuestion = ({ name, ask }) => {
  return (
    <section className='w-[355px] h-[310px] rounded-2xl px-5 flex flex-col justify-between py-7 bg-white'>
      <p className='text-base font-semibold'>{name}</p>
      <span className='font-extralight text-sm'>Penanya</span>

      <p className='font-normal'>{ask}</p>
      <button className='w-[130px] h-[45px] font-normal text-sm rounded-xl bg-[#646b93] text-white'>
        Jawaban
      </button>
    </section>
  );
};

export default CardQuestion;

const CardCategory = ({ src, title, description }) => {
  return (
    <article className='w-[350px] bg-white px-4 h-[232px] rounded-xl flex flex-col justify-between py-5'>
      <img
        src={`/images/icon/${src}.png`}
        className='w-[48.76px] h-[60px]'
      />
      <h2 className='font-medium text-xl'>{title}</h2>
      <p className='font-normal'>{description}</p>
    </article>
  );
};

export default CardCategory;

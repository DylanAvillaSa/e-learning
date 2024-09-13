const ContentImage = ({ src, style }) => {
  return (
    <figcaption>
      <img
        src={`/images/logo/${src}.png`}
        className={`${style} object-cover drop-shadow-xl`}
      />
    </figcaption>
  );
};

export default ContentImage;

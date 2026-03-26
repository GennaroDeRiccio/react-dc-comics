const ComicsCard = (props) => {
  const { id, title, thumb, series } = props.card;
  return (
    <article className="comic-card">
      <div className="comic-thumb">
        <img src={thumb} alt={title} />
      </div>
      <h3>{series}</h3>
    </article>
  );
};

export default ComicsCard;

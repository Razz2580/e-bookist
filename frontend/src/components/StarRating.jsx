const StarRating = ({ outof, rating }) => {
  // console.log(typeof outof);

  return Array.from({ length: outof }, (_, i) => {
    return i + 1 <= rating ? (
      <span key={i} className="fa fa-star"></span>
    ) : i + 1 - rating === 0.5 ? (
      <span key={i} className="fa fa-star-half-o"></span>
    ) : (
      <span key={i} className="fa fa-star-o"></span>
    );
  });
};

export default StarRating;

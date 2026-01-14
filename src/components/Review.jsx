

function Review({ img, name, occupation, description, stars }) {
  return (
    <div className="rating">
  <span className="stars">{stars}</span>
  <p className="description">{description}</p>

  <div className="user">
    <img src={img} alt={name} />

    <div>
      <h3 className="text-primary">{name}</h3>
      <p>{occupation}</p>
    </div>

  </div>

</div>
// ...existing code... 
  )
}

export default Review

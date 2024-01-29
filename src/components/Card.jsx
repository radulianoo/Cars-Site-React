function Card({imageUrl, title, price}) {
    return <div className="cars-card">
        <img src="{imageUrl}" alt="car-picture" />
        <h2>{title}</h2>
        <p>{`${price} /day`}</p>
    </div>
}

export default Card;
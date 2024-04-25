/* eslint-disable react/prop-types */

function Card({ item }) {
  return (
    <div className="">
      <div className=" card w-96 bg-base-100 shadow-xl mb-2 ">
        <figure>
          <img src={item.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-Angkor">
            {item.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-Anto uppercase">{item.des}</p>
          <div className="card-actions justify-end">
            {item.skill.map((link, i) => (
              <div key={i} className="badge badge-outline">
                {link}
              </div>
            ))}
          </div>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary font-philos">VISIT</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

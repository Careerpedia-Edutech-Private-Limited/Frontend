import "./Cards.css";

const Cards = ({ data }) => {
  console.log(data)
  const { name, address, image1, dollar, image2, fullTime, image3, shift, image4, openings, paragraph } = data
  return (

    <div className="allCards">
      <div className="cards">

        <div className="heading">
          <h4 className="heading-text">{name}</h4>
          <p className="address-text">{address}</p>
        </div>

        <div className="row">
          <div className="Img1">
            <img className="image-style" src={image1} />
            <p className="font-text">{dollar}</p>
          </div>
          <div className="Img2">
            <img className="image-style" src={image2} />
            <p className="font-text">{fullTime}</p>
          </div>
        </div>

        <div className="row">
          <div className="Img1">
            <img className="image-style" src={image3} />
            <p className="font-text">{shift}</p>
          </div>
          <div className="Img2">
            <img className="image-style" src={image4} />
            <p className="font-text">{openings}</p>
          </div>
        </div>

        <p className="paragraph-text">{paragraph}</p>

        <div className="buttons-style">
          <button className="button-button1">Edit</button>
          <button className="button-button2">Deactivate</button>
        </div>
      </div>

    </div>

  );
};

export default Cards;
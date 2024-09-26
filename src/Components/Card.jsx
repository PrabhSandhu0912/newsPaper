import React from 'react'

const Card = ({data}) => {
  console.log(data)
  return (
    <>
        <div className="cardContainer">
          {data.map((currValue, index) => {
            if(!currValue.urlToImage){
              return null
            }else{
              return(
                <div className="card">
                  <img src={currValue.urlToImage} alt='img'></img>
                  <div className="content">
                  <a onClick={() => window.open(currValue.url)}>{currValue.title}</a>
                  <p>{currValue.description}</p>
                  <button onClick={() => window.open(currValue.url)}>Read More</button>
                  </div>
                </div>
              )
            }
          })}
        </div>
    </>
  )
}

export default Card;
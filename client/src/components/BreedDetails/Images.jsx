const Images = ({ images }) => (
  <div className="grid-container">
    {images.map((image, index) => {
        return <img src={image} className="sub-image" alt={'Cat'} key={index} />
      })
    }
  </div>
)

export default Images;

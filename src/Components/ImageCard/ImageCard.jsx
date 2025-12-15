function ImageCard({ image }) {
    return (
      <div className="image-card">
        <img src={image.url} alt={image.title} width="150" />
        <p>{image.title}</p>
      </div>
    );
  }
  
  export default ImageCard;
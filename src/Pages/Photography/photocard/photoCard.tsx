import "./photoCard.css";

function PhotoCard(photo: { url: string; title: string; description: string }) {
  return (
    <div className="photo-card">
      <img src={photo.url} alt={photo.title} draggable="false"></img>
      <h2>{photo.title}</h2>
    </div>
  );
}

export default PhotoCard;

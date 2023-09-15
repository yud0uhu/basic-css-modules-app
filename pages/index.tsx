import styles from "../styles.module.css";

const generateRandomImageUrl = () => {
  const width = Math.floor(Math.random() * 500) + 100;
  const height = Math.floor(Math.random() * 500) + 100;
  return `https://placekitten.com/${width}/${height}`;
};

const ImageList = () => {
  const images = Array.from({ length: 500 }, (_, index) => ({
    id: index,
    url: generateRandomImageUrl(),
  }));

  return (
    <div className={styles.imageList}>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
      ))}
    </div>
  );
};

export default ImageList;

import css from '../styles/styles.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({img, largeImg, toggleModal}) => {
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={() => toggleModal(largeImg)}>
          <img src={img} alt="" className={css.ImageGalleryItem_image} />
        </li>               
      </>
    );
  }

export default ImageGalleryItem;

 ImageGalleryItem.propTypes = {
  img: PropTypes.string, 
  largeImg: PropTypes.string,
  toggleModal: PropTypes.func,
 }

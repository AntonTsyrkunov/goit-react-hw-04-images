import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchedPhotoes from './API/API';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import css from './styles/styles.module.css';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [imgs, setImgs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const handleSearch = text => {
    setQuery(text);
    setPage(1);
    setImgs([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const toggleModal = image => {
    setIsModalOpen(prev => !prev);
    setCurrentImg(image);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchedPhotoes(query, page);
      setImgs(prev => [...prev, ...data.data.hits]);
      setIsLoading(false);
    };

    if (query && page) {
      fetchData();
    }
  }, [query, page]);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery
        imgs={imgs}
        onClick={setCurrentImg}
        toggleModal={toggleModal}
      />
      {imgs.length > 11 && (
        <Button onClick={handleLoadMore} className={css.Button}></Button>
      )}
      {isModalOpen && (
        <Modal toggleModal={toggleModal} img={currentImg} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};

import React, { Component } from 'react';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import { fetchPicture } from './api/Api';
import Searchbar from 'components/searchbar/Searchbar';
import Loader from './loader/Loader';
import Button from './button/Button';

export class App extends Component {
  state = {
    page: 1,
    images: [],
    filter: '',
    showModal: false,
    image: {
      url: '',
      alt: '',
    },
    loader: false,
  };

  componentDidMount() {
    this.getPictures();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.getPictures(_, this.state.page);
    }

    if (prevState.filter !== this.state.filter) {
      this.setState({ images: [] });
      this.getPictures(this.state.filter);
    }
  }

  onImageClick = obj => {
    this.setState({
      image: {
        url: obj.largeImageURL,
        alt: obj.tags,
      },
    });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  handleFilterChange = filter => {
    this.setState({ filter: filter });
  };

  handleOnButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getPictures = async (value = '') => {
    this.setState({ loader: true });
    try {
      const data = await fetchPicture(value, this.state.page);
      if (data.hits.length === 0)
        return alert('Opps! There are no pictures available');

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ loader: false });
    }
  };

  render() {
    return (
      <>
        <div>
          <Searchbar handleFilterChange={this.handleFilterChange} />
          <ImageGallery
            images={this.state.images}
            onImageClick={this.onImageClick}
          />
        </div>
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal}>
            <img src={this.state.image.url} alt={this.state.image.alt} />
          </Modal>
        )}
        {this.state.images.length !== 0 && (
          <Button onClick={this.handleOnButtonClick} />
        )}
        {this.state.loader && <Loader />}
      </>
    );
  }
}

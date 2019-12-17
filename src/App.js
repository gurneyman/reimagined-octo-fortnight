import React, { useEffect, useState } from "react";

import Header from './components/Header';
import GiphyGallery from './components/GiphyGallery';
import { search } from "./api";

import './App.css';
import GlobalErrorBoundary from "./components/GlobalErrorBoundary";

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isMoreItems, setIsMoreItems] = useState(false);
  
  useEffect(() => {
    if(query) {
      setLoading(true);
      search(query)
      .then((res) => {
        setIsMoreItems(res.data.length < res.meta.total_count);
        setImages(res.data);
        setLoading(false);
      });
    }
  }, [query]);

  function loadMore() {
    setLoading(true);
    search(query, pageNumber)
      .then((res) => {
        setIsMoreItems(res.data.length < res.meta.total_count);
        setImages(images.concat(res.data));
        setPageNumber(pageNumber + 1);
        setLoading(false);
      });
  }
  return (
      <GlobalErrorBoundary>
        <div className="App vertical-rhythm--xl">
            <Header setQuery={setQuery} loadMore={loadMore} canLoadMore={!!images.length && !loading && query && isMoreItems} />
            {images.length
            ? <GiphyGallery images={images} /> 
            : <div className="empty-state text-center">{(query && !loading) ? "no images found" : "please enter a query"}</div>
            }
        </div>
      </GlobalErrorBoundary>
  );
}

export default App;

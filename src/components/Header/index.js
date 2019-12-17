import React from "react";
import {debounce} from 'lodash';

import PrimaryButton from '../../ui/PrimaryButton';
import './Header.css';

export default function Header({setQuery, loadMore, canLoadMore}) {
  const debouncedQuery = debounce(setQuery, 200);

  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <header className="App-header vertical-rhythm">
      <h1 className="App-header__title">Giphy Search</h1>
      <form onSubmit={ onSubmit } className="vertical-rhythm--s">
        <input className="search-input" type="text" onChange={e => debouncedQuery(e.target.value)}/>
        <div><PrimaryButton onClick={loadMore} disabled={!canLoadMore}>Load more</PrimaryButton></div>
      </form>
    </header>
  );
}

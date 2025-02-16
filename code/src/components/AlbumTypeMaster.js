import React from 'react';
import data from '../data.json';

import { Album } from './Album';

export const AlbumTypeMaster = (props) => {
  /* Filtering out albums, singles and compilations depending on the albumCategory value */
  return (
    <div className="albums">
      {data.albums.items.filter((item) => item.album_type === props.albumTypeCategory)
        .map((item) => {
          return <Album
            albumCategory={item}
            key={item.id} />
        })}
    </div>
  );
};
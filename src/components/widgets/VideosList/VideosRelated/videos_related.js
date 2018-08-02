import React from 'react'
import styles from '../videos_list.css'
import VideosListTemplate from '../videos_list_template';

const VideosRelated = (props) => {
  return(
    <div className={styles.relatedWrapper}>
      <VideosListTemplate
        videos={props.data}
        teams={props.teams}
      />
    </div>
  )
}

export default VideosRelated;

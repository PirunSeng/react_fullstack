import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/news_list';

const NewsMain = () => {
  return(
    <div>
      <NewsSlider
        type="featured"
        // settings={false}
        settings={{ dots: false }}
        start={0}
        amount={3}
        dots={false}
      />
      <NewsList
        type="cardMain"
        loadMore={true}
        start={3}
        amount={5}
      />
    </div>
  )
}

export default NewsMain;

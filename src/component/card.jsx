import React from 'react';

import Left from './left';
import Right from './right';

function Card(props) {
  const [data, setData] = React.useState(props.data);
  
  return (
    <div style={{backgroundColor: '#2ecc71', marginBottom: 10, borderRadius: 10, width: 450, height: 250, overflow: 'hidden', 'display': 'flex','flex-wrap': 'wrap','flex-direction': 'column'}}>
      <Left data={{title: data.title, image: data.image}} />
      <Right data={{headline: data.headline, category: data.category, link: data.link, publish: data.pusblised_at}}/>
    </div>
  )
}

export default Card;
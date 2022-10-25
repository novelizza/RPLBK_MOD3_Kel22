import React from 'react';

function Left(props) {
  const [data, setData] = React.useState(props.data)
  
  return(
    <div style={{backgroundColor: '#f39c12', width: '30%', height: '100%', 'display': 'flex','flex-wrap': 'wrap','flex-direction': 'column','align-content': 'center', paddingTop: 10, paddingBottom:10, paddingLeft: 5, paddingRight: 5}}>
      <img src={data.image} style={{width: 100, height: 100, borderRadius: 100/2, alignSelf: 'center'}}/>
      <p style={{fontWeight: 'bold', textAlign: 'center'}}>{data.title}</p>
    </div>
  )
}

export default Left;
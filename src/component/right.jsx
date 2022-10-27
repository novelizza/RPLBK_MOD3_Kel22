import React from 'react';

function Right(props) {
  const [data, setData] = React.useState(props.data)
  return (
    <div style={{ width: '64%', height: '100%', paddingLeft: 10, paddingRight: 10 }}>
      <div style={{width: '100%', height: '78%'}}>
        <p style={{ width: '100%' }}>{data.headline}</p>
      </div>
      <div style={{ height: '15%' }}>
        <p>Category {data.category}, Published at {data.publish}</p>
      </div>
    </div>
  )
}

export default Right;
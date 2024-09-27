import React from 'react'
import { useRouteError } from 'react-router-dom';

function Error() {
    const error = useRouteError();
    console.log(error);
  return (
    <>
    <div>Something went wrong</div>
    <h1>{error.statusText}</h1>
    <h2>{error.status}</h2>
    </>
  )
}

export default Error
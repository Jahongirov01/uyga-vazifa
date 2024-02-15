import { Card, Skeleton } from '@mui/material'
import React from 'react'

const LoadingCard = () => {
  return (
    <Card>
        <Skeleton animation="wave" width={"100%"} height={140} variant='rounded'></Skeleton>
        <Skeleton height={40} width={150}></Skeleton>
        <Skeleton height={90}></Skeleton>
        <Skeleton height={40} width={40} variant='circular'></Skeleton>
    </Card>
  )
}

export default LoadingCard
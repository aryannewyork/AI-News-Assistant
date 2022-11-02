import React, { useState, useEffect, createRef } from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'
import './styles.css'
import classNames from 'classnames'

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i, activeArticle}) => {
  const [elementRefs, setElementRefs] = useState([])
  const scrollToRef = (ref) => {
    window.scroll(0, ref.current.offsetTop - 50)
  }
  useEffect(() => {
    setElementRefs((refs) => Array(50).fill().map((_, j) => refs[j] || createRef()))
  }, [])

  useEffect(() => {
    if(i === activeArticle && elementRefs[activeArticle]) {
      scrollToRef(elementRefs[activeArticle])
    }
  }, [i, activeArticle, elementRefs])

  return (
      <Card ref={elementRefs[i]} className={classNames('card-container', activeArticle === i ? 'active-card' : 'null')}>
        <CardActionArea href={url} target='_blank'>
          <CardMedia style={{height: 0, paddingTop: '56.25%'}} className='media' image={urlToImage || "https://www.zenpli.com/static/2d3163ef0063b97a0c2623dc7319662f/21d94/News_thumbnail_6e5b199bfd.png"}/>
          <div className='details'>
            <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
          </div>
          <Typography className='title' gutterBottom variant='h5'>{title}</Typography>
          <CardContent>
            <Typography variant='body2' color='textSecondary' componet='p'>{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='card-actions'>
          <Button size='small' color='primary'>Read More</Button>
          <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
        </CardActions>
      </Card>
  )
}

export default NewsCard


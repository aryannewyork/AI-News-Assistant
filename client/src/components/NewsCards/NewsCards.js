import React from 'react'
import { Grid, Grow, Typography } from '@mui/material'
import NewsCard from '../NewsCard/NewsCard'
import './styles.css'

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Get me Indian/Japanese News' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Rishi Sunak...', text: 'What\'s up with Coronavirus' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
]


const NewsCards = ({ articles, activeArticle }) => {
  if(articles.length === 0) {
    return (
      <Grow in>
        <Grid className='container' container alignItems={"stretch"} spacing={"6"}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={16} md={4} lg={3} className='infoCard'>
              <div className='card' style={{backgroundColor: infoCard.color}}>
                <Typography variant='h5'>{infoCard.title}</Typography>
                {
                  infoCard.info ? 
                    (<Typography variant='h6'>
                      <strong> {infoCard.title.split(' ')[2]}: </strong>
                      <br />
                      {infoCard.info}
                    </Typography>)
                    : null
                }
                <Typography variant='h6'> Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    )
  }

  return (
    <Grow in>
      <Grid className='container' container alignItems={"stretch"} spacing={"3"}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
              <NewsCard
                article={article}
                i={i}
                activeArticle={activeArticle}
              />
            </Grid>
          ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards

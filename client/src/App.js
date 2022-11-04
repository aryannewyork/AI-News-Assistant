import React, { useEffect, useState } from "react"
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from "./components/NewsCards/NewsCards"
import wordsToNumbers from 'words-to-numbers'
import Anim from './components/Background/Anim'
import './App.css'


function App() {
  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)
  useEffect(() => {
    alanBtn({
      key: '5afad19deac8ce704c49bb65036a02052e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ( commandData ) => {
        if(commandData.command === 'newHeadlines') {
          setActiveArticle(-1)
          setNewsArticles(commandData.articles)
        } else if(commandData.command === 'highlight') {
            console.log("highlight triggered..")
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        } else if(commandData.command === 'open') {
          console.log(commandData.number)
          const parseNumber = commandData.number.length > 2 ? wordsToNumbers(commandData.number, { fuzzy: true }) : commandData.number
          if(parseNumber > 50) {
            alanBtn.apply().playText('Please try that again.')
          } else if (parseNumber) {
              console.log("articles:::", commandData.articles)
              window.open(commandData.articles[parseNumber-1].url, '_blank')
              alanBtn().playText('Opening...')
          }
        }
      }
    })
  })

  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Anim />
      </div>
      <div className="logo-container">
        <img src='https://alan.app/brand_assets/logo-vertical/color/alan-logo-vertical-color.png' className="alan-logo" alt="LOGO" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default App


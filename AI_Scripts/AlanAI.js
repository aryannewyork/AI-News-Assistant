intent('What does this app do?', 'What can I do here?',
      reply('(Hi|) I am Alan and I can read the latest news for you. You can browse by categories as well.'));


const API_KEY = "818055ed33a24b11944340ff290a5921";
let savedArticles = [];

// Fetching News by source

intent("Give me the news from $(source* (.*))", (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    // BBC News is changed to bbc-news, this is how it is passed in the url for making proper API Call.
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
    api.axios.get(NEWS_API_URL).then((response) => {
        let { articles } = response.data;
        if(!articles.length) {
            p.play('Sorry, please try searching news from another source.');
            return;
        }
        savedArticles = articles;
        p.play({ command: 'newHeadlines', articles: articles });
        p.play(`Here are the (latest|recent) from ${p.source.value}`);
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    })
})

// Indian News

intent("Get me (India|Indian) (news|headlines)", (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=in`;
    
    api.axios.get(NEWS_API_URL).then((response) => {
        let { articles } = response.data;
        if(!articles.length) {
            p.play('Sorry, please try searching news by term.');
            return;
        }
        savedArticles = articles;
        p.play({ command: 'newHeadlines', articles: articles });
        p.play(`Here are the (latest|recent) (news|headlines) from India`);
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    })
})

// Japan News

intent("Get me (Japan|Japanese) (news|headlines)", (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=jp`;
    
    api.axios.get(NEWS_API_URL).then((response) => {
        let { articles } = response.data;
        if(!articles.length) {
            p.play('Sorry, please try searching news by term.');
            return;
        }
        savedArticles = articles;
        p.play({ command: 'newHeadlines', articles: articles });
        p.play(`Here are the (latest|recent) (news|headlines) from Japan`);
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    })
})

// Fetch news by terms

intent("What\'s (up|going) (with|on) (with|in|the|) (the|) $(term* (.*)) (world|)",  (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}language=en`;
    
    if(p.term.value) {
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`
    }
    
    api.axios.get(NEWS_API_URL).then((response) => {
        let { articles } = response.data;
        if(!articles.length) {
            p.play('Sorry, please try searching for something else.');
            return;
        }
        savedArticles = articles;
        p.play({ command: 'newHeadlines', articles: articles });
        p.play(`Here are the (latest|recent) articles on ${p.term.value}`);
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    })
})


// News by Categories
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
let CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}`;


intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines|articles|) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines|)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    if(p.C.value) {
        NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.value}`;
    }
    
    api.axios.get(NEWS_API_URL).then((response) => {
        let { articles } = response.data;
        if(!articles.length) {
            p.play('Sorry, please try searching for a different category.');
            return;
        }
        savedArticles = articles;
        p.play({ command: 'newHeadlines', articles: articles });
        if(p.C.value) {
            p.play(`Here are the (latest|recent) articles on ${p.C.value}`);
        } else {
            p.play(`Here is the (latest|recent) news`);
        }
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    })
})

const confirmation = context(() => {
    intent('yes', async (p) => {
        for(let i = 0; i < savedArticles.length; i++) {
            p.play({command: 'highlight', article: savedArticles[i]});
            p.play(`${savedArticles[i].title}`);
        }
    })
    intent('no', (p) => {
        p.play('Sure, sounds good to me.');
    })
})

intent('open (the|) article number $(number* (.*))', (p) => {
    if(p.number.value) {
        p.play({command: 'open', number: p.number.value, articles: savedArticles})
    }
})

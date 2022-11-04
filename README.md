
# AI News Assistant

Newspapers  have  been  a  constant  source  of news and information for us for about 400 years now. Many technological advancements led to newer ways of delivering news  and  information  about  various  aspects.
This app uses AI to fetch the news and read it to its users and assist them in their journey to consuming news in a healthy manner, both physically (reducing eye strain and screen time) and mentally (future plan includes creating a desenationalising filter, more on this can be found in the design document).




## Author

- Name - [Aryan Shukla](https://www.github.com/aryannewyork)
- University - Indian Institute of Technology Jammu
- Department - Computer Science and Engineering



## API Reference

### Alan AI SDK
- API Key, you can get your own by visiting [here](https://alan.app/) and signing up.

```
5afad19deac8ce704c49bb65036a02052e956eca572e1d8b807a3e2338fdd0dc/stage
```

### News API

- API Key, you can get your own by visiting [here](https://newsapi.org/) and signing up.
```
818055ed33a24b11944340ff290a5921
```

__NOTE__ : 
- I have provided my own API Keys for the purposes of demostration and will be soon deactivating them. It is advised that you use your own API Key.
- I intended to provide the functionality of using Alan AI hotword to trigger the assistant using voice commands, making the app 100% hands free. But couldn't implement it as the developement version (unpaid) of the SDK doesn't allow that. Only paid versions are allowed to integrate that functionality.


## Deployment

To deploy this project clone this repository and run

```bash
  cd client
  npm i && npm start
```
- The landing page should look something like this : 

![Landing_Page](https://user-images.githubusercontent.com/79625246/199540449-a6dff4cf-b3f0-4608-9259-8e473cb89d6f.png)

- After giving voice command such as mentioned on the helping cards on the landing page, news feed should appear and it should look something like this:

![News_Page](https://user-images.githubusercontent.com/79625246/199540427-effe897a-b77d-4e15-8882-d7fbe8f7975d.png)

- Fetching Indian News


![Indian_News](https://user-images.githubusercontent.com/79625246/199540440-b40ca387-4e4f-477b-b4e3-aac74db417da.png)

- Fetching Japanese News

![Japanese_News](https://user-images.githubusercontent.com/79625246/199540445-756c5f99-f82c-4f3f-a2b0-abdc66107142.png)

- Assistant while listening to voice commands

![Listening_Fetching_News](https://user-images.githubusercontent.com/79625246/199540452-7a17d5d9-80e3-4f56-b7c4-bd95f0939485.png)


## Some Example voice commands

- Get me Indian/Japanese News -> Fetches the news from India/Japan respectively.
- Show me news from CNN -> Fetches News from said source.
- Open Article number `x` -> opens the news card with index number `x`. Index number is written on the bottom right corner.
- Give the latest Technology News -> Fetches the news on Technology category.
- Go back -> goes back to the landing page.
- Hey/Hi/How are you doing -> Casual small talk.
- What's up with Rishi Sunak -> Fetches latest articles on Rishi Sunak or any said topic.

`NOTE:` Currently the News fetched is Global, so it comes in all languages. Except in the cases of Japanese and Indian News, those are region specific. More regions will be added later on.
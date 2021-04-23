let genreList = {
Alternate : ['Kenny Sebastian','Aadar Malik','Akash Gupta','Kanan Gill'],
Improv : ['Naveen Richards','Sumukhi Suresh','Abhish Mathew','Arvind Sa'],
Anecdotal : ['Zakir Khan','Anubhav Singh Bassi','Tanmay Bhat','Atul Khatri'],
Deadpan : ['Sreeja Chaturvedi','Urooj Ashfaq','Kunal Nayyar','Vipul Goyal'],
Political :['Vir Das','Varun Grover','Kunal Kamra','Daniel Fernandes'],
Character : ['Kapil Sharma','Sunil Grover','Kiku Sharda','Bharti Singh'],
Heritage : ['Raju Srivastav','Biswa Kalyan Rath','Johny Lever','Sunil Pal']
}


let descriptionsList ={
    'Kenny Sebastian':'Kenneth Mathew Sebastian, better known as Kenny Sebastian, is an Indian stand-up comedian, musician and filmmaker. He first rose to prominence through a YouTube channel that broadcasts clips of his stand-up shows, devotional song covers, in addition to original skits, garnering 152 million views since 2008.',

    'Aadar Malik':'Performing since the age of 7, comedian, musician and actor Aadar Malik was born to rule the stage - best manifested with his 2016 Amazon Prime Video special, Standup The Musical, a unique comedy show which included a guitar and piano.',

    'Akash Gupta' :'Aakash Gupta is an Indian stand-up comedian. He was the joint winner of Comicstaan Season 2 .',

    'Kanan Gill':'Kanan Gill is an Indian stand-up comedian, actor and YouTuber. He won the Punch Line Bangalore Competition. He is known for the YouTube series Pretentious Movie Reviews where he reviews flawed yesteryear Bollywood films along with fellow stand-up comedian Biswa Kalyan Rath.',
    'Naveen Richards':"From being a finalist on Comedy Central's Indian Comedy Festival 2012, Naveen's performed over 400 stand-up shows, and headlined comedy events such as Stage 42, Bangalore Comedy Festival and Chennai's Fringe Comedy Festival.",
    'Sumukhi Suresh':"Sumukhi Suresh is an actor, stand-up comedian, writer and director from India. She is popularly known for her humorous sketches which she writes and stars in for live performances as well as online platforms. In an online article, Hindustan Times referred to Sumukhi Suresh as India's Tina Fey.",
    'Abhish Mathew':'Abish Mathew is a stand-up comedian and a youtuber. He is known for his work with All India Bakchod, as the creator and host of Son of Abish and Journey Of A Joke, and as the host of Comicstaan.',
    'Arvind Sa':'Aravind Subramaniam, known by his stage name Aravind SA, is an Indian stand-up comedian. He initially worked as an assistant director in the film Arrambam. He was voted one of the most desirable men in Chennai by the Times of India in 2018.',

    'Zakir Khan':'Zakir Khan is an Indian stand-up comedian, writer, poet, presenter and actor. In 2012, he rose to popularity by winning Comedy Central India Best Stand Up Comedian competition. He has also been a part of a news comedy show, On Air with AIB.',
    'Anubhav Singh Bassi':'Anubhav Singh Bassi is an Indian comedian. Bassi was born in Parikshitgarh, Meerut. He is 30 years old. He specializes in anecdotal comedy.His career as a standup comic started after an open mic in 2017.Bassi maintains a low online presence,[1] with just four YouTube videos and a few monologues on Instagram.',
    'Tanmay Bhat':'Tanmay Bhat is an Indian YouTuber, comedian, script writer, performer, producer, co-founder of the creative agency All India Bakchod along with Gursimranjeet Singh Khamba.',
    'Atul Khatri':'Atul Khatri is an Indian stand-up comedian and YouTube personality. He was rated among the top Indian comedians by CNN-IBN and was the only Indian to perform in the Hong Kong International Comedy Festival. He was also the winner of the CEOs Got Talent Season 1.',

    'Sreeja Chaturvedi':'Shreeja Chaturvedi, the coy girl wrapped in a blanket of nervous energy, was born in Lucknow but calls Mumbai home, where her life actually unfolded. ... Mumbai Mirror used to have this Joke of the Day column. And in the beginning, I wanted to be a writer for that,” she admits. She ended up in advertising.',
    'Urooj Ashfaq':'Urooj Ashfaq is one of the most sought after young talent, among the new generation of comics taking the scene by the storm. Urooj is a 24-year-old comedian from Bombay, who found her first claim to fame through the TLC show, Queens of Comedy, where she was one of the finalists and a comedy force to reckon with. After the success of the show, Urooj has travelled across the country with her stand up act and performed along side some of the stalwarts, like Kanan Gill & Kunal Kamra Apart from stand up comedy, Urooj has also worked on numerous projects as a comedy writer and put her wits to best use, in both fiction & non-fiction formats (Better Life Foundation, Die Trying)',
    'Kunal Nayyar':'Kunal Nayyar is an English actor. He is known for portraying Rajesh Koothrappali on the sitcom The Big Bang Theory. Forbes listed Nayyar as the worlds third-highest-paid TV actor in 2015 and 2018, with earnings of US$20 million and US$23.5 million, respectively.',
    'Vipul Goyal':'Vipul Goyal is an Indian stand-up comedian and actor. He is counted among the top comedy performers in India and also plays the main protagonist in the web-series Humorously Yours. The show is produced by The Viral Fever and depicts a semi-autobiographical account of his life interspersed with standup clips.',

    'Vir Das':'Vir Das is an Indian comedian, actor and comedy musician. After beginning a career in standup comedy, Das moved to Hindi cinema starring in films like Delhi Belly, Badmaash Company and Go Goa Gone. In 2017, he entered the international stage with his Netflix special Abroad Understanding.',
    'Varun Grover':'Varun Grover is an Indian stand-up comic, writer and poet. He won the award for Best Lyricist at the 63rd National Film Awards in 2015. He is also the co-creator of Aisi Taisi Democracy. ',
    'Kunal Kamra':'Kunal Kamra is an Indian standup comedian known for his observational comedy about absurdities of life. His performances include jokes about politics, cabbies, bachelor life and TV advertisements.',
    'Daniel Fernandes':'Daniel Fernandes is an Indian stand-up comedian. Based in Mumbai, Fernandes is known for his dark and surreal style of comedy, with references to social issues in India.',

    'Kapil Sharma':'Kapil Sharma is an Indian stand-up comedian, television presenter, actor and producer known for hosting The Kapil Sharma Show. He previously hosted the television comedy shows Comedy Nights with Kapil and Family Time with Kapil. Ormax Media rated Sharma the most popular Indian television personality in April 2016.',
    'Sunil Grover':'Sunil Grover is an Indian actor and stand-up comedian. He came into limelight for his portrayal as Gutthi on Comedy Nights with Kapil but gained popularity for playing the role of Dr Mashoor Gulati and Rinku Devi on The Kapil Sharma Show.',
    'Kiku Sharda':'Kiku Sharda is an Indian comedian as well as film and television actor. He was born on 14 February 1976 in Jodhpur, Rajasthan. Kiku completed his schooling in Mumbai where he also completed his post-graduation with an MBA degree in Marketing.',
    'Bharti Singh':'Bharti Singh is an Indian comedian, and television personality. Singh has created numerous comedy sketch shows as well as has hosted various award shows. She participated in the reality shows Jhalak Dikhhla Jaa, Nach Baliye 8 and Fear Factor: Khatron Ke Khiladi 9.',

    'Raju Srivastav':'Raju Srivastava, often credited as Gajodhar, is an Indian comedian.',
    'Biswa Kalyan Rath':'Biswa Kalyan Rath is an Indian stand-up comedian, writer and YouTuber. He is from Odisha. He came into prominence through the YouTube comedy series, Pretentious Movie Reviews with fellow comedian Kanan Gill. He played a supporting role in the 2016 Netflix sex comedy film Brahman Naman.',
    'Johny Lever':'Johnny Lever is an Indian actor and comedian who is best known for his works in Hindi cinema. Lever is one of the first stand-up comedians in India.',
    'Sunil Pal':'Sunil Pal is an Indian comedian, actor and voice actor, and the winner of The Great Indian Laughter Challenge on STAR One. He has acted in various Bollywood films doing minor comic roles.',
}


export { genreList ,descriptionsList};
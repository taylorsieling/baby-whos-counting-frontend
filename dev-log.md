Backend

user 
    has_many rankings

song
    has_many rankings

ranking
    belongs_to user
    belongs_to song

user
    id: 1
    first_name: Taylor
    last_name: Sieling
    email: tasieling
    password: supersecret

peace 
    id: 134
    title: peace
    ablum: folklore
    release_year: 2019

ranking
    user_id: 1
    song_id: 134
    score: 5


Users Table
    first_name
    last_name
    email
    password

Songs Database
    title
    album
    release_year

Rankings - Join Table
    user-id
    song_id
    score



# Assignment - ReactJS app.

Name: Ahmad Sabeh-Murphy

## Overview.

...... State the app concept and objectives. If it's the Movies Fan app extension, only state the additional objectives .........
I built upon the lab work made in class. 
I added 4 new views(Now Playing, Top rated, Watchlist, and Login/Sign In)
I targeted the GOOD grade band.

...... A bullet-point list of user features. If it's the Movies Fan app extension, only list new/modified features...... 
 
 + Now playing view containing data from nowplaying api endpoint
 + Top rated view containing data from top rated api endpoint
 + watch list Icon in top rated view adds movies to the watchlist page(like favorite page)
 + authentication for login/forgot password/
 + navigation & routing/parameterized url for watch list page containing the ID of each movie

## Setup requirements.

create firebase web project to add project config data in src\firebase\index.js
install npm/ install storybook

## API Data Model.

in project file

## App Design.

### Component catalogue.

in project file

### UI Design.

in project file

### Routing.



+ GET /movies/login - displays login page.
+ POST /movies/watchlist- displays watch list
+ GET /movies/nowplaying- displays now playing blog.
+ GET /movies/toprated- displays top rated paged

## Independent learning (If relevant).

Most of the code was refactored from lab work.
Authentication via firebase was made through a tutorial:https://www.youtube.com/watch?v=14Nb3qPDtBQ&t=838s
(source code in the video description)


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
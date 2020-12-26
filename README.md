# REACT_movie-dreamer
Latest movies at one glance - a React starter project.


--======================================================================== \
-- THE MAKING OF THIS REACT APP \
--======================================================================== 
1. npx create-react-app movie-dreamer
2. Tidy up movie-dreamer/public directory <br/>
   ```
   favicon.ico
   index.html   (Page title)
   logo192.png
   logo512.png
   manifest.json
   robots.txt
   ```
3. cd movie-dreamer <br/>
   npm start  # http://localhost:3000/ should display sample React App page.
4. Create src/componments/Movie.js
   ```
   import React from 'react';
   const movie = () => (
       <div className="movie"><h2>Movie Dreamer Component</h2></div>
   );
   export default Movie;
   ```
5. src/App.js
   src/index.css

6. Features
   - Pagination <br/>
   - Search <br/>
   - Loading indication <br/>
   - Componentization <br/>

7. Dependencies to install
   - react-paginate
   - axios
   - styled-components
   - react-loader-spinner [To experiment]
   - react-infinite-scroll-component [To experiment]

8. Build and test the build
   ```
   npm build 
   npm install -g serve
   serve -s build
   ```
9. Heroku deployment
   ```
   git init
   heroku login
   heroku create
   heroku git:remote -a gentle-retreat-50268
   git add .
   git commit -m"Intial checkin."
   git push heroku master
   heroku logs --tail
   heroku open
   ```
10. Heroku URL: https://gentle-retreat-50268.herokuapp.com/

### Linguage: PT-BR

<h1 align="center">User registration</h1>

<p align="center">This project is a simple crud made with React on the frontend and Node express on the backend.
I used the Axios library to connect the two applications, and the Cors engine was also used to release the requests. For routes, 
react-router-dom(v5) was used. For styling, the styled component library was used.</p>

<br>

<h1 align="center">🕵️ How does the project work?</h1>

<br>

<p align="center">On the first screen we have a function where we will add the users inside the useState() with the onClick event, and we will store the data in the node express server with the post method of the axios library.</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/92805039/158461838-65dc647a-82e3-4e3d-a0b2-08ba734660af.png" width="355px" />
</p>
  
<br>
<br>

<p align="center">After pressing the button on the previous screen, the user is launched on the screen where he can see the added users and, if desired, he can also remove them. For the added users I made a get request to the node express server, thus showing the users already added. To remove users, the filter method was used, where by id I can remove it. Pressing the back button returns the user to the previous page as the react-router-dom useHistory hook was used on the button to make the user return.</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/92805039/158465878-dbaf1c89-65b7-4493-80bb-4005d32385e5.png" width="355px" />
</p>
  
<br>
<br>

<h1 align="center">👀 Project demo</h1>

<p align="center">
<img src="https://user-images.githubusercontent.com/92805039/158460995-d953b9ac-347e-4aa6-9c6e-a1586564469c.gif" />
</p>

<br>
<br>

### 🚀🚀Features

- [x] hooks

- [x] reuse of components

- [x] routes

- [x] style with props

- [x] connection to server

<br>

### 🎲running the front end
```bash
# clone this repository
$ git clone <https://github.com/CarloshDevBR/Register-user>
# access the project through the terminal/cmd
$ cd Register-user/frontend
#run the project
$ yarn or npm Register-user
#the server will initialize in the <http://localhost:3000>
```

<br>

### 🎲running the back end
```bash
# clone this repository
$ git clone <https://github.com/CarloshDevBR/Register-user>
# access the project through the terminal/cmd
$ cd Register-user/backend
#run the project
$ node script.js
#the server will initialize in the <http://localhost:3001>
```

<br>

### 🛠️ technologies used

- [React]()
- [JavaScript]()
- [Axios]()
- [react-router-dom]()
- [Node express]()
- [Cors]()
- [Styled-components]()

<h5 align="center"> Made with 💜 by CarloshDevBR</h5>

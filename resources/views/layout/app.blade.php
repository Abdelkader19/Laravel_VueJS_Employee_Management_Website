<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Application</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

<style>

body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  /* Vos styles pour le contenu principal ici */
}


    nav {
            background-color: #333;
            overflow: hidden;
        }

        nav a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        nav a:hover {
            background-color: #ddd;
            color: black;
        }
        footer{
            background-color: #333;
            
            text-align:center;
            color:white;
            padding: 10 px;
            margin-top: auto;
            position: relative;
            bottom: 0;
            width: 100%;

        }

       
    </style>

</head>
<body class="content">

<!--<header>
<nav>
        <a href="/">Accueil</a>
        <a href="">À propos</a>
        
        <a href="">Contact</a>
    </nav>
</header> -->
<div id="app"></div> 
@vite('resources/js/app.js')
</body>

<footer>
    <p>site web</p>
</footer>
</html>

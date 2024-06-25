/* Estilo de fonte inspirado na cultura samurai */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #222;
    color: white;
    padding: 1em 0;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

nav ul li a:hover {
    text-decoration: underline;
}

#banner {
    background: url('banner-image.jpg') no-repeat center center/cover;
    color: white;
    text-align: center;
    padding: 50px 20px;
}

#banner img {
    max-width: 200px;
    margin-bottom: 20px;
}

#banner p {
    font-size: 1.5em;
}

section {
    padding: 20px;
    margin: 20px 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
}

.players-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.player {
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
    text-align: center;
}

.player img {
    max-width: 100%;
    border-radius: 50%;
    margin-bottom: 10px;
}

form {
    display: grid;
    gap: 10px;
}

label {
    font-weight: bold;
}

input, select, textarea, button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

button {
    background-color: #222;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 10px;
    text-align: center;
}

footer {
    background-color: #222;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 20px;
}

footer p, footer ul {
    margin: 0;
}

footer ul {
    list-style: none;
    padding: 0;
}

footer ul li {
    display: inline;
    margin-right: 10px;
}

footer ul li a {
    color: white;
    text-decoration: none;
}

footer ul li a:hover {
    text-decoration: underline;
}

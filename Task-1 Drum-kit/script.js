@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@200;300;400;600;700&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Bebas Neue', cursive;
    
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* border: 2px solid rgb(228, 20, 20); */
    width: 100%;
    height: 100vh;
    font-size: 2rem;
    background-image: url(https://www.bing.com/images/blob?bcid=RFWeepGBIsoEqxcxoNWLuD9SqbotqVTdP4w);
    background-position: center;
    background-size: cover;
    background-color: black;
}


/* keys-container styling */
.keys{
    display: flex;
    /* border: 2px solid white; */
    width: 100%;
    height: 150px;
    align-items: center;
    justify-content: center;
}

.box{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid rgba(0, 0, 0, 0);
    border-radius: 16px;
    font-size: 2rem;
    width: 90px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.074);
    margin: 12px;
    transition: all 0.07s;
}

.data{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

/* letter styling */
.lettername{
    color: white;
    
}
/* Span styling */
.soundname{
    font-size: 0.8rem;
    color:rgb(236, 228, 14);
    margin-bottom: 4px;
}

/* .playing{
    transform: scale(1.1);
    border-color:rgb(14, 18, 236) ;
    box-shadow: 0 0 10px #ffc600;
} */

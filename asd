.circle {
    width: 70px;
    height: 70px;
    background: green;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    position: absolute;
}

.circle::before,
.circle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border: 10px solid gray;
    border-radius: 100%;
    animation: latido linear 3s infinite;
}

.circle::after {
    animation-delay: -1.5s;
}

@keyframes latido {
    0% {
        width: 70px;
        height: 70px;
        border: 10px solid gray;
    }
    100% {
        width: 120px;
        height: 120px;
        border: 10px solid transparent;
    }
}

.icono {
    width: 42px;
    height: 42px;
    margin-top: 12px;
    margin-left: 14.5px;
}

#button-0 {
    top: 50px;
    left: 100px;
}

<div class="circle button" id="button-0"><img class="icono" src="https://d30y9cdsu7xlg0.cloudfront.net/png/10685-200.png"></div>
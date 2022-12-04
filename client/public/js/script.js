testButton = document.getElementById("testButton");
heading = document.querySelector('h1');

testButton.addEventListener("click", () => {
    const randomColour1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const randomColour2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

    heading.style.color = randomColour1;
    document.body.style.background = randomColour2;

    console.log('Phoebe smells like feet')

})
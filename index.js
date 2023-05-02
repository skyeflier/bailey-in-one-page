//ReactDOM.render allows me to render something that looks like HTML
// What should I put on the screen, where should I put it

ReactDOM.render(
    <p>
        <h1 className="header">Hello, React!</h1>
        <ul>
            <li>bullet one</li>
            <li>bullet two</li>
        </ul>
    </p>,
    document.getElementById("root"))

    //Write declarative in vanilla javascript
    // const h1 = document.createElement("h1")
    // h1.textContent = "This is an imperative way to program"
    // h1.className = "header"
    // document.getElementById("root").append(h1)
//ReactDOM.render allows me to render something that looks like HTML
// What should I put on the screen, where should I put it

// const page = (
//     <div>
//         <h1 className="header">Hello, React!</h1>
//         <ul>
//             <li>bullet one</li>
//             <li>bullet two</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("root"))

//Write declarative in vanilla javascript. JSX allows us to write it in normal HTML above
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

const nav = (
    <nav>
        <h1>Baliey's Business</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById("root"))
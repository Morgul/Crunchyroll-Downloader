import React, {useEffect} from "react"
import ReactDom from "react-dom"
import BrowserTitleBar from "./components/BrowserTitleBar"
import "./crunchyroll.less"
import functions from "./structures/functions"

const App: React.FunctionComponent = () => {
    useEffect(() => {
        const web = document.getElementById("webview") as any 
        web?.addEventListener("did-navigate-in-page", async () => {
            await functions.timeout(500)
            await web.executeJavaScript("document.querySelector('[data-t=\"show-more-btn\"]')?.click()")
        })
    }, [])

    return (
        <main className="app">
        <BrowserTitleBar/>
        <webview id="webview" src="https://www.crunchyroll.com/"></webview>
        </main>
    )
}

ReactDom.render(<App/>, document.getElementById("root"))

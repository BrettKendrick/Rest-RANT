const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry we can't find this page!</p>
                <img src="/images/clouds.jpeg" alt="Cloud in the sky because you are lost" />
            </main>
        </Def>
    )
}

module.exports = error404
function renderReact(reactElement, container){
    const childElement = document.createElement(reactElement.type)
    childElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        childElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(childElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    },
    children: 'Visit Google'
}
const rootContainer = document.querySelector('#root')

renderReact(reactElement, rootContainer);
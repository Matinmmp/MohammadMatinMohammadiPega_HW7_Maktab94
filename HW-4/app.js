const text = document.getElementById('text');
const posTop = document.getElementById('top');
const posLeft = document.getElementById('left');
const type = document.getElementById('type');
const btnShow = document.getElementById('show');
const container = document.querySelector('.container');


btnShow.addEventListener('click', () => {
    const notification = createElement({ top: posTop.value, left: posLeft.value, text: text.value, type: type.value });
    notification.querySelector('button').addEventListener('click', () => notification.remove());
    container.append(notification);
})


function createElement({ top = 0, left = 0, text = 'Hi', type = 'warning' }) {
    const div = document.createElement('div');
    div.style.top = `${top}px`;
    div.style.left = `${left}px`;
    div.style.position = 'absolute'
    div.innerHTML = `
    <section class="notification ${type }">
            <header>
                <h1>${type || 'Simple'}</h1>
            </header>
            <div class="body">
                <p>${text || 'No Message'}</p>
            </div>
            <button>close</button>
    </section>
    `

    return div;
}


const insert = document.getElementById('insert');

window.addEventListener('keydown', (eventObj) => {insert.innerHTML = 
    `<div class="key">
    ${eventObj.key === ' ' ? 'Space' : eventObj.key}
    <small>event.key</small>
    </div>

    <div class="key">
    ${eventObj.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="key">
    ${eventObj.code}
    <small>event.code</small>
    </div>`
});

/* 
${eventObj.key === ' ' ? 'Space' : eventObj.key}
If eventObject key is equal to the empty string then (?) put the string "Space" else (:) put the eventObject key

${eventObj.keyCode}
The keyCode is crossed out because it is deprecated and no longer used.
*/
 
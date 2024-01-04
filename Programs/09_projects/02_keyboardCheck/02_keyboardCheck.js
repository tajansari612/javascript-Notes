window.addEventListener('keydown',(e) =>{
    document.getElementById('insert').innerHTML = `
            <table>
            <tr>
            <th>Key</th>
            <th>Key Code</th>
            <th>code</th>
            </tr>
            <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
            </tr>
        </table>
    `
})
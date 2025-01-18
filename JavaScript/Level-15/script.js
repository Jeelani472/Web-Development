let url = 'http://universities.hipolabs.com/search?name=India&state-province=';
let btn = document.querySelector('button');
btn.addEventListener('click', async () => {
    let state = document.querySelector('input').value;
    let colArr = await getcolleges(state);
    console.log(colArr);
    show(colArr);
})
function show(colArr) {
    let list = document.querySelector('#list');
    list.innerText = '';  
        let state = document.querySelector('input').value.trim().toLowerCase();
        let filteredCols = colArr.filter(col =>
            col["state-province"] && col["state-province"].toLowerCase() === state
        );
        if (filteredCols.length === 0) {
            let li = document.createElement('li');
            li.innerText = 'No colleges found in ' + state;
            list.appendChild(li);
        } else {
            for (let col of filteredCols) {
                let li = document.createElement('li');
                li.innerText = `${col.name} (${col["state-province"]})`;
                list.appendChild(li);
            }
        }
    }

async function getcolleges(state) {
    try {
        let res = await axios.get(url + state);
        console.log(res);
        return res.data;
    }
    catch (e) {
        console.log('error', e);
        return [];
    }
}

$(document).ready(function() {
    const title = [

        {title:'Arifureta'},
        {title:'Demon Slayer'},
        {title:'Interspectes Reviewers'},
        {title:'Bakemonogatari'}
    ];

    const searchinput = document.getElementById("search");

    searchinput.addEventListener('keyup', function(){
        const input = searchinput.value;

        const result = title.filter(item => item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

        let suggestion = '';

        if(input !=''){
        result.forEach(resultItem =>
                suggestion +=`
                    <button class="suggestion" onclick="ouvrirPageSuggestion()">${resultItem.title}</button>
                `
            )
        }

        document.getElementById("suggestions").innerHTML = suggestion;
    })
});
function ouvrirPageSuggestion() /* Définie une fonction ouvrirPage */
    {
        let buttons = document.querySelectorAll(".suggestion");
            for(let i = 0; i < buttons.length; i++)
                {
                    buttons[i].addEventListener("click", function()
                        {
                            if (this.innerText === "Arifureta")
                                {
                                    window.open("./anime/arifureta/index.html" , "_self");
                                }
                            else if (this.innerText === "Bakemonogatari")
                                {
                                    window.open("./anime/Monogatari/index.html", "_self");
                                }
                            else if (this.innerText === "Demon Slayer")
                                {
                                    window.open("./anime/Demon_Slayer/index.html" , "_self");
                                }
                            else if (this.innerText === "Interspectes Reviewers")
                                {
                                    window.open("./anime/Interspectes_Reviewers/index.html" , "_self");
                                }
                        });
                }
    }
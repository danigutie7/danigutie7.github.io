(function(){

    const sliders = [...document.querySelectorAll(".team__body")];
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value;

    buttonNext.addEventListener("click", ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener("click", ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTeam = document.querySelector(".team__body--show").dataset.id;
        value = Number(currentTeam);
        value += add;

        sliders[Number(currentTeam)-1].classList.remove("team__body--show")
        if (value === sliders.length+1 || value === 0) {
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add("team__body--show");
    }
})();
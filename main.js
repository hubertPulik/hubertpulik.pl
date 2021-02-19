        
        let boks = document.querySelectorAll(".boks");
        let przyciski = document.querySelectorAll(".przycisk");
        let boksOtoczka = document.querySelectorAll(".boksOtoczka");
        let arrows = document.querySelectorAll('.arrow');

        function zmianaBoksa() {
            let przyciskId = this.id;
            let czyAktywny = document.getElementById(przyciskId);

            const zmianaBoksaInner = () => {
                document.getElementById(`boks${przyciskId}`).classList.add("widoczny");
            }
    
            boks.forEach(element => {
             element.classList.remove("widoczny");
            });

            arrows.forEach(element => {
             element.classList.remove("arrowActive");
            });

            boksOtoczka.forEach(element => {
             element.classList.remove("boksOtoczkaWidoczne");
            });

            if (czyAktywny.classList.contains("aktywnyBtn")) {
                czyAktywny.classList.remove("aktywnyBtn");
                document.getElementById(`a${przyciskId}`).classList.remove("arrowActive");
                document.getElementById(`a${przyciskId}`).classList.add("arrowHover");
            } else {
                przyciski.forEach(przycisk => {
                    przycisk.classList.remove("aktywnyBtn");
                });
                czyAktywny.classList.add("aktywnyBtn");
                document.getElementById(`boksOtoczka${przyciskId}`).classList.add("boksOtoczkaWidoczne");
                document.getElementById(`a${przyciskId}`).classList.add("arrowActive");
                setTimeout(zmianaBoksaInner, 50);
            };
        };

        const arrowHover = (e) => {
            let divId = e.target.id;
            document.getElementById(`a${divId}`).classList.add("arrowHover");
        }

        const arrowHoverOut = (e) => {
            let divId = e.target.id;
            document.getElementById(`a${divId}`).classList.remove("arrowHover");
        }

        przyciski.forEach(przycisk => {
            przycisk.addEventListener("click", zmianaBoksa);
        });

        przyciski.forEach(przycisk => {
            przycisk.addEventListener("mouseenter", arrowHover);
        });

        przyciski.forEach(przycisk => {
            przycisk.addEventListener("mouseleave", arrowHoverOut);
        });


        const glownyImg = document.querySelector('.glownyImg');

        const imgRotate = (e) => {
            let xAxis = Math.floor(((e.clientX - e.target.offsetLeft) / e.target.width) * 10);
            let yAxis = Math.floor(((e.clientY - e.target.offsetTop) / e.target.height) * 10);
            let x = (xAxis - 5);
            let y = -(yAxis - 5);

            let styleValue = `${y},${x},0,5deg`;

            console.log(styleValue);
            glownyImg.style.transform = `rotate3d(${styleValue})`;
        }

      

        // glownyImg.addEventListener('mousemove', imgRotate);
        // glownyImg.addEventListener('mouseleave', () => {
        //     glownyImg.style.transform = `rotate3d(0,0,0,0deg)`;
        // })



        const slide = document.querySelector('.glownyImgBackground');
        const slideInner = document.querySelector('.glownyImgBackground_');
        // const slideImg = document.querySelector('.glownyImgBackground_ img');
        let activeSlide = 1;
        const slider = () => {
            slide.classList.remove(`maska0${activeSlide}`);
            slideInner.classList.remove(`maska0${activeSlide}_`);
            if (activeSlide<4) {
                slide.classList.add(`maska0${activeSlide+1}`);
                slideInner.classList.add(`maska0${activeSlide+1}_`);
                slideInner.innerHTML = `<img src="https://hubertpulik.pl/img/hp00${activeSlide+1}.png"></img>`;
                activeSlide++;
            } else if (activeSlide === 4) {
                slide.classList.add(`maska01`);
                slideInner.classList.add(`maska01_`);
                slideInner.innerHTML = `<img src="https://hubertpulik.pl/img/hp001.png"></img>`;
                activeSlide = 1;
                
            }
            

        }

        setInterval(slider, 7000);
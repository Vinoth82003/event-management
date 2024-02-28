let all_tag = document.querySelectorAll(".tag");
let all_section = document.querySelectorAll(".section");

all_tag.forEach(tag => {
    tag.addEventListener("click",()=>{
        let tagIndex = tag.getAttribute("index");
        all_section.forEach(section => {
            let sectionindex = section.getAttribute("index");
            if (tagIndex == sectionindex) {
                section.style.display = "block"
            }else{
                section.style.display = "none"
            }
        });
    })
});
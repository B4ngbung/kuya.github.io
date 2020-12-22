  let BtnEle = document.querySelector(".Btn");
    let frameEle = document.querySelector(".frame");
    BtnEle.addEventListener("click", () => {
        frameEle.className = "fullScreen";
    });

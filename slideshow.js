const GetData = [
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6829/1306829-h-ce6bbfe52849",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8773/1028773-h-48170a73363e",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/905/840905-h",
  "https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-08-26/SetRD2_Desk_D_E_3P-0a430040-3f42-4958-85a6-81dc7576841e.jpg",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9410/1329410-h-5dfdad21713e",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8660/1338660-h-8cb44b30c451",
];

const Box = document.getElementById("slideshow");

let i;

function Display() {
  Box.innerHTML = null;

  i = 0;

  const img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "90%";

  img.src = GetData[0];

  Box.append(img);

  i++;

  setInterval( ()=> {
    if (i === GetData.length) {
      i = 0;
    }

    img.src = GetData[i];

    Box.append(img);

    i++;
  }, 5000);
}

Display();

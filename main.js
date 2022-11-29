let getData;

getData = [
  {
    Title: "Pushpa: The Rise",
    Poster:
      "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/04/08/Stylish-Star-Allu-Arjun-s-Pushpa-Movie-Second-Look-Poster-.jpg?quality=80&zoom=1&ssl=1",
    Year: "2021",
    IMDb: "7.6",
  },
  {
    Title: "K.G.F: Chapter 1",
    Poster:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b739c74284099.5c2a29444cdef.png",
    Year: "2022",
    IMDb: "8",
  },
  {
    Title: "KGF Chapter 2",
    Poster: "https://pbs.twimg.com/media/EMiCqnfU0AA_DUK.jpg",
    Year: "2022",
    IMDb: "9",
  },
  {
    Title: "Baahubali: The Beginning",
    Poster:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/02/prabhas-starrer-bahubali-conclusion-poster-1-1487936642.jpg",
    Year: "2015",
    IMDb: "8",
  },
  {
    Title: "Bahubali 2",
    Poster:
      "https://pbs.twimg.com/media/C3E4OP0WEAAnCd2?format=jpg&name=900x900",
    Year: "2021",
    IMDb: "8",
  },
  {
    Title: "Race 3",
    Poster:
      "https://www.filmibeat.com/fanimg/movie/16357/race-3-salman-khan-photos-images-61795.jpg",
    Year: "2018",
    IMDb: "9.6",
  },
  {
    Title: "Baadshaho",
    Poster:
      "https://pbs.twimg.com/media/DCaMRlgV0AAnqTC?format=jpg&name=medium",
    Year: "2017",
    IMDb: "8.6",
  },
  {
    Title: "Prem Ratan Dhan Payo",
    Poster: "https://pbs.twimg.com/media/CbFi8AkUkAA3r7y.jpg",
    Year: "2015",
    IMDb: "9.6",
  },
  {
    Title: "Sahoo",
    Poster: "https://www.filmibeat.com/ph-big/2019/09/saaho_156836864120.jpg",
    Year: "2019",
    IMDb: "10",
  },
];

//Append Movie function and movie detail Code write here

// Movie Detail code start

function StoreDATA(Poster, Title, Year) {
  this.Poster = Poster;
  this.Title = Title;
  this.Year = Year;
}

let DATA_STORE = [];

// // Movie Detail code End here

const container = document.getElementById("movie");

function Display(Data) {
  container.innerHTML = null;

  if (Data == undefined) {
    return false;
  }

  Data.map(function ({ Poster, Title, Year }) {
    const div = document.createElement("div");

    const image = document.createElement("img");
    image.src = Poster;
    image.id = "Image";
    image.style.width = "80%";
    image.style.height = "80%";
    image.alt = "I am not here";

    const h3 = document.createElement("h3");
    h3.innerText = `Name:- ${Title}`;

    const p3 = document.createElement("p");
    p3.innerText = `Year:- ${Year}`;

    div.append(image, h3, p3);
    div.addEventListener("click", function () {
      let P1 = new StoreDATA(Poster, Title, Year);
      DATA_STORE.push(P1);
      localStorage.setItem("Details", JSON.stringify(DATA_STORE));
      window.location.href = "movieDetails.html";
    });

    container.append(div);
  });
}

//After loading function

const Gift_Promise = new Promise((resolve, reject) => {
  setInterval(() => {
    const gift = getData;
    if (getData !== null) {
      resolve(gift);
    } else {
      reject(`Server Error`);
    }
  }, 3000);
});

Gift_Promise.then((res) => {
  Display(res);
}).catch((rej) => {
  alert(rej);
});

// Sorting Code Start From Here

function High() {
  let high = getData.sort((a, b) => {
    return b.Year - a.Year;
  });
  Display(high);
}

function Low() {
  let low = getData.sort((a, b) => {
    return a.Year - b.Year;
  });
  Display(low);
}

// Search Bar Code

const Loder = document.getElementById("movie");

let Search = () => {
  Loder.innerHTML = null;

  const Input = document.getElementById("Search").value;

  const Img = document.createElement("img");

  Img.src = "https://i.stack.imgur.com/kOnzy.gif";
  Img.style.marginLeft = "200px";

  const Get_promise_To_Gif = new Promise((resolve, reject) => {
    const Gift = Img;
    if (Img !== null) {
      resolve(Gift);
    } else {
      reject(`Not Get Data`);
    }
  });

  Get_promise_To_Gif.then((res) => {
    Loder.append(res);

    const GetData = fetch(
      `https://www.omdbapi.com/?apikey=bf27d383&s=${Input}`
    );

    GetData.then((res) => {
      return res.json();
    })
      .then((res) => {
        const Actual_Data = res.Search;

        Loder.innerHTML = null;

        Display(Actual_Data);
      })
      .catch((rej) => {
        alert(rej);
        window.location.reload();
      });
  }).catch((rej) => {
    alert(rej);
    window.location.reload();
  });
};

//Debouncing

let id;

const Debounce = (func, delay) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
};

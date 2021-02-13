

fetch("https://exceed11.cpsk-club.xyz/")
  .then((data) => data.json())
  .then((datas) => {
    datas.forEach((data) => {
      console.log(data);
      app.appendChild(data)
    });
  });
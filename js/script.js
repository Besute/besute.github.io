let music2 = new Audio("../music/fnaf-yay-101soundboards.mp3");
let music = new Audio("../music/theme.mp3");
function IMPORTANT() {
  let data1 = document.querySelector(".form__input");
  let data2 = document.querySelector(".form__input_2");
  data1 = data1.value;
  data2 = data2.value;
  music2.play();
  return [data1, data2];
}

function GetReady() {
  const [data, setData] = React.useState(false);
  const [data2, setData2] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const [dataForDate, setDataForDate] = React.useState([]);

  React.useEffect(() => {
    music.play();
  }, [data]);

  function onMouseMove(e) {
    const buttonX =
      document.querySelector(".hello__button").getBoundingClientRect().x +
      document.querySelector(".hello__button").getBoundingClientRect().width /
        2;
    const buttonY =
      document.querySelector(".hello__button").getBoundingClientRect().y +
      document.querySelector(".hello__button").getBoundingClientRect().height /
        2;
    document.querySelector(".hello__button").style.background = `rgb(${
      255 +
      Math.abs(buttonX - e.clientX - 100) / 5 +
      Math.abs(buttonY - e.clientY - 100) / 5
    },${
      25 +
      Math.abs(buttonX - e.clientX - 100) / 10 +
      Math.abs(buttonY - e.clientY - 100) / 10
    },${
      50 +
      Math.abs(buttonX - e.clientX - 100) / 10 +
      Math.abs(buttonY - e.clientY - 100) / 10
    })`;
  }
  return !data ? (
    <div className="hello__div" onMouseMove={onMouseMove}>
      <h1 className="hello__hello">Привет!</h1>
      <h2 className="hello__start">Нажми на кнопку!</h2>
      <button
        className="hello__button"
        onClick={() => {
          setData(!data);
        }}
      >
        Продолжить...
      </button>
      <img
        src="https://media.tenor.com/CC1VPnwBVMMAAAAi/gianbortion-cat.gif"
        className="hello__img"
      ></img>
      <img
        src="https://media.tenor.com/TrZcpR0Kde8AAAAi/cat-meme-funny.gif"
        className="hello__img_2"
      ></img>
    </div>
  ) : !ready ? (
    <div className="hello__div">
      <h1 className="hello__hello hello__hello_4">
        Оказывается, ты любишь театры
      </h1>
      <h2 className="hello__hello hello__hello_5">
        НАСКОЛЬКО сильное У ТЕБЯ желание туда пойти?
      </h2>
      <div className="button__div">
        <button
          className="hello__button_2"
          onClick={() => {
            setReady(!ready);
          }}
        >
          ОГРОМНОЕ
        </button>
        <button
          className="hello__button_3"
          onClick={() => {
            document.querySelector(".hello__button_3").style.top = `${
              (((Math.random() * Math.random() * 1007) % 100) + 100) % 100
            }%`;
            document.querySelector(".hello__button_3").style.left = `${
              (((Math.random() * Math.random() * 1007) % 100) + 100) % 100
            }%`;
            document.querySelector(".hello__button_3").style.position =
              "absolute";
          }}
        >
          Да его почти и нет...
        </button>
      </div>
    </div>
  ) : !data2 ? (
    <div className="hello__div">
      <h2 className="hello__hello">Как ты смотришь на то, чтобы пойти туда?</h2>
      <h2 className="hello__hello_2 hello__hello">(Это намек)</h2>
      <img src="images/newpng.png" class="hello__img hello__img_3"></img>
      <form className="form" method="post">
        <label className="form__label">Но когда же нам пойти?</label>
        <input className="form__input" type="date" />
        <input type="time" className="form__input form__input_2"></input>
      </form>
      <button
        onClick={() => {
          setDataForDate(IMPORTANT());
          setData2(!data2);
        }}
        className="hello__button hello__button_2"
      >
        Назначить дату
      </button>
    </div>
  ) : (
    <div className="hello__div">
      <h1 className="hello__hello">YEAAHHH</h1>
      <br></br>
      <h2 className="hello__hello_2 hello__hello hello__hello_3">
        Увидимся {dataForDate[0]} в {dataForDate[1]}
      </h2>
    </div>
  );
}

ReactDOM.render(<GetReady />, document.getElementById("root"));

import "./App.css";

const data = [
  {
    stat: "10k+",
    statHeading: "companies",
  },

  {
    stat: "314",
    statHeading: "templates",
  },

  {
    stat: "12M+",
    statHeading: "queries",
  },
];

// App component
export default function App() {
  return (
    <header className="header">
      <div className="card">
        <Content />
        <Image />
      </div>
    </header>
  );
}

function Content() {
  return (
    <div className="card__content card__content--1">
      <h1>
        Get <span>insights</span> that help your business grow.
      </h1>
      <p>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>

      <div className="card__data">
        {data.map((dataObj) => (
          <Data dataObj={dataObj} />
        ))}
      </div>
    </div>
  );
}

function Data({ dataObj }) {
  return (
    <div>
      <h2>{dataObj.stat}</h2>
      <p className="stat__heading">{dataObj.statHeading.toUpperCase()}</p>
    </div>
  );
}

function Image() {
  return (
    <div className="card__content card__content--2">
      <div className="card__color"></div>

      <div className="card__img">
        <img src="image-header-desktop.jpg" alt="Group of women in an office" />
      </div>
    </div>
  );
}

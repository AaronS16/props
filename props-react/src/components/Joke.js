const Joke = ({ setup, punchline }) => {
  return (
    <div className="jokes">
      <h3 className="setup">{setup}</h3>
      <p className="punchline">{punchline}</p>
      <hr />
    </div>
  )
}

export default Joke

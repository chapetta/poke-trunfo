import Card from "./Card";

export default function GameBoard() {
  return (
    <section className="gameboard-total">
      <section className="usuario-gameboard">
        <h2>usuario gameboard</h2>
        <Card />
      </section>

      <section className="computer-gameboard">
        <h2>adversario gameboard</h2>
      </section>
    </section>

    
  );
}
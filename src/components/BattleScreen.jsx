/* eslint-disable react/prop-types */

import './battleScreen.css';

const BattleScreen = ({ myPokeSelection, computerRandomSelection, enemyHealth }) => {
  console.log({ myPokeSelection });
  console.log({ computerRandomSelection });

  return (
    <div className="battle-container">
      <div className="enemy-container">
        <h1>{enemyHealth}</h1>
        <img src={computerRandomSelection[0].sprites.front_default} alt='enemySelection' />
      </div>
      <div className="my-container"></div>
    </div>
  );
};

export default BattleScreen;

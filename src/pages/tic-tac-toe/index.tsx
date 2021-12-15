import { OIcon, XIcon } from 'components/icons';
import { TicTacToeContainer } from './ui';

const TicTacToe = () => (
    <TicTacToeContainer>
        <p>Hello World! I have all these pieces, let&apos;s play Tic Tac Toe!</p>
        <OIcon size={40}/>
        <XIcon size={40}/>
    </TicTacToeContainer>
);

export default TicTacToe;

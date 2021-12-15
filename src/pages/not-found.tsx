import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const NotFoundPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1 {
        margin: 50px;
    }
`;

const NotFound = () => (
    <NotFoundPage>
        <h1>Page Not Found</h1>
        <p>
            How about some <Link to='/tic-tac-toe'>Tic Tac Toe</Link>
        </p>
    </NotFoundPage>
);

export default NotFound;

import { useQuery, gql } from '@apollo/client';
import { CircularProgress, Card } from '@material-ui/core';

const fetchUsers = gql`
  query {
    users {
      id
      email
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(fetchUsers);

  const renderUsers = () => {
    if (loading) return <CircularProgress />;
    if (error) return <p>Error: An error occured</p>;

    return data.users.map((user) => (
      <Card key={user.id}>
        <img src="https://picsum.photos/200" />
        <h3>{user.email}</h3>
      </Card>
    ));
  };

  return (
    <div>
      <h1>Drift</h1>
      <div>{renderUsers()}</div>
    </div>
  );
};

export default App;

import useOpenTodo from '../data/useOpenTodo';
import BrowseTodoCard from '../components/BrowseTodoCard';

const Browse = () => {
  const { loading, openTodos } = useOpenTodo();
  return (
    <div>
      {loading && <div>loading</div>}
      {!loading && openTodos && (
        openTodos.map((todo) => (
          <BrowseTodoCard key={todo.id}/>
        ))
      )}
    </div>

  );
};

export default Browse;

import NewTodoForm from "./components/NewTodoForm"

const getData = async () => {
  await new Promise((res) => setTimeout(() => res(), 2000))
  return { data: [ 1, 2, 3 ]}
}

const Home = async() => {
  const data = await getData();

  console.log(data)

  return (
    <div>
      home
    </div>
  )
}

export default Home;

import getAllUsers from "databases/functions/getAllUsers";

const allUsers = async () => {
  const { error, data } = await getAllUsers();

  if (error) return { error }
  else if (!data) return { data: [] }

  data.sort(() => Math.random() - 0.5);

  return { data }
};

export default allUsers;
import axios from "axios"

async function fetchUser() {
    const response = await axios.get("http://localhost:3000/api/user");  
    await new Promise(r => setTimeout(r, 5000)); 
    return (await response).data;
}

type UserType = {
    name: string;
    username: string;
    id: number;
}

const User = async () => {
    const data: UserType[] = await fetchUser()
    
  return (
    <div>
        {data.map((user) => (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <h1>{user.username}</h1>
            </div>
        ))}
    </div>
  )
}

export default User
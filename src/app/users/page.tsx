export default async function UsersPage() {
    const res = await fetch(`${process.env.URL}/api/users`, { cache: "no-store" });
    const users = await res.json();

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>
                        {user.name} - {user.email} ({user.age} years old)
                        {user.posts && user.posts.length > 0 && (
                            <ul>
                                {user.posts.map((post: any) => (
                                    <li key={post.id}>{post.title}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

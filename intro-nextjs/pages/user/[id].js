import { useRouter } from 'next/router';

const UserDetail = ({ user }) => {
    const router = useRouter();

    return (
        <div>
            <h1>Detail Pengguna</h1>
            <p><strong>Nama:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Alamat:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Telepon:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Perusahaan:</strong> {user.company.name}</p>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: { user },
    };
}

export default UserDetail;
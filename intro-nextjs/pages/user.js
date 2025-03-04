import React from 'react';

const User = ({ posts }) => {
    const styles = {
        table: {
            borderCollapse: 'collapse',
            width: '100%',
        },
        th: {
            border: '1px solid white',
            padding: '8px',
            textAlign: 'left',
        },
        td: {
            border: '1px solid white',
            padding: '8px',
            textAlign: 'left',
        },
    };

    return (
        <div>
            <h1>Daftar Pengguna</h1>
            <table style={styles.table}>
            <thead>
                    <tr>
                        <th style={styles.th}>No.</th>
                        <th style={styles.th}>Nama</th>
                        <th style={styles.th}>Username</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Alamat</th>
                        <th style={styles.th}>Telepon</th>
                        <th style={styles.th}>Website</th>
                        <th style={styles.th}>Perusahaan</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td style={styles.td}>{post.id}.</td>
                            <td style={styles.td}>{post.name}</td>
                            <td style={styles.td}>{post.username}</td>
                            <td style={styles.td}>{post.email}</td>
                            <td style={styles.td}>{post.address.street}, {post.address.suite}, {post.address.city}, {post.address.zipcode}</td>
                            <td style={styles.td}>{post.phone}</td>
                            <td style={styles.td}>{post.website}</td>
                            <td style={styles.td}>{post.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>    
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default User;
const Chance = require("chance");
const chance = new Chance();

function getRand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = () => {
    const data = {
        users: [],
        posts: [],
        likes: [],
    };

    data.users = new Array(50).fill(null).map((_, i) => ({
        id: i,
        name: chance.name(),
        avatar: chance.avatar({protocol: 'https', fileExtension: 'png'}),
    }));

    data.posts = new Array(200).fill(null).map((_, i) => ({
        id: i,
        title: chance.sentence(),
        content: chance.paragraph(),
        userId: getRand(data.users).id,
    }));

    data.likes = new Array(1000).fill(null).map((_, i) => ({
        id: i,
        userId: getRand(data.users).id,
        postId: getRand(data.posts).id,
    }));
    return data;
};
